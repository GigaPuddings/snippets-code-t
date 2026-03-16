import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import VueDevTools from "vite-plugin-vue-devtools";

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    /** 自动导入配置  @see https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts */
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'pinia', 'vue-router'],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      eslintrc: {
        // 是否自动生成 eslint 规则，建议生成之后设置 false
        enabled: false,
        // 指定自动导入函数 eslint 规则的文件
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      // 是否在 vue 模板中自动导入
      vueTemplate: true,
      // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)
      // dts: false
      dts: 'src/types/auto-imports.d.ts'
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      // 指定自定义组件位置(默认:src/components)
      dirs: ['src/components', 'src/**/components'],
      // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
      // dts: false
      dts: 'src/types/components.d.ts'
    })
    // VueDevTools()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@tauri': resolve(__dirname, './src-tauri')
    }
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 1421
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**']
    }
  }
}));
