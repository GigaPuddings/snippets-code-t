import { readFileSync } from 'node:fs';
import { EditorState, type TransactionSpec } from '@codemirror/state';
import { EditorView, type ViewUpdate } from '@codemirror/view';
import * as Vue from 'vue';
import { createRenderer, h, nextTick, ref, ssrContextKey } from 'vue';
import { compileScript, compileTemplate, parse } from 'vue/compiler-sfc';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getConflictFileContent, type ConflictFileContent } from '../../api';
import GitManualMerge from './index.vue';

vi.mock('../../api', () => ({ getConflictFileContent: vi.fn() }));
vi.mock('vue-i18n', () => ({ useI18n: () => ({ t: (key: string) => key }) }));
vi.mock('vue', async (importOriginal) => {
  const vue = await importOriginal<typeof import('vue')>();
  return { ...vue, Transition: vue.BaseTransition };
});

// Keep CodeMirror's real state, transactions and extension listeners. Only
// the browser view is substituted so requests and late updates are controllable.
class MemoryView {
  scrollDOM = new EventTarget();
  destroyed = false;
  constructor(public state: EditorState) {
    views.push(this);
  }
  dispatch(spec: TransactionSpec) {
    const transaction = this.state.update(spec);
    this.state = transaction.state;
    for (const listener of this.state.facet(EditorView.updateListener)) {
      listener({
        view: this,
        state: this.state,
        docChanged: transaction.docChanged
      } as unknown as ViewUpdate);
    }
  }
  replace(text: string) {
    this.dispatch({
      changes: { from: 0, to: this.state.doc.length, insert: text }
    });
  }
  destroy() {
    this.destroyed = true;
  }
}
const views: MemoryView[] = [];
const themeChanges: Array<() => void> = [];
vi.mock('@codemirror/view', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@codemirror/view')>();
  return {
    ...actual,
    EditorView: new Proxy(actual.EditorView, {
      construct: (_target, [config]) => new MemoryView(config.state)
    })
  };
});

interface HostNode {
  type: string;
  children: HostNode[];
  parent?: HostNode;
  class?: string;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
}
const node = (type: string): HostNode => ({ type, children: [] });
const remove = (el: HostNode) => {
  const siblings = el.parent?.children;
  if (siblings) siblings.splice(siblings.indexOf(el), 1);
  el.parent = undefined;
};
function elements(el: HostNode): HostNode[] {
  return [el, ...el.children.flatMap(elements)];
}
function mountDialog() {
  const root = node('root');
  const body = node('body');
  const visible = ref(false);
  const complete = vi.fn();
  const renderer = createRenderer<HostNode, HostNode>({
    createElement: node,
    createText: node,
    createComment: node,
    setText: () => {},
    setElementText: () => {},
    querySelector: () => body,
    parentNode: (el) => el.parent ?? null,
    nextSibling: (el) => {
      const siblings = el.parent?.children ?? [];
      return siblings[siblings.indexOf(el) + 1] ?? null;
    },
    patchProp: (el, key, _old, value) => Object.assign(el, { [key]: value }),
    insert: (el, parent, anchor) => {
      remove(el);
      el.parent = parent;
      const index = anchor ? parent.children.indexOf(anchor) : -1;
      parent.children.splice(index < 0 ? parent.children.length : index, 0, el);
    },
    remove
  });
  // Vitest's Node environment loads the SSR render function. Compile the
  // same template for the in-memory client renderer.
  const filename = 'index.vue';
  const id = 'manual-merge-test';
  const { descriptor } = parse(
    readFileSync(new URL(filename, import.meta.url), 'utf8')
  );
  const { code } = compileTemplate({
    id,
    filename,
    source: descriptor.template!.content,
    compilerOptions: {
      mode: 'function',
      bindingMetadata: compileScript(descriptor, { id }).bindings
    }
  });
  const component = {
    ...GitManualMerge,
    render: new Function('Vue', code)(Vue)
  } as typeof GitManualMerge;
  const app = renderer.createApp(() =>
    h(component, {
      modelValue: visible.value,
      conflictFiles: ['a.md', 'b.md', 'unopened.md'],
      onComplete: complete
    })
  );
  app.provide(ssrContextKey, { modules: new Set() });
  app.config.globalProperties.$t = (key: string) => key;
  app.mount(root);
  const button = (className: string, title?: string) => {
    const match = elements(body).find(
      (el) =>
        el.type === 'button' &&
        el.class?.split(' ').includes(className) &&
        (!title || el.title === title)
    );
    if (!match?.onClick)
      throw new Error(`Button not found: ${title ?? className}`);
    return match;
  };
  return { visible, button, complete, unmount: () => app.unmount() };
}

