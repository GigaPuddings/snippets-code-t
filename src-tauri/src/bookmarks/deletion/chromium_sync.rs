//! Edit only selected Chromium sync entities, preserving other protobuf fields verbatim.
//! Schema: components/sync/protocol/{bookmark_model_metadata,entity_metadata}.proto.
//! Deletion rules: SyncedBookmarkTracker::MarkDeleted / RecordLocalDeletion.
use base64::{engine::general_purpose::STANDARD, Engine};
use std::collections::HashSet;

const INVALID: &str = "书签同步记录格式不受支持或已损坏，未修改原文件";

struct Field<'a> {
    number: u32,
    wire: u8,
    raw: &'a [u8],
    payload: &'a [u8],
}

fn varint(bytes: &[u8], offset: &mut usize) -> Result<u64, String> {
    let mut value = 0;
    for shift in (0..70).step_by(7) {
        let byte = *bytes.get(*offset).ok_or(INVALID)?;
        *offset += 1;
        if shift == 63 && byte > 1 {
            return Err(INVALID.into());
        }
        value |= u64::from(byte & 127) << shift;
        if byte < 128 {
            return Ok(value);
        }
    }
    Err(INVALID.into())
}

fn fields(bytes: &[u8]) -> Result<Vec<Field<'_>>, String> {
    let mut result = Vec::new();
    let mut offset = 0;
    while offset < bytes.len() {
        if result.len() >= 250_000 {
            return Err(INVALID.into());
        }
        let start = offset;
        let tag = varint(bytes, &mut offset)?;
        let number = u32::try_from(tag >> 3).map_err(|_| INVALID)?;
        if number == 0 || number >= 1 << 29 {
            return Err(INVALID.into());
        }
        let wire = (tag & 7) as u8;
        let mut payload_start = offset;
        match wire {
            0 => {
                varint(bytes, &mut offset)?;
            }
            1 | 5 => {
                offset = offset
                    .checked_add(if wire == 1 { 8 } else { 4 })
                    .ok_or(INVALID)?
            }
            2 => {
                let length = usize::try_from(varint(bytes, &mut offset)?).map_err(|_| INVALID)?;
                payload_start = offset;
                offset = offset.checked_add(length).ok_or(INVALID)?;
            }
            // Chromium's metadata schemas do not use deprecated protobuf groups.
            _ => return Err(INVALID.into()),
        }
        result.push(Field {
            number,
            wire,
            raw: bytes.get(start..offset).ok_or(INVALID)?,
            payload: bytes.get(payload_start..offset).ok_or(INVALID)?,
        });
    }
    Ok(result)
}

fn single<'a>(
    fields: &'a [Field<'a>],
    number: u32,
    wire: u8,
) -> Result<Option<&'a Field<'a>>, String> {
    let mut matching = fields.iter().filter(|field| field.number == number);
    let field = matching.next();
    if matching.next().is_some() || field.is_some_and(|field| field.wire != wire) {
        return Err(INVALID.into());
    }
    Ok(field)
}

