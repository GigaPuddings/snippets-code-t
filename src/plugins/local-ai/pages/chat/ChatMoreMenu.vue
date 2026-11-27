<template>
  <el-dropdown
    trigger="click"
    placement="bottom-end"
    popper-class="content-actions-dropdown"
    :show-arrow="false"
    :disabled="disabled"
    @command="emit('select')"
  >
    <button
      class="ui-icon-button ui-icon-button--small ui-action--muted"
      type="button"
      :disabled="disabled"
      :title="t('common.more')"
      :aria-label="t('common.more')"
    >
      <Ellipsis width="16" height="16" aria-hidden="true" />
    </button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="delete" class="is-danger">
          <Trash2 aria-hidden="true" />
          {{ label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Ellipsis from '~icons/lucide/ellipsis';
import Trash2 from '~icons/lucide/trash-2';
import '@/styles/menus.scss';

defineProps<{ label: string; disabled?: boolean }>();
const emit = defineEmits<{ select: [] }>();
const { t } = useI18n();
</script>
