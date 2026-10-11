/* Shared by the Chromium/Firefox extension and its regression tests. */
globalThis.SnippetsBookmarkBridge = {
  async removeConfirmedBookmark(api, command, now = Date.now) {
    if (
      command.operation !== 'remove_bookmark' ||
      typeof command.node_id !== 'string' ||
      !command.node_id ||
      typeof command.expected_url !== 'string' ||
      !command.expected_url ||
      typeof command.expected_title !== 'string' ||
      !Number.isFinite(command.expires_at) ||
      command.expires_at <= now() ||
      command.expires_at > now() + 20000
    ) {
      throw new Error('Invalid or expired bookmark operation');
    }
    let nodes;
    try {
      nodes = await api.bookmarks.get(command.node_id);
    } catch (error) {
      // A failed lookup may be a permission/transport error; never assume removal succeeded.
      throw new Error(`Unable to verify bookmark: ${error.message}`);
    }
    const node = nodes[0];
    if (
      !node ||
      node.id !== command.node_id ||
      !node.url ||
      node.url !== command.expected_url ||
      node.title !== command.expected_title
    ) {
      throw new Error(
        'Bookmark changed or is a folder; refresh the launcher before deleting'
      );
    }
    if (command.expires_at <= now())
      throw new Error('Bookmark operation expired');
    await api.bookmarks.remove(node.id);
  }
};
