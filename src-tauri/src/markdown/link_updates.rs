use super::{
    file_system_manager::FileSystemManager, metadata::read_front_matter_metadata, safe_write,
};
use pulldown_cmark::{Event, LinkType, Options, Parser, Tag};
use serde::Serialize;
use std::{
    collections::HashMap,
    fs,
    io::BufReader,
    ops::Range,
    path::{Component, Path, PathBuf},
};
use walkdir::WalkDir;

#[derive(Default, Serialize)]
#[serde(rename_all = "camelCase")]
pub(super) struct LinkUpdateReport {
    pub(super) links: usize,
    pub(super) files: Vec<PathBuf>,
    pub(super) failures: Vec<(PathBuf, String)>,
    pub(super) ambiguous: usize,
    #[serde(skip)]
    pub(super) saved_destination: Option<(String, String)>,
}

struct Note {
    before: String,
    after: String,
    old_title: String,
    title: String,
    code: bool,
}

fn filename(path: &str) -> &str {
    path.rsplit('/').next().unwrap_or(path)
}

fn stem(path: &str) -> &str {
    let name = filename(path);
    if name.to_ascii_lowercase().ends_with(".md") {
        &name[..name.len() - 3]
    } else {
        name
    }
}

fn path_key(path: &str) -> String {
    if cfg!(windows) {
        path.to_lowercase()
    } else {
        path.to_owned()
    }
}

fn normalize(base: &str, path: &str) -> Option<String> {
    let mut parts: Vec<&str> = base.split('/').filter(|part| !part.is_empty()).collect();
    for part in path.split('/') {
        match part {
            "." | "" => {}
            ".." => {
                parts.pop()?;
            }
            _ => parts.push(part),
        }
    }
    Some(parts.join("/"))
}

fn parent(path: &str) -> &str {
    path.rsplit_once('/').map_or("", |(dir, _)| dir)
}

#[derive(Default)]
struct Catalog<'a> {
    paths: HashMap<String, &'a Note>,
    titles: HashMap<String, Vec<&'a Note>>,
    stems: HashMap<String, Vec<&'a Note>>,
}

enum Resolution<'a> {
    Found(&'a Note),
    Ambiguous(bool),
    Missing,
}

impl<'a> Catalog<'a> {
    fn new(notes: &'a [Note], before: bool) -> Self {
        let mut catalog = Self::default();
        for note in notes {
            let (path, title) = if before {
                (&note.before, &note.old_title)
            } else {
                (&note.after, &note.title)
            };
            catalog.paths.insert(path_key(path), note);
            let title_key = title.trim().to_lowercase();
            catalog.titles.entry(title_key).or_default().push(note);
            catalog
                .stems
                .entry(stem(path).to_lowercase())
                .or_default()
                .push(note);
        }
        catalog
    }

    fn resolve(&self, destination: &str, source: &str, wiki: bool) -> Resolution<'a> {
        let Ok(decoded) = urlencoding::decode(destination) else {
            return Resolution::Missing;
        };
        let path = decoded.replace('\\', "/");
        if path.is_empty() || path.starts_with("//") {
            return Resolution::Missing;
        }
        let has_extension = path.to_ascii_lowercase().ends_with(".md");
        if wiki && !has_extension && !path.contains('/') {
            let key = path.trim().to_lowercase();
            return match self
                .titles
                .get(&key)
                .or_else(|| self.stems.get(&key))
                .map(Vec::as_slice)
            {
                Some([note]) => Resolution::Found(note),
                Some(many) => Resolution::Ambiguous(
                    many.iter()
                        .any(|note| note.before != note.after || note.old_title != note.title),
                ),
                None => Resolution::Missing,
            };
        }
        if path.contains(':') {
            return Resolution::Missing;
        }
        let filename = if has_extension {
            path.clone()
        } else {
            format!("{path}.md")
        };
        let explicit_relative = path.starts_with("./") || path.starts_with("../");
        let bases = if path.starts_with('/') || (wiki && path.contains('/') && !explicit_relative) {
            ["", ""]
        } else {
            [
                parent(source),
                if explicit_relative {
                    parent(source)
                } else {
                    ""
                },
            ]
        };
        for base in bases {
            if let Some(note) =
                normalize(base, &filename).and_then(|key| self.paths.get(&path_key(&key)))
            {
                return Resolution::Found(note);
            }
        }
        // Obsidian also accepts a filename with .md when it is unique in the vault.
        if wiki && !path.contains('/') {
            return match self
                .stems
                .get(&stem(&path).to_lowercase())
                .map(Vec::as_slice)
            {
                Some([note]) => Resolution::Found(note),
                Some(many) => {
                    Resolution::Ambiguous(many.iter().any(|note| note.before != note.after))
                }
                None => Resolution::Missing,
            };
        }
        Resolution::Missing
    }
}

