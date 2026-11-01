import {
  isNavigationFailure,
  NavigationFailureType,
  type RouteLocationRaw,
  type Router
} from 'vue-router';

type ConfigRouter = Pick<Router, 'push' | 'replace'>;

/** One encoding boundary for workspace IDs, including search-source prefixes. */
export function getConfigContentPath(
  fragmentId: unknown,
  categoryId?: unknown
): string {
  const id = String(fragmentId ?? '')
    .replace(/^markdown:/i, '')
    .replace(/\\/g, '/');
  if (!id) throw new Error('Missing content ID');
  const category =
    categoryId === undefined || categoryId === null || categoryId === ''
      ? ''
      : `/${encodeURIComponent(String(categoryId))}`;
  return `/config/category/contentList${category}/content/${encodeURIComponent(id)}`;
}

export function getConfigSettingsTarget(tab?: string): RouteLocationRaw {
  return tab
    ? { path: '/config/category/settings', query: { tab } }
    : '/config/category/settings';
}

/** Vue Router resolves aborted navigation as a failure; surface it to callers. */
export async function navigateConfigRoute(
  router: ConfigRouter,
  target: RouteLocationRaw,
  replace = false
): Promise<void> {
  const failure = await (replace
    ? router.replace(target)
    : router.push(target));
  if (
    isNavigationFailure(failure) &&
    !isNavigationFailure(failure, NavigationFailureType.duplicated)
  )
    throw failure;
}

export function openConfigSettings(
  router: ConfigRouter,
  tab?: string
): Promise<void> {
  return navigateConfigRoute(router, getConfigSettingsTarget(tab));
}
