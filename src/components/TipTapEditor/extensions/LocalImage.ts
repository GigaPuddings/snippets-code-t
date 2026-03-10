/**
 * 本地图片扩展
 * 支持：
 * 1. 本地路径转换为 Tauri 可访问的 URL
 * 2. 图片缩放（宽度调整）
 * 3. 显示图片路径
 * 4. 点击路径打开文件位置
 */

import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import ImageComponent from './ImageComponent.vue';

export const LocalImage = Node.create({
  name: 'localImage',
  
  // 设置更高的优先级，确保在其他扩展之前处理
  priority: 1000,
  
  // 定义为内联节点
  inline: true,
  
  // 定义节点组
  group: 'inline',
  
  // 可拖拽
  draggable: true,
  
  // 原子节点（不可编辑内部内容）
  atom: true,
  
  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: element => element.getAttribute('src'),
        renderHTML: attributes => {
          if (!attributes.src) {
            return {};
          }
          return {
            src: attributes.src,
          };
        },
      },
      alt: {
        default: null,
        parseHTML: element => element.getAttribute('alt'),
        renderHTML: attributes => {
          if (!attributes.alt) {
            return {};
          }
          return {
            alt: attributes.alt,
          };
        },
      },
      title: {
        default: null,
        parseHTML: element => element.getAttribute('title'),
        renderHTML: attributes => {
          if (!attributes.title) {
            return {};
          }
          return {
            title: attributes.title,
          };
        },
      },
      width: {
        default: null,
        parseHTML: element => {
          const width = element.getAttribute('width');
          return width ? parseInt(width, 10) : null;
        },
        renderHTML: attributes => {
          if (!attributes.width) {
            return {};
          }
          return {
            width: attributes.width,
          };
        },
      },
      height: {
        default: null,
        parseHTML: element => {
          const height = element.getAttribute('height');
          return height ? parseInt(height, 10) : null;
        },
        renderHTML: attributes => {
          if (!attributes.height) {
            return {};
          }
          return {
            height: attributes.height,
          };
        },
      },
      // 存储原始的相对路径
      'data-original-path': {
        default: null,
        parseHTML: element => element.getAttribute('data-original-path'),
        renderHTML: attributes => {
          if (!attributes['data-original-path']) {
            return {};
          }
          return {
            'data-original-path': attributes['data-original-path'],
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
        getAttrs: (element) => {
          const htmlElement = element as HTMLElement;
          const src = htmlElement.getAttribute('src');
          const originalPath = htmlElement.getAttribute('data-original-path');
          
          // 返回属性对象，TipTap 会使用这些属性创建节点
          return {
            src: src || '',
            alt: htmlElement.getAttribute('alt') || '',
            title: htmlElement.getAttribute('title') || null,
            width: htmlElement.getAttribute('width') ? parseInt(htmlElement.getAttribute('width')!, 10) : null,
            height: htmlElement.getAttribute('height') ? parseInt(htmlElement.getAttribute('height')!, 10) : null,
            'data-original-path': originalPath || null,
          };
        }
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return VueNodeViewRenderer(ImageComponent as any);
  },
});
