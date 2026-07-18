import type { Editor } from '@tiptap/core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  EDITOR_SELECTION_LAYOUT_EVENT,
  requestSelectionScrollAfterLayout,
  type EditorSelectionLayoutDetail
} from './editorLayout';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('requestSelectionScrollAfterLayout', () => {
  it('waits for layout and preserves the downward-only scroll request', () => {
    const frames: FrameRequestCallback[] = [];
    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((callback: FrameRequestCallback) => {
        frames.push(callback);
        return frames.length;
      })
    );

    const dom = new EventTarget() as EventTarget & { isConnected: boolean };
    dom.isConnected = true;
    const editor = {
      isDestroyed: false,
      view: { dom }
    } as unknown as Editor;
    const targetElement = { isConnected: true } as HTMLElement;
    let receivedDetail: EditorSelectionLayoutDetail | null = null;

    dom.addEventListener(EDITOR_SELECTION_LAYOUT_EVENT, (event) => {
      receivedDetail = (
        event as CustomEvent<EditorSelectionLayoutDetail>
      ).detail;
    });

    requestSelectionScrollAfterLayout(editor, {
      allowScrollUp: false,
      shouldScroll: () => true,
      targetElement: () => targetElement
    });
    expect(receivedDetail).toBeNull();

    frames.shift()?.(0);
    expect(receivedDetail).toBeNull();

    frames.shift()?.(16);
    expect(receivedDetail).toEqual({
      allowScrollUp: false,
      targetElement
    });
  });
});
