import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';

// 异步初始化应用
async function initApp() {
  // 创建Vue应用实例
  const app = createApp(App);
  
  // 创建并配置Pinia
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  
  app.use(router);
  app.use(pinia);

  // 动态导入样式文件，减少主线程阻塞
  const stylePromises = [
    import('element-plus/theme-chalk/dark/css-vars.css'),
    import('@icon-park/vue-next/styles/index.css'),
    import('@/styles/index.scss'),
    import('@/styles/theme.scss')
  ];

  // 异步初始化主题
  const { initTheme } = await import('@/utils/theme');
  
  // 等待样式加载完成后再初始化主题和挂载应用
  try {
    await Promise.all(stylePromises);
    initTheme();
    app.mount('#app');
  } catch (error) {
    console.error('应用初始化失败:', error);
    // 回退方案：即使样式加载失败也要挂载应用
    initTheme();
    app.mount('#app');
  }
}

// 启动应用
initApp();
