import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { parse } from 'vue/compiler-sfc';
import ts from 'typescript';
import { describe, expect, it, vi } from 'vitest';

// Exercise the actual app handler without loading native window setup or styles.
const { descriptor } = parse(
  readFileSync(new URL('./App.vue', import.meta.url), 'utf8')
);
const source = ts.createSourceFile(
  'app.ts',
  descriptor.scriptSetup!.content,
  ts.ScriptTarget.Latest,
  true
);
const handler = source.statements.find(
  (node) =>
    ts.isFunctionDeclaration(node) && node.name?.text === 'handleGlobalEscape'
);
if (!handler) throw new Error('Missing global Escape handler');
const script = ts.transpileModule(
  `${handler.getText(source)}; handleGlobalEscape;`,
  {
    compilerOptions: { target: ts.ScriptTarget.ES2022 }
  }
).outputText;

function setup() {
  const close = vi.fn(async () => undefined);
  const handle = runInNewContext(script, {
    getCurrentWindow: () => ({ label: 'config' }),
    shouldCloseWindowOnEscape: () => true,
    closeWindowByLabel: close,
    logger: { error: vi.fn() }
  }) as (event: KeyboardEvent) => void;
  const event = (extra = {}) =>
    ({
      key: 'Escape',
      target: { tagName: 'BODY' },
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      defaultPrevented: false,
      repeat: false,
      isComposing: false,
      ...extra
    }) as unknown as KeyboardEvent;
  return { close, handle, event };
}

describe('global Escape priority', () => {
  it.each([
    { defaultPrevented: true },
    { repeat: true },
    { isComposing: true }
  ])(
    'does not close the window for an already handled or in-progress key: %j',
    (flags) => {
      const { close, handle, event } = setup();
      handle(event(flags));
      expect(close).not.toHaveBeenCalled();
    }
  );

  it('keeps normal window Escape behavior when no overlay has handled it', () => {
    const { close, handle, event } = setup();
    const key = event();
    handle(key);
    expect(close).toHaveBeenCalledWith('config');
    expect(key.preventDefault).toHaveBeenCalled();
  });
});
