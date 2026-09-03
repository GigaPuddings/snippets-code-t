export type AiProviderCapability = 'chat' | 'vision' | 'translation';

export type AiMessageRole = 'system' | 'user' | 'assistant';

export type AiContentPart =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'image_url';
      image_url: {
        url: string;
      };
    };

export interface AiMessage {
  role: AiMessageRole;
  content: string | AiContentPart[];
}

export interface AiChatRequest {
  messages: AiMessage[];
  temperature?: number;
  enableThinking?: boolean;
  maxTokens?: number;
  context?: AiRequestContext;
}

export interface AiChatResponse {
  providerId: string;
  content: string;
  modelName?: string;
}

export type AiContextKind = 'workspace' | 'selection' | 'search';

export interface AiContextItem {
  kind: AiContextKind;
  content: string;
  title?: string;
  source?: string;
  metadata?: Record<string, unknown>;
}

export interface AiRequestContext {
  items: AiContextItem[];
}

export interface AiTranslateRequest {
  text: string;
  from: string;
  to: string;
  context?: AiRequestContext;
}

export interface AiTranslateResponse {
  providerId: string;
  text: string;
  modelName?: string;
}

export interface AiProviderStatus {
  providerId: string;
  available: boolean;
  running?: boolean;
  healthy?: boolean;
  modelName?: string;
  modelPath?: string;
  runtimePath?: string;
  baseUrl?: string;
  lastError?: string;
}

export interface AiProvider {
  id: string;
  label: string;
  pluginId?: string;
  capabilities: readonly AiProviderCapability[];
  priority?: number;
  getStatus?(): Promise<AiProviderStatus>;
  start?(): Promise<AiProviderStatus>;
  chat(request: AiChatRequest): Promise<AiChatResponse>;
  translate?(request: AiTranslateRequest): Promise<AiTranslateResponse>;
}

export interface AiProviderListOptions {
  capability?: AiProviderCapability;
  isPluginEnabled?: (pluginId: string) => boolean;
}

const hasCapability = (
  provider: AiProvider,
  capability: AiProviderCapability
): boolean => provider.capabilities.includes(capability);

export class AiProviderRegistry {
  private readonly providers = new Map<string, AiProvider>();

  register(provider: AiProvider): void {
    const id = provider.id.trim();
    if (!id) {
      throw new Error('AI provider 缺少稳定 id');
    }
    if (provider.capabilities.length === 0) {
      throw new Error(`AI provider ${id} 缺少 capability`);
    }

    this.providers.set(id, {
      ...provider,
      id
    });
  }

  unregister(id: string): boolean {
    return this.providers.delete(id);
  }

  unregisterPlugin(pluginId: string): void {
    for (const [id, provider] of Array.from(this.providers.entries())) {
      if (provider.pluginId === pluginId) {
        this.providers.delete(id);
      }
    }
  }

  clear(): void {
    this.providers.clear();
  }

  get(id: string): AiProvider | undefined {
    return this.providers.get(id);
  }

  require(id: string): AiProvider {
    const provider = this.get(id);
    if (!provider) {
      throw new Error(`AI provider ${id} 未注册`);
    }
    return provider;
  }

  list(options: AiProviderListOptions = {}): AiProvider[] {
    return Array.from(this.providers.values())
      .filter((provider) => {
        if (
          options.capability &&
          !hasCapability(provider, options.capability)
        ) {
          return false;
        }
        if (
          provider.pluginId &&
          options.isPluginEnabled &&
          !options.isPluginEnabled(provider.pluginId)
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        const priorityDelta = (b.priority ?? 0) - (a.priority ?? 0);
        if (priorityDelta !== 0) return priorityDelta;
        return a.id.localeCompare(b.id);
      });
  }

  getDefault(options: AiProviderListOptions = {}): AiProvider | undefined {
    return this.list(options)[0];
  }
}

export const createAiProviderRegistry = (): AiProviderRegistry =>
  new AiProviderRegistry();

export const aiProviderRegistry = createAiProviderRegistry();
