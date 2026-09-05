import type { PluginFrontendRuntimeContext } from '../runtime';
import { quickToolsSearchProvider } from './searchProvider';

export function activate(context: PluginFrontendRuntimeContext): void {
  context.search.registerProvider({
    source: quickToolsSearchProvider.source ?? 'quick-tools',
    search: (query) => quickToolsSearchProvider.search(query)
  });
}

export default activate;
