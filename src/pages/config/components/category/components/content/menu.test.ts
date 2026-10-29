import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

// Exercise the actual handler without mounting both full editor implementations.
const source = readFileSync(new URL('./index.vue', import.meta.url), 'utf8');
const script = source.match(/<script setup lang="ts">([\s\S]*?)<\/script>/)![1];
const ast = ts.createSourceFile(
  'content.ts',
  script,
  ts.ScriptTarget.Latest,
  true
);
const declaration = ast.statements.find(
  (statement) =>
    ts.isVariableStatement(statement) &&
    statement.declarationList.declarations.some(
      (item) => item.name.getText(ast) === 'handleContentMenuCommand'
    )
)!;
const handler = ts.transpileModule(
  `${declaration.getText(ast)}; handleContentMenuCommand;`,
  { compilerOptions: { target: ts.ScriptTarget.ES2022 } }
).outputText;

describe('content AI menu', () => {
  it.each(['code', 'note'])(
    'opens the existing dialog for %s',
    async (type) => {
      const showAiAssist = { value: false };
      const command = runInNewContext(handler, {
        state: { currentContent: { id: 'item.md' } },
        currentEditorType: { value: type },
        showAiAssist
      });
      await command('aiAssist');
      expect(showAiAssist.value).toBe(true);
    }
  );

  it('does not open a dialog without current content', async () => {
    const showAiAssist = { value: false };
    const command = runInNewContext(handler, {
      state: { currentContent: null },
      currentEditorType: { value: 'code' },
      showAiAssist
    });
    await command('aiAssist');
    expect(showAiAssist.value).toBe(false);
  });
});