fn relative(from: &str, to: &str) -> String {
    let from: Vec<_> = parent(from)
        .split('/')
        .filter(|part| !part.is_empty())
        .collect();
    let to: Vec<_> = to.split('/').collect();
    let common = from
        .iter()
        .zip(to.iter().take(to.len() - 1))
        .take_while(|(a, b)| path_key(a) == path_key(b))
        .count();
    let mut parts = vec![".."; from.len() - common];
    parts.extend_from_slice(&to[common..]);
    parts.join("/")
}

fn escape_wiki(path: &str) -> String {
    path.replace('%', "%25")
        .replace('#', "%23")
        .replace('?', "%3F")
        .replace('|', "%7C")
        .replace('[', "%5B")
        .replace(']', "%5D")
}

fn new_destination(
    target: &Note,
    source: &Note,
    raw: &str,
    wiki: bool,
    after: &Catalog<'_>,
) -> String {
    if wiki {
        let title = target.title.trim();
        if !raw.contains(['/', '\\'])
            && !raw.to_ascii_lowercase().ends_with(".md")
            && !title.contains(['#', '?', '|', '[', ']', '/', '\\', '%'])
            && matches!(after.resolve(title, &source.after, true), Resolution::Found(note) if std::ptr::eq(note, target))
        {
            return title.to_owned();
        }
        let explicit = raw.contains(['/', '\\']);
        let mut path = if raw.starts_with("./") || raw.starts_with("../") {
            let relative = relative(&source.after, &target.after);
            if relative.starts_with("../") {
                relative
            } else {
                format!("./{relative}")
            }
        } else {
            target.after.clone()
        };
        if explicit && !raw.to_ascii_lowercase().ends_with(".md") {
            path.truncate(path.len() - 3);
        }
        let path = escape_wiki(&path);
        return if !raw.starts_with('/') && path.contains('/') {
            path
        } else {
            format!("/{path}")
        };
    }
    let path = if raw.starts_with('/') {
        format!("/{}", target.after)
    } else {
        let path = relative(&source.after, &target.after);
        if raw.starts_with("./") && !path.starts_with("../") {
            format!("./{path}")
        } else {
            path
        }
    };
    path.split('/')
        .map(|part| urlencoding::encode(part))
        .collect::<Vec<_>>()
        .join("/")
}

// Pulldown supplies the complete, parsed link span. Only locate the destination
// within that span so labels, titles, whitespace and anchors stay byte-for-byte.
fn markdown_destination(text: &str, reference: bool) -> Option<Range<usize>> {
    let bytes = text.as_bytes();
    let mut escaped = false;
    let mut depth = 0usize;
    let mut marker = None;
    let mut skip_until = 0;
    for (offset, byte) in bytes.iter().copied().enumerate() {
        if offset < skip_until {
            continue;
        }
        match byte {
            _ if escaped => escaped = false,
            b'\\' => escaped = true,
            b'`' if !reference => {
                let run = bytes[offset..].iter().take_while(|&&b| b == b'`').count();
                let mut cursor = offset + run;
                skip_until = cursor;
                while let Some(next) = text[cursor..].find('`') {
                    let start = cursor + next;
                    let end = start + bytes[start..].iter().take_while(|&&b| b == b'`').count();
                    if end - start == run {
                        skip_until = end;
                        break;
                    }
                    cursor = end;
                }
            }
            b'[' => depth += 1,
            b']' => {
                depth = depth.checked_sub(1)?;
                if depth == 0 {
                    marker = Some(offset + 1);
                    break;
                }
            }
            _ => {}
        }
    }
    let mut start = marker?;
    if bytes.get(start) != Some(&if reference { b':' } else { b'(' }) {
        return None;
    }
    start += 1;
    while bytes.get(start).is_some_and(u8::is_ascii_whitespace) {
        start += 1;
    }
    if bytes.get(start) == Some(&b'<') {
        let from = start + 1;
        return Some(from..from + text[from..].find('>')?);
    }
    depth = 0;
    escaped = false;
    let mut end = start;
    for byte in bytes[start..].iter().copied() {
        if escaped {
            escaped = false;
        } else {
            match byte {
                b'\\' => escaped = true,
                b'(' => depth += 1,
                b')' if depth == 0 => break,
                b')' => depth -= 1,
                byte if byte.is_ascii_whitespace() => break,
                _ => {}
            }
        }
        end += 1;
    }
    Some(start..end)
}

