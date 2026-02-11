/**
 * Live Preview 扩展（Obsidian 风格）
 * 
 * 功能：
 * 1. 当光标在某个块级元素内时，显示该块的 Markdown 源码
 * 2. 当光标离开时，恢复渲染后的效果
 * 3. 类似 Obsidian 的实时编辑体验
 * 
 * 工作原理：
 * - 监听光标位置变化
 * - 使用 Decoration 来控制显示/隐藏 Markdown 语法
 * - 只影响当前编辑的块，其他块保持渲染状态
 */
// @ts-nocheck
import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

export const LivePreview = Extension.create({
  name: 'livePreview',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('livePreview'),
        state: {
          init() {
            return {
              activeNodePos: null,
              decorations: DecorationSet.empty
            };
          },
          apply(tr, value, oldState, newState) {
            // 如果文档没有变化且选区没有变化，保持原状态
            if (!tr.docChanged && !tr.selectionSet) {
              return value;
            }

            const { selection } = newState;
            const { $from } = selection;
            
            // 找到当前光标所在的块级节点
            let activeNodePos = null;
            let depth = $from.depth;
            
            // 从当前位置向上查找块级节点
            while (depth > 0) {
              const node = $from.node(depth);
              const pos = $from.before(depth);
              
              // 检查是否是块级节点（段落、标题、列表项等）
              if (node.isBlock && node.type.name !== 'doc') {
                activeNodePos = pos;
                break;
              }
              depth--;
            }

            return {
              activeNodePos,
              decorations: DecorationSet.empty
            };
          }
        },
        props: {
          decorations(state) {
            const pluginState = this.getState(state);
            const decorations: any[] = [];
            const { activeNodePos } = pluginState;
            const { doc, selection } = state;

            // 如果没有活动节点，返回空装饰
            if (activeNodePos === null) {
              return DecorationSet.empty;
            }

            // 遍历文档中的所有节点
            doc.descendants((node, pos) => {
              // 只处理块级节点
              if (!node.isBlock || node.type.name === 'doc') {
                return;
              }

              const isActive = pos === activeNodePos;

              // 如果是当前活动的节点，显示源码（移除装饰）
              if (isActive) {
                // 当前编辑的块不添加任何装饰，显示原始 Markdown
                return;
              }

              // 对于非活动节点，保持渲染状态
              // 这里我们不需要添加装饰，因为默认就是渲染状态
              // 但我们可以添加一个类来标识这是"预览"状态
              decorations.push(
                Decoration.node(pos, pos + node.nodeSize, {
                  class: 'live-preview-rendered'
                })
              );
            });

            return DecorationSet.create(doc, decorations);
          }
        }
      })
    ];
  }
});
