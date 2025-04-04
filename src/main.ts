import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
// 样式
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@icon-park/vue-next/styles/index.css';
import '@/styles/index.scss';
import { initTheme } from '@/utils/theme';
import '@/styles/theme.scss';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(router);
app.use(pinia);

// 初始化主题
initTheme();

app.mount('#app');
