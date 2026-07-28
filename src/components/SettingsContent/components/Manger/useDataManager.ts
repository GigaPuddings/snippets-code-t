import { onMounted, watch } from 'vue';
import { usePluginStore } from '@/store';
import {
  useStorageLocations,
  type StorageLocationsController
} from './useStorageLocations';
import {
  useIndexMaintenance,
  type IndexMaintenanceController
} from './useIndexMaintenance';
import { useDataCleanup, type DataCleanupController } from './useDataCleanup';

export type DataManagerController = StorageLocationsController &
  IndexMaintenanceController &
  DataCleanupController;

export function useDataManager(): DataManagerController {
  const pluginStore = usePluginStore();
  const storage = useStorageLocations();
  const indexes = useIndexMaintenance();
  const cleanup = useDataCleanup();

  onMounted(async () => {
    await Promise.all([
      storage.loadDataLocations(),
      cleanup.loadWallpaperCacheInfo()
    ]);
  });

  watch(
    () => pluginStore.runtimeRevision,
    () => {
      void cleanup.loadWallpaperCacheInfo();
    }
  );

  return { ...storage, ...indexes, ...cleanup };
}
