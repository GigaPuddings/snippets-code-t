import { describe, expect, it } from 'vitest'
import { AnnotationFactory } from '../core/AnnotationFactory'
import { ToolType } from '../core/types'
import { EllipseAnnotation } from './EllipseAnnotation'
import { LineAnnotation } from './LineAnnotation'
import { getTextOrigin } from './TextAnnotation'

const style = { color: '#ff4444', lineWidth: 3 }

describe('shape annotations', () => {
  it('creates and hit-tests a straight line', () => {
    const annotation = new LineAnnotation({ x: 10, y: 10 }, style)
    annotation.addPoint({ x: 110, y: 10 })

    expect(annotation.getData().type).toBe(ToolType.Line)
    expect(annotation.hitTest({ x: 60, y: 14 })).toBe(true)
    expect(annotation.hitTest({ x: 60, y: 30 })).toBe(false)
  })

  it('creates and hit-tests an ellipse outline', () => {
    const annotation = new EllipseAnnotation({ x: 10, y: 20 }, style)
    annotation.addPoint({ x: 110, y: 80 })

    expect(annotation.getData().type).toBe(ToolType.Ellipse)
    expect(annotation.hitTest({ x: 60, y: 20 })).toBe(true)
    expect(annotation.hitTest({ x: 60, y: 50 })).toBe(false)
  })

  it('restores new shape types through the annotation factory', () => {
    const annotation = AnnotationFactory.fromData({
      id: 'ellipse-id',
      type: ToolType.Ellipse,
      points: [{ x: 10, y: 20 }, { x: 110, y: 80 }],
      style
    })

    expect(annotation).toBeInstanceOf(EllipseAnnotation)
    expect(annotation?.getData().id).toBe('ellipse-id')
  })

  it('applies annotation opacity while rendering', () => {
    let currentAlpha = 1
    let renderedAlpha = 1
    const context = {
      get globalAlpha() {
        return currentAlpha
      },
      set globalAlpha(value: number) {
        currentAlpha = value
      },
      save() {},
      restore() {},
      setLineDash() {},
      beginPath() {},
      moveTo() {},
      lineTo() {},
      stroke() {
        renderedAlpha = currentAlpha
      }
    } as unknown as CanvasRenderingContext2D
    const annotation = new LineAnnotation(
      { x: 10, y: 10 },
      { ...style, opacity: 0.55 }
    )
    annotation.addPoint({ x: 110, y: 10 })

    annotation.draw({
      ctx: context,
      scale: 1,
      offset: { x: 0, y: 0 },
      bounds: { x: 0, y: 0, width: 200, height: 200 }
    })

    expect(renderedAlpha).toBe(0.55)
  })

  it('uses a stable text origin for input and canvas rendering', () => {
    expect(getTextOrigin({ x: 20, y: 30 })).toEqual({ x: 24, y: 22 })
  })
})
