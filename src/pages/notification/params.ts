export function notificationParams(query: Record<string, unknown>): {
  body: string;
  reminderTime: string;
  alarmId: string;
} {
  // Vue Router has already decoded query values; decoding again corrupts '%' titles.
  const text = (value: unknown): string =>
    typeof value === 'string' ? value : '';
  return {
    body: text(query.body),
    reminderTime: text(query.reminder_time),
    alarmId: text(query.alarm_id)
  };
}
