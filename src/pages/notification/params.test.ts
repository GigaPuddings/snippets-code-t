import { expect, it } from 'vitest';
import { parseQuery } from 'vue-router';
import { notificationParams } from './params';
it('preserves literal percent signs, non-ASCII titles, and encoded-looking titles', () => {
  for (const body of [
    '完成 100%',
    'Review %2F and https://example.com/?x=1',
    '中文提醒'
  ]) {
    expect(
      notificationParams(
        parseQuery(
          `body=${encodeURIComponent(body)}&reminder_time=5&alarm_id=alarm`
        )
      )
    ).toEqual({ body, reminderTime: '5', alarmId: 'alarm' });
  }
  expect(notificationParams({ body: ['invalid'], alarm_id: null })).toEqual({
    body: '',
    reminderTime: '',
    alarmId: ''
  });
});
