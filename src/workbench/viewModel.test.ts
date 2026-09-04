import { describe, expect, it } from 'vitest';
import type { MarkdownFile } from '@/types';
import { buildCapabilityItems } from './capabilities';
import {
  buildWorkbenchRecentItems,
  buildWorkbenchLayers,
  buildWorkbenchMetrics,
  statusChipClass,
  type WorkbenchTranslator,
  type WorkbenchViewModelInput
} from './viewModel';

const t: WorkbenchTranslator = (key, params): string =>
  params ? `${key}:${JSON.stringify(params)}` : key;

const settingsAction: WorkbenchViewModelInput['settingsAction'] = (
  tab,
  labelKey
) => ({
  label: t(labelKey),
  path: '/config/category/settings',
  query: { tab }
});

const input = (
  overrides: Partial<WorkbenchViewModelInput> = {}
): WorkbenchViewModelInput => ({
  t,
  workspaceRoot: 'E:/Workspace',
  categoriesCount: 2,
  content: { total: 3, snippets: 2, notes: 1, favorites: 1 },
  plugins: { installed: 2, enabled: 1, surfaces: 3 },
  search: { registered: 3, failed: 0, searching: 0 },
  ai: { providers: 2, healthy: 2, unavailable: 0 },
  settingsAction,
  ...overrides
});

describe('buildWorkbenchMetrics', () => {
  it('maps layer summaries into dashboard metrics', () => {
    expect(buildWorkbenchMetrics(input())).toMatchObject([
      { id: 'content', value: 3 },
      { id: 'plugins', value: 1 },
      { id: 'search', value: 3 },
      { id: 'ai', value: 2 }
    ]);
  });
});

describe('buildWorkbenchRecentItems', () => {
  it('returns the newest workspace files with navigable routes', () => {
    const file = (
      id: string,
      modified: string,
      categoryId: number
    ): MarkdownFile => ({
      id,
      title: id,
      content: '',
      categoryId,
      categoryName: 'Docs',
      tags: [],
      created: modified,
      modified,
      type: 'note',
      favorite: false,
      filePath: `E:/Workspace/${id}.md`
    });

    const recent = buildWorkbenchRecentItems(
      [
        file('older', '2026-01-01T00:00:00.000Z', 1),
        file('newer', '2026-02-01T00:00:00.000Z', 2)
      ],
      1
    );

    expect(recent).toEqual([
      expect.objectContaining({
        title: 'newer',
        path: `/config/category/contentList/2/content/${encodeURIComponent('E:/Workspace/newer.md')}`
      })
    ]);
  });
});

describe('buildWorkbenchLayers', () => {
  it('marks the four product layers by current runtime health', () => {
    const layers = buildWorkbenchLayers(
      input({
        workspaceRoot: '',
        plugins: { installed: 2, enabled: 0, surfaces: 0 },
        search: { registered: 3, failed: 1, searching: 0 },
        ai: { providers: 2, healthy: 1, unavailable: 1 }
      })
    );

    expect(layers.map((layer) => [layer.id, layer.status])).toEqual([
      ['workspace', 'attention'],
      ['search', 'attention'],
      ['plugins', 'inactive'],
      ['ai', 'attention']
    ]);
  });
});

describe('buildCapabilityItems', () => {
  it('reflects installed, enabled, and resource availability states', () => {
    const capabilities = buildCapabilityItems(
      {
        isInstalled: (pluginId) =>
          ['screenshot', 'screen-recorder'].includes(pluginId),
        isEnabled: (pluginId) => pluginId === 'screenshot',
        resourceStatusByPluginId: {
          screenshot: { available: false },
          'screen-recorder': { available: true }
        }
      },
      t
    );

    expect(capabilities.find((item) => item.id === 'screenshot')?.status).toBe(
      'ready'
    );
    expect(capabilities.find((item) => item.id === 'ocr')?.status).toBe(
      'attention'
    );
    expect(capabilities.find((item) => item.id === 'recorder')?.status).toBe(
      'inactive'
    );
    expect(capabilities.find((item) => item.id === 'localAi')?.status).toBe(
      'inactive'
    );
  });
});

describe('statusChipClass', () => {
  it('returns stable status class maps', () => {
    expect(statusChipClass('ready')).toMatchObject({
      'status-chip--ready': true,
      'status-chip--attention': false,
      'status-chip--inactive': false
    });
  });
});
