import { describe, expect, it } from 'vitest';
import {
  clearGitConflictState,
  decodeGitConflictFilePath,
  restoreGitConflictState,
  saveGitConflictState
} from './conflictState';

class MemoryStorage implements Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> {
  private values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }
}

describe('git conflict state', () => {
  it('decodes quoted UTF-8 octal escaped paths from git output', () => {
    expect(decodeGitConflictFilePath('"notes/\\346\\265\\213\\350\\257\\225.md"')).toBe(
      'notes/测试.md'
    );
  });

  it('decodes common escaped characters', () => {
    expect(decodeGitConflictFilePath('"dir\\\\file\\040name.md"')).toBe(
      'dir\\file name.md'
    );
  });

  it('leaves normal paths unchanged except wrapping quotes', () => {
    expect(decodeGitConflictFilePath('"notes/demo.md"')).toBe('notes/demo.md');
  });

  it('saves and restores recent conflict state', () => {
    const storage = new MemoryStorage();

    saveGitConflictState(storage, ['a.md', 'b.md'], 1_000);

    expect(restoreGitConflictState(storage, 5_000)).toEqual({
      conflictFiles: ['a.md', 'b.md'],
      timestamp: 1_000
    });
  });

  it('does not save empty conflict lists', () => {
    const storage = new MemoryStorage();

    saveGitConflictState(storage, [], 1_000);

    expect(restoreGitConflictState(storage, 1_000)).toBeNull();
  });

  it('clears expired conflict state', () => {
    const storage = new MemoryStorage();
    saveGitConflictState(storage, ['a.md'], 1_000);

    expect(restoreGitConflictState(storage, 20_000)).toBeNull();
    expect(restoreGitConflictState(storage, 20_000)).toBeNull();
  });

  it('clears malformed conflict state', () => {
    const storage = new MemoryStorage();
    storage.setItem('git-conflict-state', '{broken');

    expect(restoreGitConflictState(storage, 1_000)).toBeNull();
  });

  it('clears stored conflict state explicitly', () => {
    const storage = new MemoryStorage();
    saveGitConflictState(storage, ['a.md'], 1_000);

    clearGitConflictState(storage);

    expect(restoreGitConflictState(storage, 1_000)).toBeNull();
  });
});
