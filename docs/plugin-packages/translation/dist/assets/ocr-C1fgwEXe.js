import { a8 as a, f as s, l } from "./_plugin-vue_export-helper-B5jgtIu6.js";
import { d as u } from "./text-fexV_7kf.js";
async function f(n) {
  return n.toDataURL("image/png");
}
function m(n) {
  return Array.isArray(n) ? n.map((r) => {
    if (!r || typeof r != "object")
      return null;
    const t = r, e = typeof t.text == "string" ? t.text : "";
    return e.trim() ? {
      text: e,
      x: Number(t.x || 0),
      y: Number(t.y || 0),
      width: Number(t.width || 0),
      height: Number(t.height || 0),
      fontSize: Number(t.fontSize || 0),
      lineHeight: Number(t.lineHeight || 0),
      angle: Number(t.angle || 0),
      confidence: Number(t.confidence || 0)
    } : null;
  }).filter((r) => !!r) : [];
}
async function p(n) {
  const r = Date.now(), t = await f(n);
  a.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const e = await s("recognize_text_from_image", {
      imageData: t,
      engine: "rapidocr"
    }), c = m(e.blocks), o = typeof e.full_text == "string" && e.full_text || typeof e.text == "string" && e.text || c.map((g) => g.text).join(`
`), i = {
      blocks: c,
      full_text: o,
      text: o,
      language: typeof e.language == "string" && e.language || u(o),
      confidence: Number(e.confidence || 0),
      engine: typeof e.engine == "string" ? e.engine : "rapidocr"
    };
    return a.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - r,
      confidence: i.confidence,
      blocks: i.blocks.length,
      textLength: i.full_text.trim().length,
      textPreview: i.full_text.trim().slice(0, 300)
    }), i;
  } catch (e) {
    throw l.error("[OCR] RapidOCR recognizeFromCanvas failed", e), a.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - r,
      error: e instanceof Error ? `${e.name}: ${e.message}` : String(e)
    }), e;
  }
}
async function x() {
  return Promise.resolve();
}
async function y() {
  return Promise.resolve();
}
export {
  p as recognizeFromCanvas,
  y as terminateOcr,
  x as warmupOcr
};
