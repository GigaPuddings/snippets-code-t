import { formatIncompleteJavaScript } from './formatIncompleteCode';

export type CodeLanguage =
  | 'javascript'
  | 'typescript'
  | 'vue'
  | 'html'
  | 'css'
  | 'json'
  | 'java';

export type PrettierParser =
  | 'babel'
  | 'typescript'
  | 'vue'
  | 'html'
  | 'css'
  | 'json-stringify';

export interface FormatCodeTextOptions {
  language?: string | null;
  tabSize?: number;
}

export interface FormatCodeTextResult {
  formatted: string;
  parser: PrettierParser | null;
  supported: boolean;
}

function normalizeLanguageName(language: string | null | undefined): string {
  return (language || '').trim().toLowerCase();
}

export function detectCodeLanguage(
  code: string,
  language?: string | null
): CodeLanguage {
  const normalizedLanguage = normalizeLanguageName(language);

  if (['js', 'javascript', 'jsx', 'react'].includes(normalizedLanguage)) {
    return 'javascript';
  }
  if (['ts', 'typescript', 'tsx'].includes(normalizedLanguage)) {
    return 'typescript';
  }
  if (['vue'].includes(normalizedLanguage)) return 'vue';
  if (['html', 'xml'].includes(normalizedLanguage)) return 'html';
  if (['css', 'scss', 'less'].includes(normalizedLanguage)) return 'css';
  if (['json'].includes(normalizedLanguage)) return 'json';
  if (['java'].includes(normalizedLanguage)) return 'java';

  const trimmedCode = code.trim();
  const firstLine = trimmedCode.split('\n')[0]?.trim() ?? '';

  if (
    firstLine.startsWith('<template') ||
    firstLine.includes('setup lang="ts"') ||
    firstLine.includes('setup lang="js"')
  ) {
    return 'vue';
  }

  if (
    firstLine.startsWith('<!DOCTYPE') ||
    firstLine.startsWith('<html') ||
    /<\w+>/.test(firstLine)
  ) {
    return 'html';
  }

  if (
    firstLine.includes('@import') ||
    firstLine.includes('@media') ||
    /[.#][a-zA-Z][\w-]*\s*\{/.test(code)
  ) {
    return 'css';
  }

  if (
    (firstLine.startsWith('{') && trimmedCode.endsWith('}')) ||
    (firstLine.startsWith('[') && trimmedCode.endsWith(']'))
  ) {
    try {
      JSON.parse(code);
      return 'json';
    } catch {}
  }

  if (
    code.includes('public class') ||
    code.includes('private class') ||
    code.includes('protected class') ||
    code.includes('package ')
  ) {
    return 'java';
  }

  if (
    code.includes(': string') ||
    code.includes(': number') ||
    code.includes(': boolean') ||
    code.includes('interface ') ||
    code.includes('type ') ||
    code.includes('namespace ') ||
    /\b(?:enum|declare|implements|readonly|abstract)\b/.test(code) ||
    /\bimport\s+type\b/.test(code) ||
    /\b(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*:\s*[A-Za-z_$][\w$<[{|&]*/.test(
      code
    ) ||
    /\(\s*[A-Za-z_$][\w$]*\s*:\s*[A-Za-z_$][\w$<[{|&]*/.test(code)
  ) {
    return 'typescript';
  }

  return 'javascript';
}

export function getPrettierParser(language: string): PrettierParser | null {
  switch (language) {
    case 'javascript':
      return 'babel';
    case 'typescript':
      return 'typescript';
    case 'vue':
      return 'vue';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'json':
      return 'json-stringify';
    default:
      return null;
  }
}

export async function formatCodeText(
  code: string,
  options: FormatCodeTextOptions = {}
): Promise<FormatCodeTextResult> {
  const tabSize = Math.max(1, options.tabSize ?? 2);
  const language = detectCodeLanguage(code, options.language);
  const parser = getPrettierParser(language);

  if (!parser) {
    return { formatted: code, parser, supported: false };
  }

  try {
    const [prettier, babel, estree, typescript, html, postcss] =
      await Promise.all([
        import('prettier/standalone'),
        import('prettier/plugins/babel'),
        import('prettier/plugins/estree'),
        import('prettier/plugins/typescript'),
        import('prettier/plugins/html'),
        import('prettier/plugins/postcss')
      ]);

    const formatted = await prettier.format(code, {
      parser,
      plugins: [
        babel.default,
        estree.default,
        typescript.default,
        html.default,
        postcss.default
      ],
      tabWidth: tabSize,
      useTabs: false,
      singleQuote: true
    });

    return { formatted, parser, supported: true };
  } catch (error) {
    if (parser === 'babel' || parser === 'typescript') {
      return {
        formatted: formatIncompleteJavaScript(code, tabSize),
        parser,
        supported: true
      };
    }

    throw error;
  }
}
