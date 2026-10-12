import dayjs from 'dayjs';

export const WEEKDAYS = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
] as const;
const legacyWeekdays = ['一', '二', '三', '四', '五', '六', '日'];
export const normalizeWeekdays = (days: string[]): string[] =>
  [
    ...new Set(
      days.map((day) => {
        const index = legacyWeekdays.indexOf(day);
        return index < 0 ? day : WEEKDAYS[index];
      })
    )
  ].filter((day) => WEEKDAYS.includes(day as (typeof WEEKDAYS)[number]));

export interface ReminderDraft {
  hour: string;
  minute: string;
  title: string;
  weekdays: string[];
  reminderTime: string;
  alarmType: AlarmCard['alarm_type'];
  specificDates: string[];
}

export function createReminderDraft(
  card: AlarmCard | null,
  now = new Date()
): ReminderDraft {
  const next = dayjs(now).add(1, 'minute').second(0);
  return {
    hour: card?.time.split(':')[0] ?? next.format('HH'),
    minute: card?.time.split(':')[1] ?? next.format('mm'),
    title: card?.title ?? '',
    weekdays: normalizeWeekdays(card?.weekdays ?? []),
    reminderTime: card?.reminder_time ?? '5',
    alarmType: card?.alarm_type ?? 'Daily',
    specificDates: [...(card?.specific_dates ?? [next.format('YYYY-MM-DD')])]
  };
}

export function reminderPayload(
  draft: ReminderDraft,
  existing: AlarmCard | null
): Partial<AlarmCard> {
  return {
    id: existing?.id ?? '',
    time: `${draft.hour}:${draft.minute}`,
    title: draft.title.trim(),
    weekdays: draft.alarmType === 'Weekly' ? [...draft.weekdays] : [],
    reminder_time: draft.reminderTime,
    is_active: existing?.is_active ?? true,
    alarm_type: draft.alarmType,
    specific_dates:
      draft.alarmType === 'SpecificDate' ? [...draft.specificDates] : null
  };
}

export function reminderStatus(card: AlarmCard, now = Date.now()): string[] {
  if (!card.is_active) return ['disabled'];
  if (card.alarm_type === 'SpecificDate' && card.next_alarm_at === null)
    return ['expired'];
  const target = card.next_alarm_at ? Date.parse(card.next_alarm_at) : NaN;
  return target > now && target - now <= 3_600_000 ? ['urgent'] : [];
}

type Translate = (
  key: string,
  values?: Record<string, string | number>
) => string;
export function reminderCountdown(
  card: AlarmCard,
  t: Translate,
  now = Date.now()
): string {
  if (!card.is_active) return t('alarm.paused');
  if (card.next_alarm_at === undefined) return card.time_left;
  if (!card.next_alarm_at)
    return t(
      card.alarm_type === 'SpecificDate' ? 'alarm.expired' : 'alarm.notSet'
    );
  const minutes = Math.ceil((Date.parse(card.next_alarm_at) - now) / 60_000);
  if (minutes <= 0) return t('alarm.due');
  if (minutes >= 1440)
    return t('alarm.daysLeft', { count: Math.ceil(minutes / 1440) });
  if (minutes >= 60)
    return t('alarm.hoursLeft', { count: Math.ceil(minutes / 60) });
  return t('alarm.minutesLeft', { count: minutes });
}
