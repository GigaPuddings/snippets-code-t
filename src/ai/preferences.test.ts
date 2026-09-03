import { beforeEach, expect, it, vi } from 'vitest';
import { getAppConfig, updateAppConfig } from '@/api/appConfig';
import type { AppConfig } from '@/types/models';
import {
  getAiProviderPreferences,
  normalizeAiProviderPreferences,
  saveAiProviderPreferences,
  setAiProviderPreference
} from './preferences';

vi.mock('@/api/appConfig', () => ({
  getAppConfig: vi.fn(),
  updateAppConfig: vi.fn()
}));

const gitSettings = (): AppConfig['git'] => ({
  enabled: false,
  auto_sync: false,
  auto_sync_delay: 0,
  pull_on_start: false,
  user_name: '',
  user_email: '',
  remote_url: '',
  token: ''
});

const appConfig = (
  overrides: Record<string, unknown> = {}
): AppConfig & Record<string, unknown> => ({
  version: '0.0.0',
  theme: 'auto',
  language: 'zh-CN',
  autoStart: false,
  autoUpdateCheck: true,
  autoHideOnBlur: true,
  git: gitSettings(),
  plugins: {},
  ...overrides
});

beforeEach(() => {
  vi.clearAllMocks();
});

it('normalizes configured provider ids by supported capability', () => {
  expect(
    normalizeAiProviderPreferences({
      chat: ' remote-ai ',
      vision: '',
      translation: 'translate-ai',
      invalid: 'ignored'
    })
  ).toEqual({
    chat: 'remote-ai',
    translation: 'translate-ai'
  });
});

it('reads preferences from app config', async () => {
  vi.mocked(getAppConfig).mockResolvedValue(
    appConfig({
      ai_provider_preferences: {
        chat: 'remote-ai',
        vision: 'vision-ai'
      }
    })
  );

  await expect(getAiProviderPreferences()).resolves.toEqual({
    chat: 'remote-ai',
    vision: 'vision-ai'
  });
});

it('saves normalized preferences without dropping existing config fields', async () => {
  vi.mocked(getAppConfig).mockResolvedValue(
    appConfig({
      language: 'en-US',
      translation_engine: 'bing'
    })
  );

  await saveAiProviderPreferences({
    chat: ' remote-ai ',
    translation: ''
  });

  expect(updateAppConfig).toHaveBeenCalledWith(
    expect.objectContaining({
      language: 'en-US',
      translation_engine: 'bing',
      ai_provider_preferences: {
        chat: 'remote-ai'
      }
    })
  );
});

it('updates one capability preference at a time', async () => {
  vi.mocked(getAppConfig).mockResolvedValue(
    appConfig({
      ai_provider_preferences: {
        chat: 'local-ai',
        vision: 'vision-ai'
      }
    })
  );

  await expect(setAiProviderPreference('chat', ' remote-ai ')).resolves.toEqual(
    {
      chat: 'remote-ai',
      vision: 'vision-ai'
    }
  );

  expect(updateAppConfig).toHaveBeenCalledWith(
    expect.objectContaining({
      ai_provider_preferences: {
        chat: 'remote-ai',
        vision: 'vision-ai'
      }
    })
  );
});

it('clears one capability preference when provider id is empty', async () => {
  vi.mocked(getAppConfig).mockResolvedValue(
    appConfig({
      ai_provider_preferences: {
        chat: 'local-ai',
        translation: 'translate-ai'
      }
    })
  );

  await expect(setAiProviderPreference('chat', null)).resolves.toEqual({
    translation: 'translate-ai'
  });

  expect(updateAppConfig).toHaveBeenCalledWith(
    expect.objectContaining({
      ai_provider_preferences: {
        translation: 'translate-ai'
      }
    })
  );
});
