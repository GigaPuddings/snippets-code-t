import type { BuiltinPlugin } from '../types';

export const screenRecorderPlugin: BuiltinPlugin = {
  id: 'screen-recorder',
  nameKey: 'plugins.screenRecorder.name',
  descriptionKey: 'plugins.screenRecorder.description',
  category: 'capture',
  enabledByDefault: true,
  routeNames: ['ScreenRecorder'],
  hotkeys: ['screen_recorder'],
  resourceHintKey: 'plugins.screenRecorder.resourceHint'
};