function nextRead(file: string) {
  let resolve!: (content: ConflictFileContent) => void;
  const promise = new Promise<ConflictFileContent>((done) => {
    resolve = done;
  });
  vi.mocked(getConflictFileContent).mockImplementationOnce((path) => {
    expect(path).toBe(file);
    return promise;
  });
  return async (local: string) => {
    resolve({
      file_path: file,
      local_content: local,
      remote_content: 'remote',
      base_content: null
    });
    await promise;
    await nextTick();
  };
}

const currentEditor = () => {
  const active = views.filter(
    (view) => !view.destroyed && !view.state.readOnly
  );
  expect(active).toHaveLength(1);
  return active[0];
};

beforeEach(() => {
  views.length = 0;
  themeChanges.length = 0;
  vi.mocked(getConflictFileContent).mockReset();
  const element = { classList: { contains: () => false } };
  vi.stubGlobal(
    'document',
    Object.assign(new EventTarget(), {
      body: element,
      documentElement: element
    })
  );
  vi.stubGlobal(
    'MutationObserver',
    class {
      constructor(onChange: () => void) {
        themeChanges.push(onChange);
      }
      observe() {}
      disconnect() {}
    }
  );
  vi.stubGlobal('getComputedStyle', () => ({ getPropertyValue: () => '' }));
});
afterEach(() => vi.unstubAllGlobals());

describe('manual merge file switching', () => {
  it('keeps the active draft when the theme changes', async () => {
    const loadedA = nextRead('a.md');
    const dialog = mountDialog();
    dialog.visible.value = true;
    await nextTick();
    await loadedA('local A');
    const editor = currentEditor();
    editor.replace('draft A');
    document.documentElement.classList.contains = () => true;
    themeChanges.forEach((onChange) => onChange());
    await nextTick();
    expect(currentEditor()).toBe(editor);
    expect(editor.state.doc.toString()).toBe('draft A');
    expect(getConflictFileContent).toHaveBeenCalledTimes(1);
    dialog.unmount();
  });

  it('ignores a previous session response after closing and reopening', async () => {
    const oldRead = nextRead('a.md');
    const newRead = nextRead('a.md');
    const dialog = mountDialog();
    dialog.visible.value = true;
    await nextTick();
    dialog.visible.value = false;
    await nextTick();
    dialog.visible.value = true;
    await nextTick();
    await newRead('new session');
    await oldRead('old session');
    expect(currentEditor().state.doc.toString()).toBe('new session');
    dialog.unmount();
  });

  it('does not create an editor after unmounting with a pending read', async () => {
    const loadedA = nextRead('a.md');
    const dialog = mountDialog();
    dialog.visible.value = true;
    await nextTick();
    dialog.unmount();
    await loadedA('late response');
    expect(views).toHaveLength(0);
  });

  it('keeps the active document and saves its edits when the previous read finishes last', async () => {
    const loadedA = nextRead('a.md');
    const loadedB = nextRead('b.md');
    const dialog = mountDialog();
    dialog.visible.value = true;
    await nextTick();
    dialog.button('file-tab', 'b.md').onClick!();
    await nextTick();
    await loadedB('local B');
    await loadedA('local A');
    const editor = currentEditor();
    expect(editor.state.doc.toString()).toBe('local B');
    editor.replace('');
    dialog.button('batch-btn', 'settings.gitSync.acceptAllLocal').onClick!();
    dialog.button('primary-btn').onClick!();
    expect(dialog.complete).toHaveBeenCalledWith(
      { 0: 'local', 1: 'local', 2: 'local' },
      { 1: '' }
    );
    dialog.unmount();
  });

  it('ignores updates from a retired editor while another tab loads', async () => {
    const loadedA = nextRead('a.md');
    const loadedB = nextRead('b.md');
    const dialog = mountDialog();
    dialog.visible.value = true;
    await nextTick();
    await loadedA('local A');
    const oldEditor = currentEditor();
    oldEditor.replace('edited A');
    dialog.button('file-tab', 'b.md').onClick!();
    oldEditor.replace('late update');
    await nextTick();
    expect(oldEditor.destroyed).toBe(true);
    await loadedB('local B');
    expect(currentEditor().state.doc.toString()).toBe('local B');
    dialog.button('batch-btn', 'settings.gitSync.acceptAllLocal').onClick!();
    dialog.button('primary-btn').onClick!();
    expect(dialog.complete).toHaveBeenCalledWith(
      { 0: 'local', 1: 'local', 2: 'local' },
      { 0: 'edited A' }
    );
    dialog.unmount();
  });
});
