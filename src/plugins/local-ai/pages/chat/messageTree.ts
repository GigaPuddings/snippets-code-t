import type { ChatDisplayMessage, ChatHistoryView, ChatMessage } from './types';

export const createMessageId = (role: ChatMessage['role'] | 'root'): string =>
  `${Date.now()}-${role}-${Math.random().toString(16).slice(2, 8)}`;

export const isRootMessage = (message: ChatMessage): boolean =>
  message.type === 'root';

export const messageNodeMap = (
  messages: ChatMessage[]
): Map<string, ChatMessage> =>
  new Map(messages.map((message) => [message.id, message]));

export const findRootMessage = (
  messages: ChatMessage[]
): ChatMessage | undefined => messages.find(isRootMessage);

const findLeafInNodes = (
  nodes: Map<string, ChatMessage>,
  nodeId: string | null | undefined,
  leaves = new Map<string, string | null>()
): string | null => {
  if (!nodeId) return null;
  if (leaves.has(nodeId)) return leaves.get(nodeId) ?? null;
  let current = nodes.get(nodeId);
  const visited = new Set<string>();
  while (current?.childIds?.length) {
    // Preserve the original cycle fallback without caching a start-dependent leaf.
    if (visited.has(current.id)) return current.id;
    if (leaves.has(current.id)) {
      const leaf = leaves.get(current.id) ?? null;
      for (const id of visited) leaves.set(id, leaf);
      return leaf;
    }
    visited.add(current.id);
    current = nodes.get(current.childIds[current.childIds.length - 1]);
  }
  const leaf = current?.id ?? null;
  for (const id of visited) leaves.set(id, leaf);
  leaves.set(nodeId, leaf);
  return leaf;
};

export const findLeafNodeId = (
  messages: ChatMessage[],
  nodeId: string | null | undefined
): string | null => findLeafInNodes(messageNodeMap(messages), nodeId);

export const normalizeMessagesToTree = (
  messages: ChatMessage[],
  createdAt: string
): { messages: ChatMessage[]; currentNodeId: string | null } => {
  if (messages.some(isRootMessage)) {
    const normalized = messages.map((message) => ({
      ...message,
      type: message.type ?? 'text',
      parentId: message.parentId ?? null,
      childIds: message.childIds ?? []
    }));
    const root = findRootMessage(normalized);
    return {
      messages: normalized,
      currentNodeId:
        findLeafNodeId(normalized, normalized.at(-1)?.id) ?? root?.id ?? null
    };
  }

  const root: ChatMessage = {
    id: createMessageId('root'),
    role: 'system',
    type: 'root',
    content: '',
    createdAt,
    parentId: null,
    childIds: []
  };
  const normalized: ChatMessage[] = [root];
  let parentId = root.id;
  for (const message of messages) {
    const node: ChatMessage = {
      ...message,
      role: message.role === 'system' ? 'assistant' : message.role,
      type: 'text',
      parentId,
      childIds: []
    };
    const parent = normalized.find((item) => item.id === parentId);
    parent?.childIds?.push(node.id);
    normalized.push(node);
    parentId = node.id;
  }
  return { messages: normalized, currentNodeId: parentId };
};

const pathFromNodes = (
  nodes: Map<string, ChatMessage>,
  nodeId: string | null | undefined
): ChatMessage[] => {
  if (!nodeId) return [];
  const path: ChatMessage[] = [];
  const visited = new Set<string>();
  let current = nodes.get(nodeId);
  while (current && !visited.has(current.id)) {
    visited.add(current.id);
    path.push(current);
    current = current.parentId ? nodes.get(current.parentId) : undefined;
  }
  return path.reverse();
};

export const getPathToNode = (
  messages: ChatMessage[],
  nodeId: string | null | undefined
): ChatMessage[] => pathFromNodes(messageNodeMap(messages), nodeId);

const visibleFromNodes = (
  history: ChatHistoryView,
  nodes: Map<string, ChatMessage>,
  leaves?: Map<string, string | null>
): ChatMessage[] => {
  const leafId =
    history.currentNodeId ??
    findLeafInNodes(nodes, findRootMessage(history.messages)?.id, leaves);
  return pathFromNodes(nodes, leafId).filter(
    (message) => !isRootMessage(message)
  );
};

export const getVisibleMessages = (
  history: ChatHistoryView | null
): ChatMessage[] => {
  if (!history) return [];
  return visibleFromNodes(history, messageNodeMap(history.messages));
};

export const getDisplayMessages = (
  history: ChatHistoryView | null
): ChatDisplayMessage[] => {
  if (!history) return [];
  const nodes = messageNodeMap(history.messages);
  const leaves = new Map<string, string | null>();
  const findLeaf = (nodeId: string): string =>
    findLeafInNodes(nodes, nodeId, leaves) ?? nodeId;
  return visibleFromNodes(history, nodes, leaves).map((message) => {
    const parent = message.parentId ? nodes.get(message.parentId) : undefined;
    const siblingIds = parent?.childIds ?? [message.id];
    return {
      message,
      siblingLeafNodeIds: siblingIds.map(findLeaf),
      siblingCurrentIndex: Math.max(0, siblingIds.indexOf(message.id))
    };
  });
};

export const appendMessageNode = (
  history: ChatHistoryView,
  message: Omit<ChatMessage, 'type' | 'parentId' | 'childIds'> & {
    parentId?: string | null;
  }
): ChatMessage => {
  const root = findRootMessage(history.messages);
  const parentId =
    message.parentId ?? history.currentNodeId ?? root?.id ?? null;
  const node: ChatMessage = {
    ...message,
    type: 'text',
    parentId,
    childIds: []
  };
  history.messages.push(node);
  if (parentId) {
    const parent = history.messages.find((item) => item.id === parentId);
    if (parent) parent.childIds = [...(parent.childIds ?? []), node.id];
  }
  history.currentNodeId = node.id;
  return node;
};

export const collectDescendantIds = (
  messages: ChatMessage[],
  messageId: string
): Set<string> => {
  const nodes = messageNodeMap(messages);
  const ids = new Set<string>();
  const visit = (id: string): void => {
    if (ids.has(id)) return;
    ids.add(id);
    for (const childId of nodes.get(id)?.childIds ?? []) visit(childId);
  };
  visit(messageId);
  return ids;
};

export interface DeleteMessageBranchResult {
  messages: ChatMessage[];
  currentNodeId: string | null;
  deletedIds: Set<string>;
}

export const deleteMessageBranch = (
  messages: ChatMessage[],
  currentNodeId: string | null,
  messageId: string
): DeleteMessageBranchResult | null => {
  const target = messages.find((message) => message.id === messageId);
  if (!target || isRootMessage(target)) return null;

  const deletedIds = collectDescendantIds(messages, messageId);
  const remainingMessages = messages
    .filter((message) => !deletedIds.has(message.id))
    .map((message) => ({
      ...message,
      childIds: (message.childIds ?? []).filter((id) => !deletedIds.has(id))
    }));
  const nextCurrentNodeId =
    currentNodeId && deletedIds.has(currentNodeId)
      ? (findLeafNodeId(remainingMessages, target.parentId) ??
        findRootMessage(remainingMessages)?.id ??
        null)
      : currentNodeId;

  return {
    messages: remainingMessages,
    currentNodeId: nextCurrentNodeId,
    deletedIds
  };
};
