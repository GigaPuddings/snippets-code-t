const CONFLICT_STATE_KEY = 'git-conflict-state';
const DEFAULT_CONFLICT_STATE_TTL_MS = 10_000;

export interface GitConflictState {
  conflictFiles: string[];
  timestamp: number;
}

export function decodeGitConflictFilePath(path: string): string {
  try {
    const decoded = path.replace(/^"|"$/g, '');

    if (!decoded.includes('\\')) {
      return decoded;
    }

    const bytes: number[] = [];
    let index = 0;

    while (index < decoded.length) {
      if (decoded[index] === '\\' && index + 1 < decoded.length) {
        if (
          index + 3 < decoded.length &&
          /[0-7]{3}/.test(decoded.substring(index + 1, index + 4))
        ) {
          bytes.push(parseInt(decoded.substring(index + 1, index + 4), 8));
          index += 4;
          continue;
        }

        const nextChar = decoded[index + 1];
        switch (nextChar) {
          case 'n':
            bytes.push(10);
            break;
          case 't':
            bytes.push(9);
            break;
          case 'r':
            bytes.push(13);
            break;
          case '\\':
            bytes.push(92);
            break;
          case '"':
            bytes.push(34);
            break;
          default:
            bytes.push(decoded.charCodeAt(index + 1));
        }
        index += 2;
      } else {
        bytes.push(decoded.charCodeAt(index));
        index += 1;
      }
    }

    return new TextDecoder('utf-8').decode(new Uint8Array(bytes));
  } catch {
    return path.replace(/^"|"$/g, '').replace(/\\/g, '');
  }
}

export function saveGitConflictState(
  storage: Pick<Storage, 'setItem'>,
  conflictFiles: string[],
  now = Date.now()
): void {
  if (conflictFiles.length === 0) return;

  const state: GitConflictState = {
    conflictFiles,
    timestamp: now
  };
  storage.setItem(CONFLICT_STATE_KEY, JSON.stringify(state));
}

export function clearGitConflictState(
  storage: Pick<Storage, 'removeItem'>
): void {
  storage.removeItem(CONFLICT_STATE_KEY);
}

export function restoreGitConflictState(
  storage: Pick<Storage, 'getItem' | 'removeItem'>,
  now = Date.now(),
  ttlMs = DEFAULT_CONFLICT_STATE_TTL_MS
): GitConflictState | null {
  const savedState = storage.getItem(CONFLICT_STATE_KEY);
  if (!savedState) return null;

  try {
    const state = JSON.parse(savedState) as Partial<GitConflictState>;
    const conflictFiles = Array.isArray(state.conflictFiles)
      ? state.conflictFiles.filter((file): file is string => typeof file === 'string')
      : [];
    const timestamp = typeof state.timestamp === 'number' ? state.timestamp : 0;

    if (conflictFiles.length > 0 && now - timestamp < ttlMs) {
      return {
        conflictFiles,
        timestamp
      };
    }
  } catch {
    // Invalid persisted state should be discarded below.
  }

  clearGitConflictState(storage);
  return null;
}
