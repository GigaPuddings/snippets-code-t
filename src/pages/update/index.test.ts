import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const updatePageSource = readFileSync(
  fileURLToPath(new URL('./index.vue', import.meta.url)),
  'utf8'
);

describe('update operation states', () => {
  it('does not render the install failure panel while installation is starting', () => {
    expect(updatePageSource).toContain(
      'v-else-if="update.error" class="error-message"'
    );
    expect(updatePageSource).not.toContain(
      '<div v-else class="error-message">'
    );
  });

  it('handles automatic download retry progress', () => {
    expect(updatePageSource).toContain("case 'Retrying':");
    expect(updatePageSource).toContain("t('update.retryingDownload'");
  });
});
