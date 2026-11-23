import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { describe, expect, it, vi } from 'vitest';
import { resolveWorkspaceFilePath } from '@/utils/file-system';

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

describe('content file actions', () => {
  const content = { id: 'C:/Notes/Example.md', title: 'Example' };

  it('requests the existing deletion confirmation for the current file', async () => {
    const dispatchEvent = vi.fn();
    const command = runInNewContext(handler, {
      state: { currentContent: content },
      window: { dispatchEvent },
      CustomEvent
    });
    await command('delete');
    expect(dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'sidebar-content-action',
        detail: { action: 'delete', content }
      })
    );
  });

  it.each([
    ['C:/Notes/Example.md', 'C:/Notes/Example.md'],
    ['Docs/Example.md', 'C:/Notes/Docs/Example.md'],
    ['\\\\server\\share\\Example.md', '\\\\server\\share\\Example.md']
  ])('opens the system app chooser for %s', async (id, absolutePath) => {
    const openFileWithOtherWays = vi.fn();
    const command = runInNewContext(handler, {
      state: { currentContent: { ...content, id } },
      workspaceRoot: { value: 'C:/Notes/' },
      resolveWorkspaceFilePath,
      openFileWithOtherWays
    });
    await command('openWith');
    expect(openFileWithOtherWays).toHaveBeenCalledExactlyOnceWith(absolutePath);
  });

  it('keeps file actions inactive while the document is loading', async () => {
    const dispatchEvent = vi.fn();
    const openFileWithOtherWays = vi.fn();
    const command = runInNewContext(handler, {
      state: { currentContent: content, isInitializing: true },
      window: { dispatchEvent },
      openFileWithOtherWays,
      CustomEvent
    });
    await command('delete');
    await command('openWith');
    expect(dispatchEvent).not.toHaveBeenCalled();
    expect(openFileWithOtherWays).not.toHaveBeenCalled();
  });
});
