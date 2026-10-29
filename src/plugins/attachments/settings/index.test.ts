import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import * as Vue from 'vue';
import { compileTemplate, parse } from 'vue/compiler-sfc';
import { afterEach, describe, expect, it, vi } from 'vitest';

const source = readFileSync(new URL('./index.vue', import.meta.url), 'utf8');
const { descriptor } = parse(source);
if (!descriptor.scriptSetup || !descriptor.template) {
  throw new Error('Attachment settings must have a script and template');
}
const ast = ts.createSourceFile(
  'attachment-settings.ts',
  descriptor.scriptSetup.content,
  ts.ScriptTarget.Latest,
  true
);
const declaration = ast.statements.find(
  (statement) =>
    ts.isFunctionDeclaration(statement) &&
    statement.name?.text === 'generateExampleFilename'
);
if (!declaration) throw new Error('Missing filename preview function');
const generatorCode = ts.transpileModule(
  `${declaration.getText(ast)}; generateExampleFilename;`,
  { compilerOptions: { target: ts.ScriptTarget.ES2022 } }
).outputText;
const generateExampleFilename = runInNewContext(generatorCode, {
  Date,
  crypto: globalThis.crypto
}) as (format: string) => string;

// Execute the real select template to check which formats the user can select.
const selectTemplate = descriptor.template.content.match(
  /<el-select[\s\S]*?<\/el-select>/
);
if (!selectTemplate) throw new Error('Missing filename format selector');
const { code, errors } = compileTemplate({
  id: 'attachment-settings-test',
  filename: 'attachment-settings.vue',
  source: selectTemplate[0],
  compilerOptions: { mode: 'function', prefixIdentifiers: true }
});
if (errors.length) throw new Error(String(errors[0]));
const renderSelect = runInNewContext(`(function () { ${code} })()`, {
  Vue: { ...Vue, resolveComponent: (name: string) => name }
}) as (context: Record<string, unknown>, cache: unknown[]) => Vue.VNode;

afterEach(() => vi.useRealTimers());

describe('attachment filename settings', () => {
  it('offers the canonical default format with the simple and UUID formats', () => {
    const select = renderSelect(
      {
        config: { filenameFormat: 'snippets-code' },
        isSaving: false,
        handleConfigChange: () => undefined,
        $t: (key: string) => key
      },
      []
    );
    const options = select.children as Vue.VNode[];
    expect(options.map((option) => option.props?.value)).toEqual([
      'snippets-code',
      'simple',
      'uuid'
    ]);
  });

  it.each(['snippets-code', 'obsidian'])(
    'previews the classic filename for %s',
    (format) => {
      expect(generateExampleFilename(format)).toMatch(
        /^Pasted image \d{14}\.png$/
      );
    }
  );

  it('uses the same local calendar date and time as the backend', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 29, 0, 5, 6));
    const generate = runInNewContext(generatorCode, {
      Date,
      crypto: globalThis.crypto
    }) as (format: string) => string;

    expect(generate('snippets-code')).toBe('Pasted image 20261029000506.png');
    expect(generate('simple')).toBe('image-20261029-000506.png');
  });

  it('previews valid UUID names for the UUID option', () => {
    expect(generateExampleFilename('uuid')).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.png$/
    );
  });
});
