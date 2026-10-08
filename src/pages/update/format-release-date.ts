import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

/** 兼容旧缓存中 Rust OffsetDateTime 的 Display 格式，保留小数秒和时区。 */
export function formatReleaseDate(value?: string | null): string {
  if (!value?.trim()) return '';

  let normalized = value.trim();
  const legacy = normalized.match(
    /^(\d{4}-\d{2}-\d{2}) (\d{1,2}):(\d{2}):(\d{2})(\.\d{1,9})? ([+-]\d{2}:\d{2}):00$/
  );
  if (legacy) {
    const [, date, hours, minutes, seconds, fraction = '', offset] = legacy;
    normalized = `${date}T${hours.padStart(2, '0')}:${minutes}:${seconds}${fraction}${offset}`;
  }

  const date = dayjs(normalized);
  return date.isValid()
    ? date.tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
    : '';
}
