import { describe, expect, it } from 'vitest';
import type { AiProviderStatusSnapshot } from '@/ai';
import type { RegisteredPlugin } from '@/plugins/protocol';
import type { SearchSourceRuntimeState } from '@/search/sourceRegistry';
import type { MarkdownFile } from '@/types';
import {
  summarizeWorkbenchAi,
  summarizeWorkbenchContent,
  summarizeWorkbenchPlugins,
  summarizeWorkbenchSearch
} from './workbenchSummary';

const markdownFile = (
  id: string,
  type: MarkdownFile['type'],
  favorite = false
): MarkdownFile => ({
  id,
  title: id,
  content: '',
  categoryId: 1,
  categoryName: 'Notes',
  tags: [],
  created: '2026-01-01T00:00:00.000Z',
  modified: '2026-01-01T00:00:00.000Z',
  type,
  favorite,
  filePath: `${id}.md`
});

const plugin = (
  id: string,
  overrides: Partial<RegisteredPlugin> = {}
): RegisteredPlugin => ({
  id,
  source: 'local',
  manifest: {
    schemaVersion: 1,
    id,
    version: '1.0.0',
    kind: 'local',
    name: { i18nKey: id, fallback: id },
    description: { i18nKey: id, fallback: id },
    category: 'automation',
    enabledByDefault: true
  },
  nameKey: id,
  descriptionKey: id,
  category: 'automation',
  enabledByDefault: true,
  ...overrides
});

const searchSource = (
  key: string,
  health: SearchSourceRuntimeState['health']
): SearchSourceRuntimeState => ({
  key,
  pluginId: key,
  source: key,
  phase: 'results',
  priority: 0,
  health
});

const aiProvider = (
  id: string,
  available: boolean,
  healthy = true
): AiProviderStatusSnapshot => ({
  id,
  label: id,
  capabilities: ['chat'],
  canStart: false,
  status: {
    providerId: id,
    available,
    healthy
  }
});

describe('summarizeWorkbenchContent', () => {
  it('summarizes workspace content by type and favorite state', () => {
    expect(
      summarizeWorkbenchContent([
        markdownFile('code-1', 'code', true),
        markdownFile('code-2', 'code'),
        markdownFile('note-1', 'note')
      ])
    ).toEqual({
      total: 3,
      snippets: 2,
      notes: 1,
      favorites: 1
    });
  });
});

describe('summarizeWorkbenchPlugins', () => {
  it('summarizes enabled plugin surfaces without counting resource packages', () => {
    expect(
      summarizeWorkbenchPlugins(
        [
          plugin('launcher', {
            routeNames: ['Local'],
            searchSources: ['app', 'bookmark']
          }),
          plugin('ai', {
            aiProviders: ['local-ai'],
            settingsTabs: ['localAi']
          }),
          plugin('ai-runtime', { resourceFor: 'ai' })
        ],
        (pluginId) => pluginId !== 'ai'
      )
    ).toEqual({
      installed: 2,
      enabled: 1,
      surfaces: 3
    });
  });
});

describe('summarizeWorkbenchSearch', () => {
  it('summarizes search provider runtime health', () => {
    expect(
      summarizeWorkbenchSearch([
        searchSource('healthy', 'healthy'),
        searchSource('failed', 'failed'),
        searchSource('searching', 'searching')
      ])
    ).toEqual({
      registered: 3,
      failed: 1,
      searching: 1
    });
  });
});

describe('summarizeWorkbenchAi', () => {
  it('summarizes AI provider availability', () => {
    expect(
      summarizeWorkbenchAi([
        aiProvider('ready', true),
        aiProvider('unhealthy', true, false),
        aiProvider('missing', false)
      ])
    ).toEqual({
      providers: 3,
      healthy: 1,
      unavailable: 1
    });
  });
});
