import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import * as Vue from 'vue';
import { compileTemplate, parse } from 'vue/compiler-sfc';
import { describe, expect, it, vi } from 'vitest';
import { isConfigNavigationPathActive } from '@/plugins/navigation';

const { descriptor } = parse(
  readFileSync(new URL('./Titlebar.vue', import.meta.url), 'utf8')
);
if (!descriptor.scriptSetup || !descriptor.template)
  throw new Error('Missing titlebar script or template');
const ast = ts.createSourceFile(
  'titlebar.ts',
  descriptor.scriptSetup.content,
  ts.ScriptTarget.Latest,
  true
);
const { code, errors } = compileTemplate({
  id: 'titlebar-menu-test',
  filename: 'Titlebar.vue',
  source: descriptor.template.content,
  transformAssetUrls: false,
  compilerOptions: { mode: 'function', prefixIdentifiers: true }
});
if (errors.length) throw new Error(String(errors[0]));
const components = new Map<string, Vue.Component>();
const renderTemplate = runInNewContext(`(function () { ${code} })()`, {
  Vue: {
    ...Vue,
    resolveComponent: (name: string) => {
      if (!components.has(name)) components.set(name, { name });
      return components.get(name);
    }
  }
}) as (context: Record<string, unknown>, cache: unknown[]) => Vue.VNode;

function nodes(root: unknown): Vue.VNode[] {
  if (Array.isArray(root)) return root.flatMap(nodes);
  if (!Vue.isVNode(root)) return [];
  const children = root.children;
  return [
    root,
    ...(children && typeof children === 'object' && !Array.isArray(children)
      ? Object.values(children).flatMap((slot) =>
          typeof slot === 'function' ? nodes(slot()) : []
        )
      : nodes(children))
  ];
}
function render(overrides: Record<string, unknown> = {}): Vue.VNode[] {
  return nodes(
    renderTemplate(
      {
        isConfigRoute: true,
        showSidebarToggle: true,
        sidebarCollapsed: false,
        canGoBack: true,
        canGoForward: false,
        activeTabTitle: 'nav.workspace',
        state: { appName: 'Snippets Code', appVersion: '2.2.16' },
        hasUpdate: false,
        visibleTabs: [
          {
            id: 'workspace',
            path: '/config/category/contentList',
            label: 'workspace'
          },
          { id: 'local', path: '/config/local', label: 'local' }
        ],
        isTabActive: (path: string) =>
          isConfigNavigationPathActive(
            '/config/category/contentList/folder/content/note',
            path
          ),
        isMaximized: false,
        isMaximizable: true,
        isMinimizable: true,
        isChangingState: false,
        isAlwaysOnTop: false,
        quickSearchVisible: false,
        aboutVisible: false,
        whatsNewVisible: false,
        viewMenuOpen: false,
        aboutMenuOpen: false,
        t: (key: string) => key,
        $t: (key: string) => key,
        ...overrides
      },
      []
    )
  );
}
function component(node: Vue.VNode, name: string): boolean {
  return (
    typeof node.type === 'object' &&
    'name' in node.type &&
    node.type.name === name
  );
}
function command(items: Vue.VNode[], value: string): Vue.VNode | undefined {
  return items.find(
    (node) =>
      component(node, 'el-dropdown-item') && node.props?.command === value
  );
}
function handler(
  name: string,
  context: Record<string, unknown>
): (value: string) => Promise<void> {
  const declaration = ast.statements.find(
    (statement) =>
      ts.isVariableStatement(statement) &&
      statement.declarationList.declarations.some(
        (item) => item.name.getText(ast) === name
      )
  );
  expect(declaration, `Missing ${name}`).toBeDefined();
  if (!declaration) throw new Error(`Missing ${name}`);
  const script = ts.transpileModule(`${declaration.getText(ast)}; ${name};`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 }
  }).outputText;
  return runInNewContext(script, context) as (value: string) => Promise<void>;
}

