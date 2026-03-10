# 编码规范

本文档定义了 Snippets Code 项目的编码规范和最佳实践。

## 目录

- [TypeScript 规范](#typescript-规范)
- [Vue 组件规范](#vue-组件规范)
- [样式规范](#样式规范)
- [命名规范](#命名规范)
- [代码组织](#代码组织)
- [错误处理](#错误处理)
- [性能优化](#性能优化)

## TypeScript 规范

### 1. 类型定义

#### 1.1 明确的类型注解

所有函数参数和返回值都应该有明确的类型定义。

**✅ 推荐**
```typescript
function calculateTotal(items: Item[], tax: number): number {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return subtotal * (1 + tax);
}
```

**❌ 避免**
```typescript
function calculateTotal(items, tax) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return subtotal * (1 + tax);
}
```

#### 1.2 避免使用 any

除非有充分理由，否则避免使用 `any` 类型。如果必须使用，请添加注释说明原因。

**✅ 推荐**
```typescript
function processData(data: unknown): ProcessedData {
  if (isValidData(data)) {
    return transformData(data);
  }
  throw new Error('Invalid data');
}
```

**❌ 避免**
```typescript
function processData(data: any): any {
  return data.value;
}
```

#### 1.3 使用接口定义复杂类型

对于复杂的数据结构，使用接口或类型别名定义。

```typescript
/**
 * 用户信息接口
 */
interface User {
  /** 用户 ID */
  id: number;
  /** 用户名 */
  name: string;
  /** 电子邮件 */
  email: string;
  /** 创建时间 */
  createdAt: Date;
  /** 用户角色 */
  role: 'admin' | 'user' | 'guest';
}

/**
 * API 响应接口
 */
interface ApiResponse<T> {
  /** 响应数据 */
  data: T;
  /** 响应消息 */
  message: string;
  /** 响应状态码 */
  code: number;
}
```

#### 1.4 使用类型守卫

对于外部数据或不确定的数据，使用类型守卫进行验证。

```typescript
/**
 * 检查是否为有效的用户对象
 */
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'email' in value
  );
}

// 使用类型守卫
function processUser(data: unknown): void {
  if (isUser(data)) {
    console.log(data.name); // TypeScript 知道 data 是 User 类型
  }
}
```

### 2. JSDoc 注释

#### 2.1 函数注释

所有导出的函数都应该有 JSDoc 注释。

```typescript
/**
 * 计算购物车总价
 * 
 * 该函数会遍历所有商品，计算总价并应用税率。
 * 
 * @param items - 购物车商品列表
 * @param taxRate - 税率（0-1 之间的小数）
 * @returns 包含税的总价
 * @throws {Error} 当税率无效时抛出错误
 * 
 * @example
 * ```typescript
 * const items = [
 *   { name: 'Apple', price: 10 },
 *   { name: 'Banana', price: 5 }
 * ];
 * const total = calculateTotal(items, 0.1);
 * console.log(total); // 16.5
 * ```
 */
export function calculateTotal(items: Item[], taxRate: number): number {
  if (taxRate < 0 || taxRate > 1) {
    throw new Error('Tax rate must be between 0 and 1');
  }
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return subtotal * (1 + taxRate);
}
```

#### 2.2 接口注释

接口和类型定义也应该有注释。

```typescript
/**
 * 商品接口
 */
interface Item {
  /** 商品 ID */
  id: number;
  /** 商品名称 */
  name: string;
  /** 商品价格 */
  price: number;
  /** 商品数量 */
  quantity: number;
  /** 商品分类（可选） */
  category?: string;
}
```

### 3. 泛型使用

合理使用泛型提高代码复用性。

```typescript
/**
 * 通用的 API 调用函数
 * 
 * @param url - API 端点
 * @param options - 请求选项
 * @returns API 响应数据
 */
async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(url, options);
  return response.json();
}

// 使用
const users = await fetchData<User[]>('/api/users');
const user = await fetchData<User>('/api/users/1');
```

## Vue 组件规范

### 1. 组件结构

使用 Composition API 和 `<script setup>` 语法。

```vue
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

/**
 * 组件 Props 接口
 */
interface UserCardProps {
  /** 用户 ID */
  userId: number;
  /** 是否显示详细信息 */
  showDetails?: boolean;
}

/**
 * 组件 Emits 接口
 */
interface UserCardEmits {
  /** 用户点击事件 */
  'click': [userId: number];
  /** 用户删除事件 */
  'delete': [userId: number];
}

const props = withDefaults(defineProps<UserCardProps>(), {
  showDetails: false
});

const emit = defineEmits<UserCardEmits>();

// 组件状态
const user = ref<User | null>(null);
const loading = ref(false);

// 计算属性
const displayName = computed(() => {
  return user.value ? `${user.value.name} (${user.value.email})` : '';
});

// 方法
async function fetchUser(): Promise<void> {
  loading.value = true;
  try {
    const response = await api.getUser(props.userId);
    user.value = response.data;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'fetchUser',
      timestamp: new Date()
    });
  } finally {
    loading.value = false;
  }
}

function handleClick(): void {
  emit('click', props.userId);
}

// 生命周期
onMounted(() => {
  fetchUser();
});
</script>

<template>
  <div class="user-card" @click="handleClick">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="user" class="user-info">
      <h3 class="name">{{ displayName }}</h3>
      <p v-if="showDetails" class="details">{{ user.bio }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-card {
  @apply p-4 rounded-lg bg-white shadow cursor-pointer;
  @apply hover:shadow-lg transition-shadow;
  
  .loading {
    @apply text-center text-gray-500;
  }
  
  .user-info {
    .name {
      @apply text-lg font-bold mb-2;
    }
    
    .details {
      @apply text-sm text-gray-600;
    }
  }
}
</style>
```

### 2. Composables

提取可复用逻辑到 composables。

```typescript
/**
 * 用户管理 Composable
 * 
 * 提供用户数据的获取、创建、更新和删除功能。
 * 
 * @returns 用户管理相关的状态和方法
 * 
 * @example
 * ```typescript
 * const { users, loading, fetchUsers, addUser, deleteUser } = useUsers();
 * 
 * onMounted(async () => {
 *   await fetchUsers();
 * });
 * ```
 */
export function useUsers() {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  /**
   * 获取用户列表
   */
  async function fetchUsers(): Promise<void> {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.getUsers();
      users.value = response.data;
    } catch (err) {
      error.value = err as Error;
      ErrorHandler.handle(err, {
        type: ErrorType.API_ERROR,
        operation: 'fetchUsers',
        timestamp: new Date()
      });
    } finally {
      loading.value = false;
    }
  }

  /**
   * 添加用户
   * @param userData - 用户数据
   */
  async function addUser(userData: Omit<User, 'id'>): Promise<void> {
    try {
      const response = await api.createUser(userData);
      users.value.push(response.data);
      ErrorHandler.success('用户添加成功');
    } catch (err) {
      ErrorHandler.handle(err, {
        type: ErrorType.API_ERROR,
        operation: 'addUser',
        timestamp: new Date()
      });
      throw err;
    }
  }

  /**
   * 删除用户
   * @param userId - 用户 ID
   */
  async function deleteUser(userId: number): Promise<void> {
    try {
      await api.deleteUser(userId);
      users.value = users.value.filter(u => u.id !== userId);
      ErrorHandler.success('用户删除成功');
    } catch (err) {
      ErrorHandler.handle(err, {
        type: ErrorType.API_ERROR,
        operation: 'deleteUser',
        timestamp: new Date()
      });
      throw err;
    }
  }

  return {
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),
    fetchUsers,
    addUser,
    deleteUser
  };
}
```

### 3. 组件大小限制

- 单个组件文件不超过 300 行
- 如果组件过大，考虑拆分为更小的子组件
- 将复杂逻辑提取到 composables

## 样式规范

### 1. 使用 TailwindCSS

优先使用 TailwindCSS 工具类。

```vue
<template>
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
    <h3 class="text-lg font-bold">{{ title }}</h3>
    <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
      Click me
    </button>
  </div>
</template>
```

### 2. 使用 SCSS 处理复杂样式

对于复杂的样式，使用 SCSS。

```vue
<style scoped lang="scss">
.user-card {
  @apply p-4 rounded-lg bg-white shadow;
  
  &:hover {
    @apply shadow-lg;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
  
  .header {
    @apply flex items-center justify-between mb-4;
    
    .title {
      @apply text-lg font-bold;
    }
    
    .actions {
      @apply flex gap-2;
    }
  }
  
  .content {
    @apply text-sm text-gray-600;
    
    p {
      @apply mb-2;
      
      &:last-child {
        @apply mb-0;
      }
    }
  }
}
</style>
```

### 3. 使用 CSS 变量

对于主题相关的样式，使用 CSS 变量。

```scss
.theme-element {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
}
```

## 命名规范

### 1. 文件命名

- **组件文件**：使用 PascalCase（如 `UserProfile.vue`）
- **工具文件**：使用 kebab-case（如 `date-utils.ts`）
- **Composables**：使用 camelCase，以 `use` 开头（如 `useUsers.ts`）

### 2. 变量命名

```typescript
// 常量：UPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';

// 变量和函数：camelCase
const userName = 'John';
function getUserData() { }

// 类和接口：PascalCase
class UserManager { }
interface UserData { }

// 私有属性：以下划线开头
class User {
  private _password: string;
}

// 布尔值：使用 is/has/can 前缀
const isLoading = true;
const hasPermission = false;
const canEdit = true;
```

### 3. 组件命名

```typescript
// 组件名使用 PascalCase
defineOptions({
  name: 'UserProfile'
});

// Props 接口使用组件名 + Props
interface UserProfileProps {
  userId: number;
}

// Emits 接口使用组件名 + Emits
interface UserProfileEmits {
  'update': [value: string];
}
```

## 代码组织

### 1. 目录结构

```
src/
├── api/              # API 调用
│   ├── fragment.ts
│   └── github.ts
├── components/       # 可复用组件
│   ├── ContentItem/
│   └── TagInput/
├── hooks/            # Composables
│   ├── useSearch.ts
│   └── useDebounce.ts
├── pages/            # 页面组件
│   ├── search/
│   └── config/
├── store/            # 状态管理
│   └── index.ts
├── types/            # 类型定义
│   ├── index.ts
│   ├── api.ts
│   └── models.ts
├── utils/            # 工具函数
│   ├── error-handler.ts
│   └── validators.ts
└── styles/           # 全局样式
    └── index.scss
```

### 2. 导入顺序

```typescript
// 1. Vue 相关
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 2. 第三方库
import { ElMessage } from 'element-plus';
import dayjs from 'dayjs';

// 3. 项目内部 - 类型
import type { User, ApiResponse } from '@/types';

// 4. 项目内部 - 工具和 composables
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { useUsers } from '@/hooks/useUsers';

// 5. 项目内部 - 组件
import UserCard from '@/components/UserCard/index.vue';
```

### 3. 函数大小限制

- 单个函数不超过 50 行
- 如果函数过长，考虑拆分为更小的函数
- 保持单一职责原则

## 错误处理

### 1. 使用统一的 ErrorHandler

```typescript
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

async function fetchData(): Promise<Data> {
  try {
    const response = await api.getData();
    return response.data;
  } catch (error) {
    ErrorHandler.handle(
      error,
      {
        type: ErrorType.API_ERROR,
        operation: 'fetchData',
        timestamp: new Date()
      },
      {
        userMessage: '获取数据失败，请重试',
        showNotification: true
      }
    );
    throw error;
  }
}
```

### 2. 使用 wrapAsync 包装异步函数

```typescript
const fetchDataSafe = ErrorHandler.wrapAsync(
  async () => {
    return await api.getData();
  },
  {
    type: ErrorType.API_ERROR,
    operation: 'fetchData'
  }
);

// 使用
const data = await fetchDataSafe();
```

### 3. 提供用户友好的错误消息

```typescript
try {
  await deleteUser(userId);
} catch (error) {
  ErrorHandler.handle(error, {
    type: ErrorType.API_ERROR,
    operation: 'deleteUser',
    timestamp: new Date()
  }, {
    userMessage: '删除用户失败，请稍后重试'
  });
}
```

## 消息提示

### 1. 使用统一的 modal 工具

**所有消息提示都必须使用 `modal` 工具，不要直接使用 `ElMessage` 或 `ElNotification`。**

```typescript
import modal from '@/utils/modal';

// ✅ 推荐
modal.success('保存成功');
modal.error('操作失败');

// ❌ 避免
import { ElMessage } from 'element-plus';
ElMessage.success('保存成功');
```

### 2. 根据场景选择位置

#### 居中显示（center）- 默认

用于用户主动触发的重要操作反馈：

```typescript
// 保存操作
modal.success('保存成功');

// 删除操作
modal.success('片段已删除');

// 错误提示
modal.error('操作失败');
```

#### 右上角显示（top-right）

用于后台操作通知、不打断用户的信息：

```typescript
// 反向链接更新
modal.success('已更新 3 个反向链接', 'top-right');

// 同步通知
modal.info('正在同步...', 'top-right');

// 批量操作
modal.success('已导入 10 个文件', 'top-right');
```

### 3. 使用国际化

```typescript
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

modal.success(t('common.saveSuccess'));
modal.error(t('common.saveFailed'));
```

### 4. 详细文档

参见 [消息提示使用规范](./MESSAGE_NOTIFICATION_GUIDE.md) 了解更多详情。

## 错误处理（续）

### 4. 提供用户友好的错误消息（续）
  });
}
```

## 性能优化

### 1. 使用 computed 缓存计算结果

```typescript
// ✅ 推荐
const filteredUsers = computed(() => {
  return users.value.filter(u => u.active);
});

// ❌ 避免
function getFilteredUsers() {
  return users.value.filter(u => u.active);
}
```

### 2. 使用 v-memo 优化列表渲染

```vue
<template>
  <div v-for="item in items" :key="item.id" v-memo="[item.id, item.name]">
    {{ item.name }}
  </div>
</template>
```

### 3. 使用虚拟滚动处理大列表

```vue
<template>
  <RecycleScroller
    :items="items"
    :item-size="50"
    key-field="id"
  >
    <template #default="{ item }">
      <div>{{ item.name }}</div>
    </template>
  </RecycleScroller>
</template>
```

### 4. 使用 debounce 优化频繁操作

```typescript
import { useDebounce } from '@/hooks/useDebounce';

const debouncedSearch = useDebounce((query: string) => {
  performSearch(query);
}, 300);
```

## 路径处理规范

本项目涉及多种路径格式：文件系统绝对路径、URL 编码路径、相对路径等。正确处理路径格式是避免 bug 的关键。

### 1. 路径格式统一

**必须统一使用正斜杠 `/` 进行路径比较和存储。**

```typescript
// ✅ 推荐：统一转义为正斜杠
const normalizedPath = path.replace(/\\/g, '/');

// ✅ 推荐：路径比较时双方都规范化
const isMatch = normalizedPathA === normalizedPathB;

// ❌ 避免：直接比较未规范化的路径
if (pathA === pathB) { ... }
```

### 2. 绝对路径与相对路径混用问题

**后端与前端路径格式可能不同，跨系统调用时必须注意：**

| 来源 | 路径格式 | 示例 |
|------|----------|------|
| 数据库/文件 API | 绝对路径 | `D:\Program Files\snippets-code\Css\渐变色.md` |
| 文件监控事件 | 相对路径 | `Css/窗体拖拽.md` |
| Vue Router | URL 编码 | `D%3A%2F...%2F%E6%B8%90%E8%89%B2.md` |

**处理流程：**

```typescript
// 1. 文件监控事件路径（相对路径）→ 拼接 workspaceRoot 转绝对路径
const wsRoot = workspaceRoot.value.replace(/\\/g, '/');
const absDeletedPath = `${wsRoot}/${relativePath}`.replace(/\/+/g, '/');

// 2. 路由参数（URL 编码）→ 解码后比较
const routeId = decodeURIComponent(route.params.id as string);

// 3. 路径比较：统一规范化
const normalizedRouteId = decodeURIComponent(routeId).replace(/\\/g, '/');
const normalizedContentId = (content.id as string).replace(/\\/g, '/');
const isActive = normalizedRouteId === normalizedContentId;
```

### 3. 常见路径处理场景

#### 3.1 检查文件是否在某个目录中

```typescript
const isInDirectory = (filePath: string, dirPath: string): boolean => {
  const normalizedFile = filePath.replace(/\\/g, '/');
  const normalizedDir = dirPath.replace(/\\/g, '/');
  return normalizedFile === normalizedDir || 
         normalizedFile.startsWith(normalizedDir + '/');
};
```

#### 3.2 检查文件是否被删除

```typescript
// files-changed-batch 事件中的 deleted 是相对路径数组
const isDeleted = (currentFileId: string, deleted: string[]): boolean => {
  const normalizedCurrent = currentFileId.replace(/\\/g, '/');
  const wsRoot = workspaceRoot.value.replace(/\\/g, '/');
  
  return deleted.some((delRelPath: string) => {
    const absDelPath = delRelPath.startsWith('/') || delRelPath.match(/^[A-Za-z]:/)
      ? delRelPath.replace(/\\/g, '/')
      : `${wsRoot}/${delRelPath}`.replace(/\/+/g, '/');
    return normalizedCurrent === absDelPath;
  });
};
```

## 事件与数据流规范

### 1. 路由参数与数据 ID 的匹配

**Vue Router 的 `route.params` 会自动进行 URL 编码：**

```typescript
// 路由定义
/path/:id  →  /path/D%3A%2F...%2Ffile.md

// 获取时需要解码
const id = decodeURIComponent(route.params.id as string);

// 组件内比较时必须统一处理
const isActive = computed(() => {
  const routeId = route.params.id as string | undefined;
  if (!routeId) return false;
  // 必须解码后再比较
  const normalizedRouteId = decodeURIComponent(routeId).replace(/\\/g, '/');
  const normalizedContentId = (content.value.id as string).replace(/\\/g, '/');
  return normalizedRouteId === normalizedContentId;
});
```

### 2. 组件卸载时清理事件监听

**防止事件监听器内存泄漏和重复执行：**

```typescript
onMounted(() => {
  window.addEventListener('refresh-data', handleRefreshData);
});

onUnmounted(() => {
  window.removeEventListener('refresh-data', handleRefreshData);
});
```

### 3. 事件处理中的异步问题

**事件处理函数必须是 `async`，确保状态更新后再执行后续逻辑：**

```typescript
const handleRefreshData = async (event: Event) => {
  const customEvent = event as CustomEvent;
  const { source, deleted } = customEvent.detail;
  
  // ✅ 正确：await 确保导航完成后再继续
  if (shouldNavigate) {
    await router.push('/config/category');
    return;
  }
  
  // 刷新数据
  await queryFragments(categoryId, searchText);
};
```

### 4. 刷新列表时保持激活状态

**数据刷新后，需要重新计算列表项的激活状态：**

```typescript
// ❌ 错误：刷新后所有项变成未激活
const isActive = route.params.id === content.id.toString();

// ✅ 正确：统一解码和规范化后再比较
const isActive = computed(() => {
  const routeId = route.params.id;
  if (!routeId) return false;
  const normalizedRoute = decodeURIComponent(routeId as string).replace(/\\/g, '/');
  const normalizedContent = (content.id as string).replace(/\\/g, '/');
  return normalizedRoute === normalizedContent;
});
```

## 总结

遵循这些编码规范可以：

1. 提高代码质量和可维护性
2. 减少 bug 和错误
3. 提升团队协作效率
4. 改善代码审查体验
5. 确保项目长期健康发展

如有疑问或建议，请在项目中提出 Issue 讨论。
