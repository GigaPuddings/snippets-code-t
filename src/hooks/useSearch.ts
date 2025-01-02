import { useConfigurationStore } from "@/store";
import { debounce } from "@/utils";
import { searchContent } from "@/database/search";

export default function useSearch() {
  const store = useConfigurationStore()
  let apps: ContentType[] = []
  const handleInput = debounce(async (searchValue: string) => {

    console.log('searchValue', searchValue);

    apps = store.apps

    // 包含中文搜索、字母大小写匹配
    apps = apps.filter((app: ContentType) => app.title.includes(searchValue) || app.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    const result = searchValue ? await searchContent(searchValue) : []
    
    store.data = [...apps, ...result]
  }, 500)

  return {
    handleInput
  }
}
