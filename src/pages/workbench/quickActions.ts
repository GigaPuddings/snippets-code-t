import Edit from '~icons/lucide/square-pen';
import FileCode from '~icons/lucide/file-code';
import Search from '~icons/lucide/search';
import {
  configNavigationTabs,
  type ConfigNavigationTab
} from '@/plugins/navigation';

export type WorkbenchQuickAction = Pick<
  ConfigNavigationTab,
  'id' | 'labelKey' | 'icon'
> & { path?: string };

const createActions: WorkbenchQuickAction[] = [
  {
    id: 'note',
    labelKey: 'nav.newNote',
    icon: Edit,
    path: '/config/category/contentList?create=note'
  },
  {
    id: 'code',
    labelKey: 'fragmentType.newSnippet',
    icon: FileCode,
    path: '/config/category/contentList?create=code'
  }
];

export const buildWorkbenchQuickActions = (
  workspaceRoot: string,
  isTabAvailable: (tab: ConfigNavigationTab) => boolean
): WorkbenchQuickAction[] => {
  const actions: WorkbenchQuickAction[] = [
    ...(workspaceRoot ? createActions : []),
    { id: 'search', labelKey: 'titlebar.quickSearch', icon: Search }
  ];
  for (const id of ['workspace', 'launcher', 'aiChat', 'todo']) {
    const tab = configNavigationTabs.find((candidate) => candidate.id === id);
    if (!tab || !isTabAvailable(tab)) continue;
    if (id === 'todo' && actions.some((action) => action.id === 'aiChat'))
      continue;
    actions.push(
      id === 'workspace' && !workspaceRoot
        ? {
            ...tab,
            labelKey: 'workbenchHome.configureWorkspace',
            path: '/config/category/settings?tab=data'
          }
        : tab
    );
  }
  return actions;
};
