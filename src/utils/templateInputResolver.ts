import {
  getInputVariables,
  parseTemplate,
  processTemplate,
  type ParseResult,
  type TemplateVariable
} from './templateParser';

export type TemplatePrompt = (label: string, defaultValue: string) => string | null;

interface ResolveTemplateOptions {
  prompt?: TemplatePrompt;
  clipboard?: Pick<Clipboard, 'readText'>;
}

const defaultPrompt: TemplatePrompt = (label, defaultValue) => window.prompt(label, defaultValue);

const needsClipboard = (variables: TemplateVariable[]): boolean =>
  variables.some(variable => variable.type === 'clipboard');

export async function resolveTemplateInputs(
  template: string,
  options: ResolveTemplateOptions = {}
): Promise<ParseResult | null> {
  const inputVariables = getInputVariables(template);
  const inputValues: Record<string, string> = {};
  const prompt = options.prompt ?? defaultPrompt;

  for (const variable of inputVariables) {
    const label = variable.label || variable.name.replace(/^input:/, '');
    const value = prompt(label, variable.defaultValue || '');
    if (value === null) {
      return null;
    }
    inputValues[variable.name] = value;
  }

  const variables = parseTemplate(template);
  let clipboardContent: string | undefined;
  if (needsClipboard(variables)) {
    try {
      clipboardContent = await options.clipboard?.readText();
    } catch {
      clipboardContent = '';
    }
  }

  return processTemplate(template, inputValues, clipboardContent);
}
