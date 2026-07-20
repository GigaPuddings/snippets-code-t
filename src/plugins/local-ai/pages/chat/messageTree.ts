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

export const findLeafNodeId = (
  messages: ChatMessage[],
  nodeId: string | null | undefined
): string | null => {
  if (!nodeId) return null;
  const nodes = messageNodeMap(messages);
  let current = nodes.get(nodeId);
  const visited = new Set<string>();
  while (current?.childIds?.length) {
    if (visited.has(current.id)) break;
    visited.add(current.id);
    current = nodes.get(current.childIds[current.childIds.length - 1]);
  }
  return current?.id ?? null;
};

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

export const getPathToNode = (
  messages: ChatMessage[],
  nodeId: string | null | undefined
): ChatMessage[] => {
  if (!nodeId) return [];
  const nodes = messageNodeMap(messages);
  const path: ChatMessage[] = [];
  const visited = new Set<string>();
  let current = nodes.get(nodeId);
  while (current && !visited.has(current.id)) {
    visited.add(current.id);
    path.unshift(current);
    current = current.parentId ? nodes.get(current.parentId) : undefined;
  }
  return path;
};

export const getVisibleMessages = (
  history: ChatHistoryView | null
): ChatMessage[] => {
  if (!history) return [];
  const leafId =
    history.currentNodeId ??
    findLeafNodeId(history.messages, findRootMessage(history.messages)?.id);
  return getPathToNode(history.messages, leafId).filter(
    (message) => !isRootMessage(message)
  );
};

export const getDisplayMessages = (
  history: ChatHistoryView | null
): ChatDisplayMessage[] => {
  if (!history) return [];
  const nodes = messageNodeMap(history.messages);
  const findLeaf = (nodeId: string): string =>
    findLeafNodeId(history.messages, nodeId) ?? nodeId;
  return getVisibleMessages(history).map((message) => {
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
