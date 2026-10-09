import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { ScreenshotManager } from './ScreenshotManager';
import { EventHandler } from './EventHandler';
import { CoordinateSystem } from './CoordinateSystem';
import { RectangleAnnotation } from '../annotations/RectangleAnnotation';
import { EllipseAnnotation } from '../annotations/EllipseAnnotation';
import { TextAnnotation } from '../annotations/TextAnnotation';
import { ToolType, OperationType } from './types';
import { loadToolPreferences } from './toolPreferences';

vi.mock('@/ai', () => ({
  chatWithAi: vi.fn(),
  getAiProviderStatus: vi.fn(),
  startAiProvider: vi.fn(),
  LOCAL_AI_PROVIDER_ID: 'local-ai'
}));
vi.mock('@/utils/logger', () => ({
  logger: { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() },
  ocrDiagnosticLogger: { debug: vi.fn() }
}));

const style = { color: '#ff4444', lineWidth: 3, opacity: 1 };
const crop = { x: 0, y: 0, width: 500, height: 400 };
const event = (x: number, y: number): MouseEvent =>
  ({
    clientX: x,
    clientY: y,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn()
  }) as unknown as MouseEvent;

const fixture = () => {
  const canvas = {
    width: 500,
    height: 400,
    style: { cursor: 'crosshair' },
    addEventListener: vi.fn(),
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 500, height: 400 })
  } as unknown as HTMLCanvasElement;
  const coordinates = new CoordinateSystem(canvas);
  const events = new EventHandler(canvas, coordinates);
  // Exercise real input handlers while excluding desktop capture/painting I/O.
  const manager: ScreenshotManager = Object.assign(
    Object.create(ScreenshotManager.prototype) as ScreenshotManager,
    {
      canvas,
      coordinateSystem: coordinates,
      eventHandler: events,
      currentTool: ToolType.Rectangle,
      currentStyle: { ...style },
      toolCursor: 'crosshair',
      textSize: 16,
      mosaicSize: 8,
      selectionCornerRadius: 0,
      selectionRect: { ...crop },
      annotations: [],
      selectedAnnotation: null,
      currentAnnotation: null,
      draggedAnnotation: null,
      resizingAnnotation: null,
      rectangleHandle: null,
      resizeStartData: null,
      isShiftPressed: false,
      annotationUndoStack: [],
      annotationRedoStack: [],
      pendingDragSnapshot: null,
      pendingResizeSnapshot: null,
      pendingSnapCandidate: null,
      smartDetectionTimer: null,
      accessibilityDetectionTimer: null,
      elementCandidateStabilizer: { reset: vi.fn() },
      translationOverlay: { isVisible: false, blocks: [] },
      draw: vi.fn()
    }
  );
  const input = manager as unknown as {
    handleMouseDown(event: MouseEvent): void;
    handleMouseMove(event: MouseEvent): void;
    handleMouseUp(event: MouseEvent): void;
    annotations: RectangleAnnotation[];
    currentTool: ToolType;
    draw: ReturnType<typeof vi.fn>;
  };
  return { manager, input, canvas, events };
};

beforeEach(() => {
  const storage = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, value)
  });
});
afterEach(() => vi.unstubAllGlobals());

it('hovers without highlight/repaint, selects and moves a rectangle while retaining the drawing tool', () => {
  const { manager, input, canvas } = fixture();
  const rect = new RectangleAnnotation({ x: 100, y: 100 }, style);
  rect.addPoint({ x: 220, y: 180 });
  input.annotations.push(rect);
  input.handleMouseMove(event(160, 100));
  expect(canvas.style.cursor).toBe('move');
  expect(rect.getData().hovered).not.toBe(true);
  expect(input.draw).not.toHaveBeenCalled();
  input.handleMouseDown(event(160, 100));
  input.handleMouseMove(event(180, 120));
  input.handleMouseUp(event(180, 120));
  expect(rect.getBounds()).toEqual({ x: 120, y: 120, width: 120, height: 80 });
  expect(manager.getState().currentTool).toBe(ToolType.Rectangle);
  expect(manager.getState().selectedAnnotation?.id).toBe(rect.getData().id);
  manager.undoAnnotation();
  expect(manager.getState().annotations[0].points[0]).toEqual({
    x: 100,
    y: 100
  });
  manager.redoAnnotation();
  expect(manager.getState().annotations[0].points[0]).toEqual({
    x: 120,
    y: 120
  });
});

