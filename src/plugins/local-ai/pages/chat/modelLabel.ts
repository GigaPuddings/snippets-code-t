/** Keep the family and parameter count readable. Model selection still uses the full path. */
export function compactModelName(name: string): string {
  const stem = name.replace(/^.*[\\/]/, '').replace(/\.gguf$/i, '');
  const familyAndSize = stem.match(/^(.+?[-_]\d+(?:\.\d+)?[bm])(?:[-_.]|$)/i);
  return (
    familyAndSize?.[1] ?? stem.replace(/[-_.](?:I?Q\d[\w-]*|[BF]F?16)$/i, '')
  );
}