fn rewrite_body(
    body: &str,
    source: &Note,
    before: &Catalog<'_>,
    after: &Catalog<'_>,
) -> (String, usize, usize) {
    let parser = Parser::new_ext(
        body,
        Options::ENABLE_WIKILINKS
            | Options::ENABLE_TABLES
            | Options::ENABLE_FOOTNOTES
            | Options::ENABLE_YAML_STYLE_METADATA_BLOCKS,
    );
    let mut edits = Vec::new();
    let mut ambiguous = 0;
    let mut visit = |span: Range<usize>, wiki: bool, parsed_dest: &str| {
        let raw = &body[span.clone()];
        let path_end = raw.find(['#', '?']).unwrap_or(raw.len());
        let path = &raw[..path_end];
        let target_name = parsed_dest.split(['#', '?']).next().unwrap_or("").trim();
        match before.resolve(target_name, &source.before, wiki) {
            Resolution::Found(target) => {
                if matches!(after.resolve(target_name, &source.after, wiki), Resolution::Found(note) if std::ptr::eq(note, target))
                    && !(target.old_title != target.title
                        && wiki
                        && target_name == target.old_title)
                    && !(target.before != target.after
                        && target.before.eq_ignore_ascii_case(&target.after))
                {
                    return;
                }
                let trimmed = path.trim();
                let replacement = new_destination(target, source, trimmed, wiki, after);
                if replacement != trimmed {
                    let start = span.start + path.len() - path.trim_start().len();
                    edits.push((start..start + trimmed.len(), replacement));
                }
            }
            Resolution::Ambiguous(true) => ambiguous += 1,
            _ => {}
        }
    };
    for (_, definition) in parser.reference_definitions().iter() {
        let span = &definition.span;
        if let Some(inner) = markdown_destination(&body[span.clone()], true) {
            visit(
                span.start + inner.start..span.start + inner.end,
                false,
                &definition.dest,
            );
        }
    }
    for (event, span) in parser.into_offset_iter() {
        let (Event::Start(Tag::Link {
            link_type,
            dest_url,
            ..
        })
        | Event::Start(Tag::Image {
            link_type: link_type @ LinkType::WikiLink { .. },
            dest_url,
            ..
        })) = event
        else {
            continue;
        };
        let text = &body[span.clone()];
        match link_type {
            LinkType::WikiLink { .. } => {
                let Some(start) = text.find("[[") else {
                    continue;
                };
                let Some(rest) = text[start + 2..].strip_suffix("]]") else {
                    continue;
                };
                let target = rest
                    .split_once('|')
                    .map_or(rest, |(path, _)| path.trim_end_matches('\\'));
                visit(
                    span.start + start + 2..span.start + start + 2 + target.len(),
                    true,
                    target,
                );
            }
            LinkType::Inline => {
                if let Some(inner) = markdown_destination(text, false) {
                    visit(
                        span.start + inner.start..span.start + inner.end,
                        false,
                        &dest_url,
                    );
                }
            }
            _ => {}
        }
    }
    edits.sort_unstable_by_key(|(span, _)| span.start);
    edits.dedup_by(|(a, _), (b, _)| a == b);
    let count = edits.len();
    let mut result = body.to_string();
    for (span, replacement) in edits.into_iter().rev() {
        result.replace_range(span, &replacement);
    }
    (result, count, ambiguous)
}

fn relative_string(path: &Path) -> String {
    path.components()
        .filter_map(|part| match part {
            Component::Normal(name) => name.to_str(),
            _ => None,
        })
        .collect::<Vec<_>>()
        .join("/")
}