fn integer(fields: &[Field<'_>], number: u32) -> Result<Option<u64>, String> {
    single(fields, number, 0)?
        .map(|field| varint(field.payload, &mut 0))
        .transpose()
}

fn put_varint(output: &mut Vec<u8>, mut value: u64) {
    while value >= 128 {
        output.push(value as u8 | 128);
        value >>= 7;
    }
    output.push(value as u8);
}

fn put_integer(output: &mut Vec<u8>, number: u32, value: u64) {
    put_varint(output, u64::from(number) << 3);
    put_varint(output, value);
}

fn put_message(output: &mut Vec<u8>, number: u32, bytes: &[u8]) {
    put_varint(output, (u64::from(number) << 3) | 2);
    put_varint(output, bytes.len() as u64);
    output.extend_from_slice(bytes);
}

fn tombstone(record: &[Field<'_>], now_ms: u64) -> Result<Option<Vec<u8>>, String> {
    let entity = single(record, 2, 2)?.ok_or(INVALID)?;
    let metadata = fields(entity.payload)?;
    let sequence = integer(&metadata, 4)?.ok_or(INVALID)?;
    let acked = integer(&metadata, 5)?.ok_or(INVALID)?;
    if sequence < acked
        || sequence >= i64::MAX as u64
        || integer(&metadata, 3)?.unwrap_or(0) != 0
        || single(&metadata, 1, 2)?.is_none_or(|field| field.payload.is_empty())
        || integer(&metadata, 7)?.is_none()
    {
        return Err(INVALID.into());
    }
    // A never-committed local creation needs no remote deletion.
    if integer(&metadata, 6)? == Some(u64::MAX) && acked == 0 {
        return Ok(None);
    }
    if single(&metadata, 2, 2)?.is_none_or(|field| field.payload.is_empty()) {
        return Err(INVALID.into());
    }
    let mut edited = Vec::new();
    for field in &metadata {
        let replaced = [3, 4, 8, 9, 11, 12, 13].contains(&field.number)
            || (sequence == acked && field.number == 10);
        if !replaced {
            edited.extend_from_slice(field.raw);
        }
    }
    // Match IncrementSequenceNumber: remember the base specifics only if clean.
    if sequence == acked {
        if let Some(specifics) = single(&metadata, 9, 2)? {
            put_message(&mut edited, 10, specifics.payload);
        }
    }
    put_integer(&mut edited, 3, 1);
    put_integer(&mut edited, 4, sequence + 1);
    put_integer(&mut edited, 8, now_ms);
    let mut deleted = Vec::new();
    for field in record {
        // Tombstones MUST NOT retain a local bookmark ID.
        if ![1, 2].contains(&field.number) {
            deleted.extend_from_slice(field.raw);
        }
    }
    put_message(&mut deleted, 2, &edited);
    Ok(Some(deleted))
}

pub(super) fn record_deletions(
    encoded: &str,
    node_ids: &[String],
    now_ms: u64,
) -> Result<String, String> {
    if encoded.is_empty() {
        return Ok(encoded.into());
    }
    let bytes = STANDARD.decode(encoded).map_err(|_| INVALID)?;
    let model = fields(&bytes)?;
    let selected: HashSet<u64> = node_ids
        .iter()
        .map(|id| {
            id.parse::<u64>()
                .ok()
                .filter(|id| *id > 0 && *id <= i64::MAX as u64)
                .ok_or(INVALID.into())
        })
        .collect::<Result<_, String>>()?;
    let mut found = HashSet::new();
    let mut output = Vec::new();
    let mut pending = Vec::new();
    let mut entity_count = 0;
    for field in &model {
        if field.number == 2 {
            if field.wire != 2 {
                return Err(INVALID.into());
            }
            entity_count += 1;
            let record = fields(field.payload)?;
            if let Some(id) = integer(&record, 1)? {
                if selected.contains(&id) {
                    if !found.insert(id) {
                        return Err(INVALID.into());
                    }
                    if let Some(deleted) = tombstone(&record, now_ms)? {
                        pending.push(deleted);
                    }
                    continue;
                }
            }
        }
        output.extend_from_slice(field.raw);
    }
    if entity_count > 0 && found != selected {
        return Err(
            "所选书签缺少对应的同步记录，请在浏览器中完成同步后重新扫描；未修改原文件".into(),
        );
    }
    // Existing ordered tombstones stay intact; new deletions are appended.
    for deleted in pending {
        put_message(&mut output, 2, &deleted);
    }
    Ok(STANDARD.encode(output))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn entity(id: u64, version: u64, sequence: u64, acked: u64) -> Vec<u8> {
        let mut metadata = Vec::new();
        put_message(&mut metadata, 1, b"client-tag");
        put_message(&mut metadata, 2, b"server-id");
        for (number, value) in [
            (3, 0),
            (4, sequence),
            (5, acked),
            (6, version),
            (7, 123),
            (8, 456),
        ] {
            put_integer(&mut metadata, number, value);
        }
        put_message(&mut metadata, 9, b"specifics");
        put_message(&mut metadata, 10, b"previous-base");
        put_message(&mut metadata, 11, b"position");
        metadata.extend_from_slice(&[0x65, 1, 2, 3, 4]); // fixed32 favicon hash
        put_message(&mut metadata, 13, b"cached-specifics");
        put_message(&mut metadata, 100, b"unknown-vendor-data");
        let mut record = Vec::new();
        put_integer(&mut record, 1, id);
        put_message(&mut record, 2, &metadata);
        put_message(&mut record, 100, b"unknown-record-data");
        record
    }

    fn model(records: &[Vec<u8>]) -> String {
        let mut output = Vec::new();
        put_message(&mut output, 1, b"opaque-account-state");
        for record in records {
            put_message(&mut output, 2, record);
        }
        put_message(&mut output, 100, b"unknown-model-data");
        STANDARD.encode(output)
    }

    #[test]
    fn synced_deletion_has_no_local_id_and_is_pending_without_resetting_other_entities() {
        let untouched = entity(43, 90, 0, 0);
        for (sequence, acked) in [(0, 0), (4, 2)] {
            let input = model(&[entity(42, 88, sequence, acked), untouched.clone()]);
            let edited = record_deletions(&input, &["42".into()], 999).unwrap();
            let bytes = STANDARD.decode(edited).unwrap();
            let model_fields = fields(&bytes).unwrap();
            assert_eq!(
                single(&model_fields, 1, 2).unwrap().unwrap().payload,
                b"opaque-account-state"
            );
            assert_eq!(
                single(&model_fields, 100, 2).unwrap().unwrap().payload,
                b"unknown-model-data"
            );
            let records: Vec<_> = model_fields
                .iter()
                .filter(|field| field.number == 2)
                .collect();
            assert_eq!(records[0].payload, untouched);
            let deleted = fields(records[1].payload).unwrap();
            assert!(integer(&deleted, 1).unwrap().is_none());
            let metadata = fields(single(&deleted, 2, 2).unwrap().unwrap().payload).unwrap();
            assert_eq!(integer(&metadata, 3).unwrap(), Some(1));
            assert_eq!(integer(&metadata, 4).unwrap(), Some(sequence + 1));
            assert_eq!(integer(&metadata, 5).unwrap(), Some(acked));
            assert_eq!(integer(&metadata, 6).unwrap(), Some(88));
            assert_eq!(integer(&metadata, 8).unwrap(), Some(999));
            assert_eq!(
                single(&metadata, 10, 2).unwrap().unwrap().payload,
                if sequence == acked {
                    b"specifics".as_slice()
                } else {
                    b"previous-base"
                }
            );
            assert!([9, 11, 12, 13]
                .iter()
                .all(|number| metadata.iter().all(|field| field.number != *number)));
            assert_eq!(
                single(&metadata, 100, 2).unwrap().unwrap().payload,
                b"unknown-vendor-data"
            );
        }
    }

    #[test]
    fn uncommitted_entities_are_removed_and_existing_tombstones_keep_their_order() {
        let original = entity(40, 80, 0, 0);
        let existing = tombstone(&fields(&original).unwrap(), 1).unwrap().unwrap();
        let input = model(&[entity(42, u64::MAX, 1, 0), existing.clone()]);
        let edited = record_deletions(&input, &["42".into()], 999).unwrap();
        assert_eq!(edited, model(&[existing]));
        assert_eq!(record_deletions("", &["42".into()], 999).unwrap(), "");
    }

    #[test]
    #[ignore = "Read-only external fixture validation; requires SNIPPETS_BOOKMARK_FIXTURE and SNIPPETS_BOOKMARK_NODE_ID"]
    fn external_profile_fixture_preserves_sync_state_and_all_unselected_records() {
        use serde_json::Value;
        use std::path::Path;
        fn find_node<'a>(node: &'a Value, id: &str) -> Option<&'a Value> {
            if node.get("id").and_then(Value::as_str) == Some(id) {
                return Some(node);
            }
            node.get("children")
                .and_then(Value::as_array)?
                .iter()
                .find_map(|child| find_node(child, id))
        }
        let path = std::env::var("SNIPPETS_BOOKMARK_FIXTURE").expect("fixture path is required");
        let id = std::env::var("SNIPPETS_BOOKMARK_NODE_ID").expect("fixture node ID is required");
        let original = std::fs::read(&path).unwrap();
        let value: Value = serde_json::from_slice(&original).unwrap();
        let node = value["roots"]
            .as_object()
            .unwrap()
            .values()
            .find_map(|root| find_node(root, &id))
            .expect("selected node exists");
        let source = super::super::super::BookmarkSource::new(
            "Chrome",
            Path::new(&path),
            id.clone(),
            vec![],
            node["url"].as_str().unwrap(),
            node["name"].as_str().unwrap(),
        );
        let edited = super::super::edited_chromium(&original, &[source]).unwrap();
        let result: Value = serde_json::from_slice(&edited).unwrap();
        assert!(result["roots"]
            .as_object()
            .unwrap()
            .values()
            .all(|root| find_node(root, &id).is_none()));
        let before = STANDARD
            .decode(value["sync_metadata"].as_str().unwrap())
            .unwrap();
        let after = STANDARD
            .decode(result["sync_metadata"].as_str().unwrap())
            .unwrap();
        let before_fields = fields(&before).unwrap();
        let after_fields = fields(&after).unwrap();
        let target = id.parse::<u64>().unwrap();
        let selected = before_fields
            .iter()
            .find(|field| {
                field.number == 2
                    && integer(&fields(field.payload).unwrap(), 1).unwrap() == Some(target)
            })
            .unwrap();
        let old_record = fields(selected.payload).unwrap();
        let old_entity = fields(single(&old_record, 2, 2).unwrap().unwrap().payload).unwrap();
        let client_tag = single(&old_entity, 1, 2).unwrap().unwrap().payload;
        let mut matching_deletions = 0;
        for field in &after_fields {
            if field.number != 2 {
                continue;
            }
            let record = fields(field.payload).unwrap();
            assert_ne!(integer(&record, 1).unwrap(), Some(target));
            let metadata = fields(single(&record, 2, 2).unwrap().unwrap().payload).unwrap();
            if single(&metadata, 1, 2).unwrap().unwrap().payload == client_tag {
                matching_deletions += 1;
                assert_eq!(integer(&metadata, 3).unwrap(), Some(1));
                assert!(
                    integer(&metadata, 4).unwrap().unwrap()
                        > integer(&metadata, 5).unwrap().unwrap()
                );
                assert_eq!(
                    integer(&metadata, 6).unwrap(),
                    integer(&old_entity, 6).unwrap()
                );
            }
        }
        assert_eq!(matching_deletions, 1);
        for field in &before_fields {
            if field.raw != selected.raw {
                assert_eq!(
                    after_fields
                        .iter()
                        .filter(|after| after.raw == field.raw)
                        .count(),
                    1
                );
            }
        }
        assert_eq!(std::fs::read(path).unwrap(), original);
    }

    #[test]
    fn corrupt_duplicate_missing_or_overflowed_metadata_is_rejected() {
        for input in [
            "not-base64".into(),
            STANDARD.encode([0]),
            STANDARD.encode([0x12, 0x7f]),
            model(&[entity(42, 80, 0, 1)]),
            model(&[entity(42, 80, i64::MAX as u64, 0)]),
            model(&[entity(43, 80, 0, 0)]),
            model(&[entity(42, 80, 0, 0), entity(42, 80, 0, 0)]),
        ] {
            assert!(record_deletions(&input, &["42".into()], 999).is_err());
        }
        assert!(record_deletions(
            &model(&[entity(42, 80, 0, 0)]),
            &["42".into(), "43".into()],
            999
        )
        .is_err());
        assert!(
            fields(&[0x08, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x02]).is_err()
        );
    }
}
