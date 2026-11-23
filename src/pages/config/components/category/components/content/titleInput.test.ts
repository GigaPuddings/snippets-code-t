import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import * as Vue from 'vue';
import { compileTemplate, parse } from 'vue/compiler-sfc';
import { expect, it } from 'vitest';

const { descriptor } = parse(
  readFileSync(new URL('./index.vue', import.meta.url), 'utf8')
);
const template = descriptor.template!.content;
function compilePart(pattern: RegExp) {
  const { code, errors } = compileTemplate({
    id: 'content-title-test',
    filename: 'content.vue',
    source: template.match(pattern)![0],
    compilerOptions: { mode: 'function', prefixIdentifiers: true }
  });
  if (errors.length) throw new Error(String(errors[0]));
  return runInNewContext(`(function () { ${code} })()`, {
    Vue: { ...Vue, resolveComponent: (name: string) => name }
  }) as (context: Record<string, unknown>, cache: unknown[]) => Vue.VNode;
}

const renderBreadcrumb = compilePart(/<nav\b[\s\S]*?<\/nav>/);
const context = {
  state: { currentContent: { title: 'Note' } },
  draftTitle: 'Note',
  contentFolder: { name: 'Folder', path: '/folder' },
  contextHeading: 'Section title',
  t: (key: string) => key
};

it('renders the note filename and optional section in the breadcrumb', () => {
  const breadcrumb = renderBreadcrumb(context, []);
  const children = breadcrumb.children as Vue.VNode[];
  expect(children[2].children).toBe('Note');
  const section = children[3].children as Vue.VNode[];
  expect(section[1].children).toBe('Section title');
});

it('shows the snippet filename in the breadcrumb with no title input', () => {
  expect(template).not.toMatch(/<(?:el-)?input\b/);
  const breadcrumb = renderBreadcrumb(
    { ...context, contextHeading: null, draftTitle: 'Snippet' },
    []
  );
  const children = breadcrumb.children as Vue.VNode[];
  expect(children[2].children).toBe('Snippet');
  expect(children[3].type).toBe(Vue.Comment);
});