pub(super) struct Relocation<'a> {
    pub from: &'a Path,
    pub to: &'a Path,
    pub old_title: Option<&'a str>,
}

/// Scans the post-operation workspace and reconstructs the previous identities.
pub(super) fn update_links(
    fs_manager: &FileSystemManager,
    moves: &[Relocation<'_>],
) -> LinkUpdateReport {
    let root = fs_manager.workspace_root();
    let mut report = LinkUpdateReport::default();
    let mut notes = Vec::new();
    for entry in WalkDir::new(root).into_iter().filter_entry(|entry| {
        entry.depth() == 0
            || !(entry.file_name().to_string_lossy().starts_with('.')
                || entry.file_type().is_dir() && entry.file_name() == "assets")
    }) {
        let entry = match entry {
            Ok(entry) => entry,
            Err(error) => {
                report
                    .failures
                    .push((error.path().unwrap_or(root).to_owned(), error.to_string()));
                continue;
            }
        };
        let path = entry.path();
        if !entry.file_type().is_file()
            || !path
                .extension()
                .is_some_and(|ext| ext.eq_ignore_ascii_case("md"))
        {
            continue;
        }
        let Ok(rel) = path.strip_prefix(root) else {
            continue;
        };
        let after = relative_string(rel);
        let relocation = moves.iter().find(|item| path.starts_with(item.to));
        let before = relocation
            .and_then(|item| {
                item.from
                    .join(path.strip_prefix(item.to).ok()?)
                    .strip_prefix(root)
                    .ok()
                    .map(relative_string)
            })
            .unwrap_or_else(|| after.clone());
        let metadata = fs::File::open(path)
            .map_err(|error| error.to_string())
            .and_then(|file| read_front_matter_metadata(BufReader::new(file)));
        let (title, code) = match metadata {
            Ok(Some(meta)) => (meta.title, meta.fragment_type == "code"),
            Ok(None) => (stem(&after).to_owned(), false),
            Err(error) => {
                report.failures.push((path.to_path_buf(), error));
                // Keep the path in the catalog even when its front matter is unreadable.
                (stem(&after).to_owned(), true)
            }
        };
        let previous_title = relocation.and_then(|item| item.old_title).unwrap_or(&title);
        notes.push(Note {
            before,
            after,
            old_title: previous_title.to_owned(),
            title,
            code,
        });
    }
    let before = Catalog::new(&notes, true);
    let after = Catalog::new(&notes, false);
    for note in notes.iter().filter(|note| !note.code) {
        let path = root.join(&note.after);
        let result = (|| -> Result<(), String> {
            fs_manager.validate_path(&path)?;
            let raw = fs::read_to_string(&path).map_err(|error| error.to_string())?;
            if !raw.contains('[') {
                return Ok(());
            }
            let (_, body) = super::metadata::try_parse_front_matter(&raw);
            let (updated, count, ambiguous) = rewrite_body(&body, note, &before, &after);
            report.ambiguous += ambiguous;
            if count > 0 {
                let document = format!("{}{}", &raw[..raw.len() - body.len()], updated);
                let revision = safe_write::replace(
                    &path,
                    document.as_bytes(),
                    Some(&safe_write::revision(raw.as_bytes())),
                )?;
                if moves.len() == 1 && path == moves[0].to {
                    report.saved_destination = Some((updated, revision));
                }
                report.links += count;
                report.files.push(path.clone());
            }
            Ok(())
        })();
        if let Err(error) = result {
            report.failures.push((path, error));
        }
    }
    report
}

#[cfg(test)]
mod tests {
    use super::*;

    fn note(before: &str, after: &str) -> Note {
        Note {
            before: before.into(),
            after: after.into(),
            old_title: stem(before).into(),
            title: stem(after).into(),
            code: false,
        }
    }

    #[test]
    fn rename_changes_only_link_destinations() {
        let notes = [
            note("dir/Old.md", "dir/New Name.md"),
            note("notes/Source.md", "notes/Source.md"),
        ];
        let from = concat!(
            "---\r\nexample: '[[Old]]'\r\n---\r\n\r\n",
            "**[[Old#Head|shown]]** [unrelated label](../dir/Old.md#x \"Old\") ![[Old#^block]]\r\n",
            "\r\n[ref]: <../dir/Old.md> 'Title'\r\n\r\n",
            "[a][ref] [Old](https://example.com/Old.md) \\[[Old]] \u{0060}[[Old]]\u{0060}\r\n",
            "\u{0060}\u{0060}\u{0060}\r\n[[Old]]\r\n\u{0060}\u{0060}\u{0060}\r\n"
        );
        let (result, count, ambiguous) = rewrite_body(
            from,
            &notes[1],
            &Catalog::new(&notes, true),
            &Catalog::new(&notes, false),
        );
        let expected = from
            .replace("**[[Old#", "**[[New Name#")
            .replace("![[Old#", "![[New Name#")
            .replace("../dir/Old.md", "../dir/New%20Name.md");
        assert_eq!(result, expected);
        assert_eq!((count, ambiguous), (4, 0));
    }

    #[test]
    fn disambiguates_paths_and_preserves_a_moved_sources_outgoing_links() {
        let notes = [
            note("a/Old.md", "b/New.md"),
            note("a/Peer.md", "a/Peer.md"),
            note("c/New.md", "c/New.md"),
            note("c/Old.md", "c/Old.md"),
        ];
        let before = Catalog::new(&notes, true);
        let after = Catalog::new(&notes, false);
        let (body, count, ambiguous) = rewrite_body(
            "[[Old]] [[a/Old|show]] [text](./Peer.md#top) [[c/Old]]",
            &notes[0],
            &before,
            &after,
        );
        assert_eq!(
            body,
            "[[Old]] [[b/New|show]] [text](../a/Peer.md#top) [[c/Old]]"
        );
        assert_eq!((count, ambiguous), (2, 1));
        // A formerly unique link must keep its original destination when a rename introduces a duplicate.
        assert_eq!(
            rewrite_body("[[New]]", &notes[1], &before, &after).0,
            "[[c/New.md]]"
        );
    }

    #[test]
    fn keeps_table_separators_and_code_inside_link_labels() {
        let notes = [note("Old.md", "New.md"), note("Source.md", "Source.md")];
        let source = "| note |\n| --- |\n| [[Old\\|shown]] |\n\n[`x](y)`](Old.md)";
        let result = rewrite_body(
            source,
            &notes[1],
            &Catalog::new(&notes, true),
            &Catalog::new(&notes, false),
        );
        assert_eq!(result.0, source.replace("Old", "New"));
        assert_eq!(result.1, 2);
    }

    #[test]
    fn consecutive_renames_and_partial_write_failure() {
        let root =
            std::env::temp_dir().join(format!("markdown-link-test-{}", uuid::Uuid::new_v4()));
        fs::create_dir(&root).unwrap();
        let manager = FileSystemManager::new(root.clone());
        let source = root.join("Src.md");
        let protected = root.join("Locked.md");
        let old = root.join("A.md");
        let middle = root.join("B.md");
        let end = root.join("C.md");
        fs::write(&middle, "[[A]]").unwrap();
        fs::write(&source, "[[A|label]] [text](A.md)").unwrap();
        fs::write(&protected, "[[A]]").unwrap();
        let permissions = protected.metadata().unwrap().permissions();
        let mut readonly = permissions.clone();
        readonly.set_readonly(true);
        fs::set_permissions(&protected, readonly).unwrap();
        let first = update_links(
            &manager,
            &[Relocation {
                from: &old,
                to: &middle,
                old_title: Some("A"),
            }],
        );
        fs::set_permissions(&protected, permissions).unwrap();
        assert_eq!(first.links, 3);
        assert_eq!(first.files.len(), 2);
        assert_eq!(first.failures.len(), 1);
        assert_eq!(first.failures[0].0, protected);
        assert_eq!(fs::read_to_string(&protected).unwrap(), "[[A]]");
        fs::rename(&middle, &end).unwrap();
        let second = update_links(
            &manager,
            &[Relocation {
                from: &middle,
                to: &end,
                old_title: Some("B"),
            }],
        );
        assert_eq!(second.links, 3);
        assert!(second.failures.is_empty());
        assert_eq!(
            fs::read_to_string(source).unwrap(),
            "[[C|label]] [text](C.md)"
        );
        assert_eq!(second.saved_destination.unwrap().0, "[[C]]");
        fs::remove_dir_all(root).unwrap();
    }
}
