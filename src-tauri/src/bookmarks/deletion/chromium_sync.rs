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