describe('config titlebar menus', () => {
  it('places the update signal on About and removes it when no update is available', () => {
    const about = (available: boolean): Vue.VNode | undefined =>
      render({ hasUpdate: available }).find(
        (node) =>
          node.type === 'button' &&
          node.props?.['aria-label'] === 'titlebar.about'
      );
    expect(about(true)?.props?.['aria-description']).toBe(
      'titlebar.updateAvailable'
    );
    expect(about(false)?.props?.['aria-description']).toBeUndefined();
    expect(
      nodes(about(true)).some((node) =>
        node.props?.class?.includes('animate-ping')
      )
    ).toBe(true);
    expect(
      nodes(about(false)).some((node) =>
        node.props?.class?.includes('animate-ping')
      )
    ).toBe(false);
  });

  it('shows only supplied navigation tabs and derives selection from the current route', () => {
    const items = render();
    expect(command(items, 'navigate:workspace')?.props?.['aria-current']).toBe(
      'page'
    );
    expect(
      command(items, 'navigate:local')?.props?.['aria-current']
    ).toBeUndefined();
    expect(command(items, 'navigate:todo')).toBeUndefined();
    expect(
      command(
        render({ isTabActive: (path: string) => path === '/config/local' }),
        'navigate:local'
      )?.props?.['aria-current']
    ).toBe('page');
  });

  it('uses live sidebar and window state and disables unsupported window actions', () => {
    const items = render({
      isAlwaysOnTop: true,
      sidebarCollapsed: true,
      isMaximizable: false
    });
    // Selected destinations and toggle state must not create several persistent
    // highlighted rows. The destination and pin state have trailing checkmarks.
    for (const value of ['navigate:workspace', 'pinWindow', 'toggleSidebar']) {
      expect(command(items, value)?.props?.['data-active']).toBeUndefined();
    }
    expect(
      nodes(command(items, 'pinWindow')).some((node) =>
        component(node, 'Check')
      )
    ).toBe(true);
    expect(
      nodes(command(render(), 'pinWindow')).some((node) =>
        component(node, 'Check')
      )
    ).toBe(false);
    expect(command(items, 'maximize')?.props?.disabled).toBe(true);
    expect(
      command(render({ showSidebarToggle: false }), 'toggleSidebar')?.props
        ?.disabled
    ).toBe(true);
    expect(
      command(render({ isChangingState: true }), 'minimize')?.props?.disabled
    ).toBe(true);
  });

  it('marks only the currently open top-level menu trigger', () => {
    const trigger = (items: Vue.VNode[], label: string) =>
      items.find(
        (node) =>
          node.type === 'button' &&
          node.props?.['aria-label'] === `titlebar.${label}`
      );
    const viewOpen = render({ viewMenuOpen: true });
    expect(trigger(viewOpen, 'view')?.props?.['aria-expanded']).toBe(true);
    expect(trigger(viewOpen, 'view')?.props?.class).toContain(
      'bg-[var(--settings-surface)]'
    );
    expect(trigger(viewOpen, 'about')?.props?.class).not.toContain(
      'bg-[var(--settings-surface)]'
    );
    const aboutOpen = render({ aboutMenuOpen: true });
    expect(trigger(aboutOpen, 'about')?.props?.['aria-expanded']).toBe(true);
    expect(trigger(aboutOpen, 'view')?.props?.class).not.toContain(
      'bg-[var(--settings-surface)]'
    );
  });

  it('routes menu choices through the existing navigation, sidebar and window actions', async () => {
    const navigateTo = vi.fn();
    const toggleSidebar = vi.fn();
    const handleTitlebar = vi.fn();
    const run = handler('handleViewMenuCommand', {
      visibleTabs: {
        value: [{ id: 'workspace', path: '/config/category/contentList' }]
      },
      showSidebarToggle: { value: true },
      navigateTo,
      toggleSidebar,
      handleTitlebar
    });
    await run('navigate:workspace');
    await run('navigate:disabled-plugin');
    expect(navigateTo).toHaveBeenCalledExactlyOnceWith(
      '/config/category/contentList'
    );
    await run('toggleSidebar');
    expect(toggleSidebar).toHaveBeenCalledOnce();
    for (const action of ['minimize', 'maximize', 'close']) {
      await run(action);
      expect(handleTitlebar).toHaveBeenLastCalledWith(action);
    }
    await run('pinWindow');
    expect(handleTitlebar).toHaveBeenLastCalledWith('isAlwaysOnTop');
  });

  it('opens real release notes separately from checking for updates', async () => {
    expect(command(render(), 'whatsNew')).toBeDefined();
    const aboutVisible = Vue.ref(false);
    const whatsNewVisible = Vue.ref(false);
    const checkForUpdates = vi.fn();
    const run = handler('handleAboutMenuCommand', {
      aboutVisible,
      whatsNewVisible,
      checkForUpdates
    });
    await run('whatsNew');
    expect(whatsNewVisible.value).toBe(true);
    expect(aboutVisible.value).toBe(false);
    expect(checkForUpdates).not.toHaveBeenCalled();
    await run('checkUpdate');
    expect(checkForUpdates).toHaveBeenCalledOnce();
  });
});