it('rotates through the external handle and restores rotation with undo/redo', () => {
  const { manager, input, canvas } = fixture();
  const rect = new RectangleAnnotation({ x: 100, y: 100 }, style);
  rect.addPoint({ x: 220, y: 180 });
  rect.updateData({ selected: true });
  input.annotations.push(rect);
  const handle = rect.getControlPoints()[8];
  input.handleMouseMove(event(handle.x, handle.y));
  expect(canvas.style.cursor).toBe('grab');
  input.handleMouseDown(event(handle.x, handle.y));
  expect(canvas.style.cursor).toBe('grabbing');
  input.handleMouseMove(event(260, 140));
  input.handleMouseUp(event(260, 140));
  expect(manager.getState().annotations[0].rotation).toBeCloseTo(Math.PI / 2);
  manager.undoAnnotation();
  expect(manager.getState().annotations[0].rotation ?? 0).toBe(0);
  manager.redoAnnotation();
  expect(manager.getState().annotations[0].rotation).toBeCloseTo(Math.PI / 2);
});

it('moves ellipse borders/text directly, draws inside hollow shapes and keeps mosaic/color picking behavior', () => {
  const { events } = fixture();
  const ellipse = new EllipseAnnotation({ x: 100, y: 100 }, style);
  ellipse.addPoint({ x: 220, y: 180 });
  expect(
    events.getOperationType({ x: 160, y: 100 }, ToolType.Text, crop, [ellipse])
  ).toBe(OperationType.MovingAnnotation);
  expect(
    events.getOperationType({ x: 160, y: 140 }, ToolType.Rectangle, crop, [
      ellipse
    ])
  ).toBe(OperationType.DrawingRect);
  expect(
    events.getOperationType({ x: 160, y: 100 }, ToolType.Mosaic, crop, [
      ellipse
    ])
  ).toBe(OperationType.DrawingMosaic);
  expect(
    events.getOperationType({ x: 160, y: 100 }, ToolType.ColorPicker, crop, [
      ellipse
    ])
  ).toBe(OperationType.ColorPicking);
  vi.stubGlobal('document', {
    createElement: vi.fn(() => ({
      getContext: () => ({ measureText: () => ({ width: 80 }) })
    }))
  });
  const text = new TextAnnotation({ x: 100, y: 100 }, '备注', style);
  expect(
    events.getOperationType({ x: 130, y: 100 }, ToolType.Ellipse, crop, [text])
  ).toBe(OperationType.MovingAnnotation);
  text.hitTest({ x: 140, y: 100 });
  text.move(10, 10);
  text.hitTest({ x: 140, y: 110 });
  expect(document.createElement).toHaveBeenCalledTimes(1);
});

it('writes preferences only for setting changes, not mouse movement', () => {
  const { manager, input } = fixture();
  const write = vi.spyOn(localStorage, 'setItem');
  manager.updateStyle({ color: '#abcdef', lineWidth: 8, opacity: 0.5 });
  manager.updateTextSize(24);
  manager.updateMosaicSize(20);
  manager.updateSelectionCornerRadius(40);
  const writes = write.mock.calls.length;
  input.handleMouseMove(event(300, 300));
  input.handleMouseMove(event(320, 320));
  expect(write).toHaveBeenCalledTimes(writes);
  expect(loadToolPreferences()).toEqual({
    currentStyle: { color: '#abcdef', lineWidth: 8, opacity: 0.5 },
    textSize: 24,
    mosaicSize: 20,
    selectionCornerRadius: 40
  });
});
