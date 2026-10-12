import { describe, expect, it } from 'vitest';
import {
  createReminderDraft,
  normalizeWeekdays,
  reminderPayload,
  reminderStatus,
  reminderCountdown,
  reminderCompleted,
  reminderSchedule
} from './reminders';

const card: AlarmCard = {
  id: 'alarm',
  time: '09:00',
  title: 'Keep draft',
  weekdays: ['一', '三'],
  reminder_time: '10',
  is_active: false,
  created_at: '',
  updated_at: '',
  time_left: '',
  alarm_type: 'SpecificDate',
  specific_dates: ['2026-10-13', '2026-10-14']
};
describe('reminder editing and presentation', () => {
  it('keeps all selected dates and paused state without mutating the saved reminder', () => {
    const draft = createReminderDraft(card);
    draft.specificDates.pop();
    draft.title = ' Changed ';
    expect(card.specific_dates).toHaveLength(2);
    expect(reminderPayload(draft, card)).toMatchObject({
      is_active: false,
      title: 'Changed',
      specific_dates: ['2026-10-13']
    });
  });
  it('normalizes legacy weekdays independently of the display language', () => {
    expect(normalizeWeekdays(['一', 'Mon', 'Wed', '三', 'invalid'])).toEqual([
      'Mon',
      'Wed'
    ]);
  });
  it('defaults to the next minute including midnight and uses all future dates for urgency', () => {
    const draft = createReminderDraft(null, new Date(2026, 9, 12, 23, 59, 10));
    expect(draft).toMatchObject({
      hour: '00',
      minute: '00',
      specificDates: ['2026-10-13']
    });
    expect(
      reminderStatus({ ...card, is_active: true, next_alarm_at: null })
    ).toEqual(['expired']);
    expect(
      reminderStatus(
        {
          ...card,
          is_active: true,
          next_alarm_at: '2026-10-13T09:00:00+08:00'
        },
        Date.parse('2026-10-13T08:30:00+08:00')
      )
    ).toEqual(['urgent']);
  });
  it('distinguishes consumed one-off reminders from paused reminders with future dates', () => {
    const translate = (key: string): string => key;
    const completed = { ...card, specific_dates: null };
    expect(reminderCompleted(completed)).toBe(true);
    expect(reminderStatus(completed)).toEqual(['completed']);
    expect(reminderCountdown(completed, translate)).toBe('alarm.completed');
    expect(reminderSchedule(completed, translate)).toBe('alarm.completedDates');
    expect(reminderCompleted(card)).toBe(false);
    expect(reminderCountdown(card, translate)).toBe('alarm.paused');
    expect(reminderCompleted({ ...completed, alarm_type: 'Daily' })).toBe(
      false
    );
  });
});
