import { describe, expect, it } from 'vitest';
import type { RegisteredPlugin } from './protocol';
import { getRuntimeRoutePluginCandidates } from './routes';

const plugin = (
  id: RegisteredPlugin['id'],
  routeNames: string[]
): RegisteredPlugin =>
  ({
    id,
    source: 'local',
    manifest: {} as RegisteredPlugin['manifest'],
    nameKey: '',
    descriptionKey: '',
    category: 'capture',
    enabledByDefault: true,
    routeNames
  }) as RegisteredPlugin;

describe('getRuntimeRoutePluginCandidates', () => {
  const plugins = [
    plugin('screenshot', ['Screenshot', 'Pin']),
    plugin('screen-recorder', ['ScreenRecorder']),
    plugin('local-ai', ['LocalAI'])
  ];

  it('selects screenshot directly instead of loading every plugin runtime', () => {
    expect(
      getRuntimeRoutePluginCandidates('/screenshot', plugins).map(
        (candidate) => candidate.id
      )
    ).toEqual(['screenshot']);
  });

  it('uses declared route names for routes that differ from the plugin id', () => {
    expect(
      getRuntimeRoutePluginCandidates('/pin', plugins).map(
        (candidate) => candidate.id
      )
    ).toEqual(['screenshot']);
  });

  it('normalizes kebab case plugin paths', () => {
    expect(
      getRuntimeRoutePluginCandidates('/screen-recorder', plugins).map(
        (candidate) => candidate.id
      )
    ).toEqual(['screen-recorder']);
  });
});
