/**
 * Markdown 链接处理器（Obsidian 风格）
 * 
 * 功能：
 * 1. 编辑时显示 Markdown 格式 [文本](url)（普通文本，无特殊样式）
 * 2. 失焦或光标不在链接内时，只显示文本（蓝色链接样式），隐藏 [](url) 部分
 * 3. 点击链接在浏览器中打开
 * 4. 自动补全缺少协议的 URL
 * 
 * 工作原理：
 * - 使用 Decoration 来控制显示
 * - 编辑时显示完整的 Markdown 格式
 * - 失焦时隐藏 Markdown 语法，只显示链接文本
 * - 类似 Wikilink 的实现方式
 */
// @ts-nocheck
import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

export const MarkdownLinkHandler = Extension.create({
  name: 'markdownLinkHandler',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('markdownLinkHandler'),
        props: {
          decorations: (state) => {
            const decorations: any[] = [];
            const doc = state.doc;
            const { selection } = state;
            const isFocused = state.selection.from !== state.selection.to || 
                            document.activeElement?.classList.contains('ProseMirror');

            // 正则表达式匹配 Markdown 链接：[文本](url)
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

            doc.descendants((node, pos) => {
              if (!node.isText) {
                return;
              }

              const text = node.text || '';
              let match;

              // 重置正则表达式的 lastIndex
              linkRegex.lastIndex = 0;

              while ((match = linkRegex.exec(text)) !== null) {
                const linkText = match[1];
                const url = match[2];
                const from = pos + match.index;
                const to = from + match[0].length;
                
                // 跳过锚点链接
                if (url.startsWith('#')) {
                  continue;
                }
                
                // 检查光标是否在这个链接内部
                const cursorInside = selection.from >= from && selection.from <= to;

                // 如果失焦或光标不在内部，隐藏 Markdown 语法
                if (!isFocused || !cursorInside) {
                  // 隐藏开始的 [
                  decorations.push(
                    Decoration.inline(from, from + 1, {
                      class: 'markdown-link-bracket-hidden'
                    })
                  );
                  
                  // 显示链接文本部分（蓝色链接样式）
                  const textStart = from + 1;
                  const textEnd = from + 1 + linkText.length;
                  decorations.push(
                    Decoration.inline(textStart, textEnd, {
                      class: 'markdown-link-text',
                      'data-url': url.includes('://') ? url : `https://${url}`,
                      style: 'cursor: pointer;'
                    })
                  );
                  
                  // 隐藏 ](url)
                  decorations.push(
                    Decoration.inline(textEnd, to, {
                      class: 'markdown-link-bracket-hidden'
                    })
                  );
                } else {
                  // 编辑时显示完整的 Markdown 格式，不添加特殊样式
                  // 不添加任何装饰，保持普通文本
                }
              }
            });

            return DecorationSet.create(doc, decorations);
          },
          handleClick: (view, pos, event) => {
            // 点击处理已移到主编辑器的 handleClick 中
            // 这里保留空实现以防需要
            return false;
          },
          handleDOMEvents: {
            // 在 mousedown 阶段处理，防止光标移动导致 decoration 消失
            mousedown: (view, event) => {
              const target = event.target as HTMLElement;
              
              // 检查是否点击了 Markdown 链接文本
              if (target.classList.contains('markdown-link-text')) {
                const url = target.getAttribute('data-url');
                
                if (url) {
                  // 阻止默认行为，防止光标移动
                  event.preventDefault();
                  event.stopPropagation();
                  
                  // 在 mouseup 时打开链接（更符合用户习惯）
                  const handleMouseUp = (upEvent: MouseEvent) => {
                    // 确保是在同一个元素上释放鼠标
                    if (upEvent.target === target) {
                      import('@tauri-apps/plugin-shell').then(({ open }) => {
                        open(url).catch(err => {
                          console.error('Failed to open external link:', err);
                        });
                      });
                    }
                    
                    // 移除监听器
                    document.removeEventListener('mouseup', handleMouseUp);
                  };
                  
                  document.addEventListener('mouseup', handleMouseUp);
                  
                  return true;
                }
              }
              
              return false;
            }
          }
        }
      })
    ];
  }
});
