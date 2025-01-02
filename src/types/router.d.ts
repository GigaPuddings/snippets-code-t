import "vue-router";

declare module "vue-router" {
  // https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
  // 可以通过扩展 RouteMeta 接口来输入 meta 字段
  interface RouteMeta {
    /**
     * 菜单名称
     * @example 'Dashboard'
     */
    title?: string;

    /**
     * 是否缓存页面
     * true 缓存, false 不缓存
     * @default false
     */
    keepAlive?: boolean;
  }
}
