export const useConfigurationStore = defineStore('configuration', {
  state: (): StoreState => ({
    data: [],
    id: '',
    apps: [],
    categories: [],
    contents: [],
    editCategoryId: '',
    categorySort: 'asc' as 'asc' | 'desc',
  }),
  persist: {
    storage: sessionStorage,
    pick: ['categories', 'categorySort']
  }
})

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
