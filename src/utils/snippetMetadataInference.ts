export interface SnippetMetadataInferenceInput {
  title?: string;
  content?: string;
  categoryName?: string;
}

export interface InferredSnippetMetadata {
  language?: string;
  framework?: string;
  kind?: string;
}

const LANGUAGE_ALIASES: Record<string, string> = {
  typescript: 'ts',
  javascript: 'js',
  shell: 'bash',
  sh: 'bash',
  zsh: 'bash',
  tsconfig: 'json',
  vite: 'ts',
  eslint: 'js'
};

const LANGUAGE_TOKENS = new Set([
  'ts',
  'tsx',
  'js',
  'jsx',
  'vue',
  'html',
  'css',
  'scss',
  'less',
  'json',
  'bash'
]);

const FRAMEWORK_TOKENS = new Set([
  'vue',
  'react',
  'svelte',
  'solid',
  'angular',
  'nuxt',
  'next',
  'vite',
  'tailwind'
]);

const normalizeToken = (token: string): string => {
  const normalized = token.trim().toLowerCase();
  return LANGUAGE_ALIASES[normalized] ?? normalized;
};

const collectTokens = (...parts: Array<string | undefined>): Set<string> => {
  const tokens = new Set<string>();
  for (const part of parts) {
    if (!part) continue;
    for (const token of part.toLowerCase().split(/[^a-z0-9+#]+/i)) {
      if (token) {
        tokens.add(normalizeToken(token));
      }
    }
  }
  return tokens;
};

const getFirstCodeFenceLanguage = (content = ''): string | undefined => {
  const match = content.match(/```([a-zA-Z0-9+#.-]+)/);
  if (!match?.[1]) return undefined;
  const normalized = normalizeToken(match[1].replace(/^\./, ''));
  return LANGUAGE_TOKENS.has(normalized) ? normalized : undefined;
};

const inferLanguage = (tokens: Set<string>, content?: string): string | undefined => {
  const fencedLanguage = getFirstCodeFenceLanguage(content);
  if (fencedLanguage) return fencedLanguage;

  for (const language of LANGUAGE_TOKENS) {
    if (tokens.has(language)) return language;
  }

  return undefined;
};

const inferFramework = (tokens: Set<string>): string | undefined => {
  for (const framework of FRAMEWORK_TOKENS) {
    if (tokens.has(framework)) return framework;
  }

  return undefined;
};

const hasAny = (tokens: Set<string>, values: string[]) => values.some(value => tokens.has(value));

const inferKind = (tokens: Set<string>, title = '', language?: string): string | undefined => {
  const lowerTitle = title.toLowerCase();

  if (
    hasAny(tokens, ['component', 'components', 'sfc']) ||
    /\.(vue|tsx|jsx)$/i.test(title)
  ) {
    return 'component';
  }

  if (
    hasAny(tokens, ['hook', 'hooks', 'composable', 'composables']) ||
    /\buse[A-Z][A-Za-z0-9]*/.test(title)
  ) {
    return 'hook';
  }

  if (hasAny(tokens, ['style', 'styles', 'css', 'scss', 'less', 'animation', 'tailwind']) || ['css', 'scss', 'less'].includes(language ?? '')) {
    return 'style';
  }

  if (hasAny(tokens, ['api', 'fetch', 'request', 'axios', 'client'])) {
    return 'api';
  }

  if (hasAny(tokens, ['regex', 'regexp'])) {
    return 'regex';
  }

  if (hasAny(tokens, ['command', 'commands', 'cli', 'shell', 'bash'])) {
    return 'command';
  }

  if (hasAny(tokens, ['error', 'errors', 'fix', 'bug']) || /报错|修复|错误/.test(title)) {
    return 'error-fix';
  }

  if (hasAny(tokens, ['package', 'packages', 'npm', 'pnpm', 'yarn'])) {
    return 'package-note';
  }

  if (
    hasAny(tokens, ['config', 'configuration', 'vite', 'eslint', 'tsconfig']) ||
    lowerTitle.includes('config')
  ) {
    return 'config';
  }

  if (hasAny(tokens, ['pattern', 'patterns', 'practice', 'practices'])) {
    return 'pattern';
  }

  return undefined;
};

export function inferSnippetMetadata(input: SnippetMetadataInferenceInput): InferredSnippetMetadata {
  const tokens = collectTokens(input.title, input.categoryName);
  const language = inferLanguage(tokens, input.content);
  const framework = inferFramework(tokens);
  const kind = inferKind(tokens, input.title, language);

  return {
    ...(language ? { language } : {}),
    ...(framework ? { framework } : {}),
    ...(kind ? { kind } : {})
  };
}
