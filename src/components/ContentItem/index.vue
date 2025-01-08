<template>
  <ContextMenu :menu="menu" @select="handleContextMenu">
    <router-link
      :to="`/config/category/contentList/${content.category_id}/content/${content.id}`"
      class="link"
      active-class="active"
    >
      <main class="content-item-wrapper">
        <div class="content-item-title">{{ content.title }}</div>
        <div class="content-item-info">
          <div class="content-item-info-category">
            {{ content.category_name }}
          </div>
          <div class="content-item-info-time">
            {{ formatDate(content.created_at) }}
          </div>
        </div>
      </main>
    </router-link>
  </ContextMenu>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils';
import { deleteFragment, getFragmentList } from '@/database/fragment';
import { useConfigurationStore } from '@/store';
import { EditTwo, DeleteFour } from '@icon-park/vue-next';
const route = useRoute();
const store = useConfigurationStore();

const props = defineProps<{
  content: ContentType;
}>();
const { content } = toRefs(props);
const router = useRouter();

defineOptions({
  name: 'ContentItem'
});

const menu = [
  {
    label: '编辑',
    type: 'edit',
    icon: EditTwo
  },
  {
    label: '删除',
    type: 'delete',
    icon: DeleteFour
  }
];

const handleContextMenu = async (item: any) => {
  if (item.type === 'edit') {
    router.push(
      `/config/category/contentList/${content.value.category_id}/content/${content.value.id}`
    );
  } else if (item.type === 'delete') {
    await deleteFragment(Number(content.value.id));
    if (route.params.id) {
      router.push(`/config/category/contentList/${content.value.category_id}`);
    } else {
      const result = await getFragmentList(content.value.category_id);
      store.contents = result;
    }
  }
};
</script>

<style scoped lang="scss">
@mixin commonLink {
  @apply block py-1 truncate rounded-lg cursor-pointer transition-all hover:bg-active dark:hover:bg-active hover:border-panel border-b-transparent;
}

.link {
  @include commonLink();
}

.active {
  @include commonLink();
  @apply bg-active dark:bg-active dark:hover:bg-hover;
}

.content-item-wrapper {
  @apply relative text-xs px-3 py-[6px] rounded-md select-none after:h-[1px] after:border-panel after:absolute after:w-[calc(100%-4px)] after:-bottom-1 after:right-[0.1rem];
  .content-item-title {
    @apply truncate text-panel;
  }
  .content-item-info {
    @apply flex justify-between items-center pt-3 text-content;
    .content-item-info-category {
      @apply flex items-center gap-1 flex-1 truncate;
    }
    .content-item-info-time {
      @apply text-[10px] opacity-80;
    }
  }
}
</style>
