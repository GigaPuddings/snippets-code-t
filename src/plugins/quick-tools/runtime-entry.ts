import type { PluginFrontendRuntimeContext } from '../runtime';
import { quickToolsSearchProvider } from './searchProvider';

export function activate(context: PluginFrontendRuntimeContext): void {
  context.registerSearchProvider({
    source: quickToolsSearchProvider.source ?? 'quick-tools',
    search: (query) => quickToolsSearchProvider.search(query)
  });
}

export default activate;
