interface ContextMenuHandle {
  show: (event: MouseEvent) => void;
}

interface UseEditorContextMenuOptions {
  isEnabled: () => boolean;
  getContextMenu: () => ContextMenuHandle | null | undefined;
}

export function useEditorContextMenu(options: UseEditorContextMenuOptions) {
  const openContextMenu = (event: MouseEvent) => {
    if (!options.isEnabled()) {
      return;
    }

    event.preventDefault();
    options.getContextMenu()?.show(event);
  };

  return {
    openContextMenu,
    handleContextMenu: openContextMenu,
    handleSourceContextMenu: openContextMenu
  };
}
