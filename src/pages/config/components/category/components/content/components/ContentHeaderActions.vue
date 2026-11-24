<template>
  <div class="content-header-actions">
    <nav class="workspace-breadcrumb" :aria-label="t('titlebar.navigation')">
      <router-link
        :to="folder.path"
        class="max-w-[40%] shrink-0 truncate"
        :title="folder.name"
      >
        {{ folder.name }}
      </router-link>
      <span class="shrink-0" aria-hidden="true">/</span>
      <span class="min-w-0 truncate" :title="title">
        {{ title }}
      </span>
      <template v-if="contextHeading">
        <span class="shrink-0" aria-hidden="true">/</span>
        <span
          class="min-w-0 truncate"
          :title="t('content.stickyHeadingHint', { heading: contextHeading })"
        >
          {{ contextHeading }}
        </span>
      </template>
    </nav>
    <!-- 编辑器控制按钮（仅笔记类型显示） -->
    <div v-if="isNote" class="editor-controls">
      <!-- 阅读模式切换按钮 -->
      <button
        v-if="!isReading"
        class="ui-icon-button ui-icon-button--small text-panel-text-secondary"
        type="button"
        @click="emit('reading-mode')"
        :title="$t('noteEditor.toggleReading')"
        :aria-label="$t('noteEditor.toggleReading')"
      >
        <BookOpen width="18" height="18" aria-hidden="true" />
      </button>

      <button
        v-else
        class="ui-icon-button ui-icon-button--small text-panel-text-secondary"
        type="button"
        @click="emit('editing-mode')"
        :title="$t('noteEditor.toggleEditing')"
        :aria-label="$t('noteEditor.toggleEditing')"
      >
        <EditTwo width="18" height="18" aria-hidden="true" />
      </button>
    </div>
    <el-dropdown
      trigger="click"
      placement="bottom-end"
      popper-class="content-actions-dropdown"
      :show-arrow="false"
      @command="emit('command', $event)"
    >
      <button
        class="ui-icon-button ui-icon-button--small text-panel-text-secondary"
        type="button"
        :title="t('common.more')"
        :aria-label="t('common.more')"
      >
        <UiEllipsisVertical width="18" height="18" aria-hidden="true" />
      </button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="copyTitle">
            <Type width="16" height="16" aria-hidden="true" />
            {{ t('content.copyTitle') }}
          </el-dropdown-item>
          <el-dropdown-item command="copyContent">
            <Copy width="16" height="16" aria-hidden="true" />
            {{ t('content.copyContent') }}
          </el-dropdown-item>
          <el-dropdown-item v-if="isNote" command="copyNoteLink">
            <Link width="16" height="16" aria-hidden="true" />
            {{ t('content.copyNoteLink') }}
          </el-dropdown-item>
          <el-dropdown-item
            v-if="isNote"
            command="outline"
            :class="{ 'is-active': isOutlineVisible }"
          >
            <ListTree width="16" height="16" aria-hidden="true" />
            <span class="flex-1">{{ t('noteEditor.outline') }}</span>
            <Check
              v-if="isOutlineVisible"
              width="16"
              height="16"
              aria-hidden="true"
            />
          </el-dropdown-item>
          <el-dropdown-item command="addTag" :disabled="initializing">
            <Tags width="16" height="16" aria-hidden="true" />
            {{ t('tags.addTag') }}
          </el-dropdown-item>
          <el-dropdown-item command="aiAssist">
            <Sparkles width="16" height="16" aria-hidden="true" />
            {{ t('content.aiAssistant') }}
          </el-dropdown-item>
          <el-dropdown-item
            command="openWith"
            :disabled="loading || initializing"
          >
            <ArrowUpRight width="16" height="16" aria-hidden="true" />
            {{ t('content.openWith') }}
          </el-dropdown-item>
          <el-dropdown-item command="save" :disabled="loading" divided>
            <Save width="16" height="16" aria-hidden="true" />
            {{ t('common.save') }}
          </el-dropdown-item>
          <el-dropdown-item
            command="delete"
            class="is-danger"
            :disabled="loading || initializing"
          >
            <Trash2 width="16" height="16" aria-hidden="true" />
            {{ t('common.delete') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span v-if="updatedAt" class="content-toolbar-updated">
      {{ t('content.lastModified') }}:
      {{ updatedAt }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import UiEllipsisVertical from '~icons/lucide/ellipsis-vertical';
import Save from '~icons/lucide/save';
import Type from '~icons/lucide/type';
import Copy from '~icons/lucide/copy';
import Link from '~icons/lucide/link';
import ListTree from '~icons/lucide/list-tree';
import Tags from '~icons/lucide/tags';
import Sparkles from '~icons/lucide/sparkles';
import ArrowUpRight from '~icons/lucide/arrow-up-right';
import Trash2 from '~icons/lucide/trash-2';
import Check from '~icons/lucide/check';
import BookOpen from '~icons/lucide/book-open';
import EditTwo from '~icons/lucide/square-pen';

defineProps<{
  folder: { path: string; name: string };
  title: string;
  contextHeading: string | null;
  updatedAt: string;
  isNote: boolean;
  isReading: boolean;
  isOutlineVisible: boolean;
  loading: boolean;
  initializing: boolean;
}>();

const emit = defineEmits<{
  'reading-mode': [];
  'editing-mode': [];
  command: [command: string];
}>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.content-header-actions {
  @apply order-first flex w-full min-w-0 items-center gap-1 border-b border-panel py-1.5;
}

.workspace-breadcrumb {
  @apply mr-auto flex min-w-0 flex-1 items-center gap-2 pr-3 text-ui-caption text-content;
}

.content-header-actions > :not(.workspace-breadcrumb) {
  flex-shrink: 0;
}

.content-toolbar-updated {
  @apply ml-2 border-l border-panel pl-3 text-xs text-content;

  white-space: nowrap;
}

.editor-controls {
  @apply flex shrink-0 items-center gap-0.5;
}
</style>
