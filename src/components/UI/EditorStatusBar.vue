<template>
  <div
    class="editor-status"
    role="group"
    :aria-label="t('noteEditor.documentStatus')"
  >
    <div class="editor-status-summary">
      <button
        v-if="showBacklinkButton"
        type="button"
        class="ui-action h-ui-control-sm gap-2 px-1.5 text-ui-caption font-normal text-[var(--statusbar-text)]"
        :title="t('backlinks.togglePanel')"
        @click="$emit('toggle-backlinks')"
      >
        {{ t('backlinks.statusCount', { count: backlinkCount }) }}
      </button>
      <el-popover
        v-if="documentProperties.length"
        trigger="click"
        placement="top-end"
        :width="300"
      >
        <template #reference>
          <button
            type="button"
            class="ui-action h-ui-control-sm gap-2 px-1.5 text-ui-caption font-normal text-[var(--statusbar-text)]"
          >
            {{
              t('noteEditor.properties', { count: documentProperties.length })
            }}
          </button>
        </template>
        <dl
          class="grid max-h-64 grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 overflow-auto text-ui-caption"
        >
          <template
            v-for="property in documentProperties"
            :key="property.label"
          >
            <dt class="text-content">{{ property.label }}</dt>
            <dd class="min-w-0 break-words text-panel">{{ property.value }}</dd>
          </template>
        </dl>
      </el-popover>
      <el-dropdown
        v-if="showViewToggle"
        trigger="click"
        :popper-class="dark ? 'editor-statusbar-dropdown-dark' : undefined"
        @command="handleCommand"
      >
        <button
          type="button"
          class="ui-icon-button h-ui-control-sm w-ui-icon-control-sm text-[var(--statusbar-text)]"
          :title="viewModeText"
          :aria-label="viewModeText"
        >
          <component
            :is="
              viewMode === 'reading'
                ? BookOpen
                : viewMode === 'source'
                  ? Code
                  : EditTwo
            "
            width="16"
            height="16"
          />
        </button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="mode in viewModes"
              :key="mode.value"
              :command="mode.value"
              :class="{ 'is-active': viewMode === mode.value }"
            >
              <component :is="mode.icon" width="16" height="16" />
              <span>{{ mode.label }}</span>
              <Check
                v-if="viewMode === mode.value"
                width="16"
                height="16"
                class="ml-auto text-primary"
              />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span class="status-count tabular-nums">
        {{ lineCount !== undefined ? lineCount : wordCount }}
        {{
          lineCount !== undefined
            ? t('codeEditor.lines')
            : t('noteEditor.words')
        }}
      </span>
      <span class="status-count tabular-nums">
        {{ charCount }} {{ t('noteEditor.chars') }}
      </span>
      <span v-if="language" class="status-count">{{ language }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import BookOpen from '~icons/lucide/book-open';
import Check from '~icons/lucide/check';
import Code from '~icons/lucide/code';
import EditTwo from '~icons/lucide/square-pen';

type ViewMode = 'reading' | 'preview' | 'source';
interface Props {
  wordCount: number;
  charCount: number;
  lineCount?: number;
  language?: string;
  viewMode: ViewMode;
  showViewToggle?: boolean;
  showBacklinkButton?: boolean;
  backlinkCount?: number;
  documentProperties?: Array<{ label: string; value: string }>;
  dark?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  showViewToggle: true,
  showBacklinkButton: false,
  backlinkCount: 0,
  documentProperties: () => [],
  dark: false
});
const emits = defineEmits<{
  'view-mode-change': [mode: ViewMode];
  'toggle-backlinks': [];
}>();
const { t } = useI18n();
const viewModes = computed(() => [
  {
    value: 'reading' as const,
    label: t('noteEditor.readingView'),
    icon: BookOpen
  },
  { value: 'source' as const, label: t('noteEditor.sourceMode'), icon: Code },
  {
    value: 'preview' as const,
    label: t('noteEditor.livePreview'),
    icon: EditTwo
  }
]);
const viewModeText = computed(
  () =>
    viewModes.value.find((mode) => mode.value === props.viewMode)?.label ?? ''
);
const handleCommand = (command: ViewMode): void => {
  emits('view-mode-change', command);
};
</script>

<style lang="scss" scoped>
.editor-status {
  @apply relative z-10 flex min-w-0 flex-none justify-end overflow-hidden bg-transparent font-ui text-ui-caption;

  height: calc(var(--app-ui-icon-control-sm-height) + var(--editor-status-gap));
  padding: 0 var(--editor-content-padding-inline) var(--editor-status-gap);
  color: var(--statusbar-text);
}

.editor-status-summary {
  @apply flex h-full min-w-0 max-w-full items-center gap-1 overflow-x-auto whitespace-nowrap rounded-lg px-2;

  background: var(--editor-status-surface, var(--statusbar-bg));
  scrollbar-width: none;
}

.status-count {
  @apply shrink-0 px-1.5 font-normal;
}

.el-dropdown-menu__item {
  @apply flex items-center gap-2;

  &.is-active {
    @apply font-medium text-primary;
  }
}
</style>
