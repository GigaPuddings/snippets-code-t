/// <reference types="node" />

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

function listVueFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? listVueFiles(path)
      : entry.name.endsWith('.vue')
        ? [path]
        : [];
  });
}

describe('CustomButton adoption', () => {
  it('keeps product code free of direct Element Plus button usage', () => {
    const sourceRoot = resolve(process.cwd(), 'src');
    const offenders = listVueFiles(sourceRoot)
      .filter((path) => /<\/?el-button\b/i.test(readFileSync(path, 'utf8')))
      .map((path) => relative(process.cwd(), path).replaceAll('\\', '/'));

    expect(offenders).toEqual([]);
  });
});
