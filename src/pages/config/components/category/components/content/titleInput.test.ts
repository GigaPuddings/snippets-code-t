import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import * as Vue from 'vue';
import { compileTemplate, parse } from 'vue/compiler-sfc';
import { expect, it, vi } from 'vitest';
import { useContentHeading } from './useContentHeading';

const { descriptor } = parse(
  readFileSync(new URL('./index.vue', import.meta.url), 'utf8')
);
if (!descriptor.scriptSetup || !descriptor.template)
  throw new Error('Missing content editor');
const ast = ts.createSourceFile(
  'content.ts',
  descriptor.scriptSetup.content,
  ts.ScriptTarget.Latest,
  true
);
const names = ['handleTitleFocus', 'handleTitleBlur', 'handleTitleInput'];
const declarations = ast.statements.filter(
  (statement) =>
    ts.isVariableStatement(statement) &&
    statement.declarationList.declarations.some((item) =>
      names.includes(item.name.getText(ast))
    )
);
const handlerCode = ts.transpileModule(
  `${declarations.map((item) => item.getText(ast)).join('\n')}; ({${names.join(',')}});`,
  { compilerOptions: { target: ts.ScriptTarget.ES2022 } }
).outputText;
const inputTemplate = descriptor.template.content.match(
  /<el-input\b[\s\S]*?\/>/
);
if (!inputTemplate) throw new Error('Missing filename input');
const { code, errors } = compileTemplate({
  id: 'content-title-test',
  filename: 'content.vue',
  source: inputTemplate[0],
  compilerOptions: { mode: 'function', prefixIdentifiers: true }
});
if (errors.length) throw new Error(String(errors[0]));
const renderInput = runInNewContext(`(function () { ${code} })()`, {
  Vue: { ...Vue, resolveComponent: (name: string) => name }
}) as (context: Record<string, unknown>, cache: unknown[]) => Vue.VNode;

it('keeps context headings out of filename edits and saves using the real template handlers', async () => {
  const scope = Vue.effectScope();
  const context = scope.run(() =>
    useContentHeading(Vue.ref(true), Vue.ref('note.md'))
  );
  if (!context) throw new Error('Missing title context');
  const draftTitle = Vue.ref('Original filename');
  const select = vi.fn();
  const commitTitleChange = vi.fn(() => draftTitle.value);
  const handlers = runInNewContext(handlerCode, {
    showHeading: context.showHeading,
    titleFocused: context.titleFocused,
    titleInputRef: { value: { select } },
    nextTick: Vue.nextTick,
    commitTitleChange,
    draftTitle,
    titleDirty: Vue.ref(false),
    state: { isInitializing: false, title: 'Original filename' },
    scheduleDeferredEditorMount: vi.fn()
  });
  const render = () =>
    renderInput(
      {
        showHeading: context.showHeading.value,
        contextHeading: context.heading.value,
        draftTitle: draftTitle.value,
        t: (key: string) => key,
        ...handlers,
        commitTitleChange
      },
      []
    ).props!;
  context.setHeading('Section title');
  expect(render()['model-value']).toBe('Section title');
  expect(render().readonly).toBe(true);
  render().onInput('Section title');
  expect(draftTitle.value).toBe('Original filename');
  expect(commitTitleChange).not.toHaveBeenCalled();
  render().onFocus();
  await Vue.nextTick();
  expect(select).toHaveBeenCalledOnce();
  expect(render()['model-value']).toBe('Original filename');
  context.setHeading('Another section');
  render().onInput('Renamed file');
  expect(render()['model-value']).toBe('Renamed file');
  render().onBlur();
  expect(commitTitleChange).toHaveLastReturnedWith('Renamed file');
  expect(render()['model-value']).toBe('Another section');
  scope.stop();
});
