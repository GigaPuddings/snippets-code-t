const l = {
  usd: "USD",
  dollar: "USD",
  dollars: "USD",
  美元: "USD",
  美金: "USD",
  cny: "CNY",
  rmb: "CNY",
  yuan: "CNY",
  人民币: "CNY",
  元: "CNY",
  eur: "EUR",
  euro: "EUR",
  欧元: "EUR",
  jpy: "JPY",
  yen: "JPY",
  日元: "JPY",
  hkd: "HKD",
  港币: "HKD",
  gbp: "GBP",
  pound: "GBP",
  英镑: "GBP"
}, I = {
  kg: { base: "g", factor: 1e3 },
  千克: { base: "g", factor: 1e3 },
  公斤: { base: "g", factor: 1e3 },
  g: { base: "g", factor: 1 },
  克: { base: "g", factor: 1 },
  斤: { base: "g", factor: 500 },
  兩: { base: "g", factor: 50 },
  两: { base: "g", factor: 50 },
  lb: { base: "g", factor: 453.59237 },
  lbs: { base: "g", factor: 453.59237 },
  磅: { base: "g", factor: 453.59237 },
  km: { base: "m", factor: 1e3 },
  千米: { base: "m", factor: 1e3 },
  公里: { base: "m", factor: 1e3 },
  m: { base: "m", factor: 1 },
  米: { base: "m", factor: 1 },
  cm: { base: "m", factor: 0.01 },
  厘米: { base: "m", factor: 0.01 },
  mm: { base: "m", factor: 1e-3 },
  毫米: { base: "m", factor: 1e-3 },
  l: { base: "ml", factor: 1e3 },
  L: { base: "ml", factor: 1e3 },
  升: { base: "ml", factor: 1e3 },
  ml: { base: "ml", factor: 1 },
  毫升: { base: "ml", factor: 1 }
}, c = (e) => Number.isInteger(e) ? String(e) : e.toLocaleString("zh-CN", { maximumFractionDigits: 6 }), n = (e, t, r, a, o = {}) => ({
  id: e,
  title: t,
  content: r,
  summarize: "tool",
  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjQ2ZTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIi8+PGxpbmUgeDE9IjgiIHkxPSI2IiB4Mj0iMTYiIHkyPSI2Ii8+PGxpbmUgeDE9IjgiIHkxPSIxMCIgeDI9IjgiIHkyPSIxMCIvPjxsaW5lIHgxPSIxMiIgeTE9IjEwIiB4Mj0iMTIiIHkyPSIxMCIvPjxsaW5lIHgxPSIxNiIgeTE9IjEwIiB4Mj0iMTYiIHkyPSIxMCIvPjxsaW5lIHgxPSI4IiB5MT0iMTQiIHgyPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iMTIiIHkxPSIxNCIgeDI9IjEyIiB5Mj0iMTQiLz48bGluZSB4MT0iMTYiIHkxPSIxNCIgeDI9IjE2IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeTE9IjE4IiB4Mj0iMTYiIHkyPSIxOCIvPjwvc3ZnPg==",
  metadata: {
    source: "quick-tools",
    query: a,
    ...o
  }
}), b = (e) => {
  const t = e.trim().replace(/（/g, "(").replace(/）/g, ")").replace(/×/g, "*").replace(/÷/g, "/").replace(/＝/g, "=").replace(/^calc(?:ulate)?\s*/i, "").replace(/^计算\s*/, "").replace(/=$/, "").trim();
  return !/[0-9]/.test(t) || !/^[\d+\-*/%().\s]+$/.test(t) || !/[+\-*/%]/.test(t) ? null : t;
}, g = (e) => {
  const t = b(e);
  if (!t) return null;
  try {
    const r = Function(`"use strict"; return (${t})`)();
    if (typeof r != "number" || !Number.isFinite(r)) return null;
    const a = c(r);
    return n("quick-tools-calc", `${t} = ${a}`, a, e, {
      tool: "calculator"
    });
  } catch {
    return null;
  }
}, M = (e) => {
  const t = e.trim().match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  if (!t) return null;
  const r = Number(t[1]), a = I[t[2]], o = I[t[3]];
  if (!Number.isFinite(r) || !a || !o || a.base !== o.base) return null;
  const s = r * a.factor / o.factor;
  return {
    amount: r,
    fromLabel: t[2],
    toLabel: t[3],
    value: s
  };
}, S = (e) => {
  const t = M(e);
  if (!t) return null;
  const r = c(t.value);
  return n(
    "quick-tools-unit",
    `${c(t.amount)} ${t.fromLabel} = ${r} ${t.toLabel}`,
    `${r} ${t.toLabel}`,
    e,
    { tool: "unit-converter" }
  );
}, m = (e) => l[e.trim().toLowerCase()] ?? l[e.trim()] ?? null, d = (e) => {
  const t = e.trim().match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  if (!t) return null;
  const r = Number(t[1]), a = m(t[2]), o = m(t[3]);
  return !Number.isFinite(r) || !a || !o || a === o ? null : { amount: r, from: a, to: o };
}, P = async (e) => {
  const t = d(e);
  if (!t) return null;
  try {
    const r = `https://api.frankfurter.dev/v2/rate/${t.from}/${t.to}`, a = await fetch(r);
    if (!a.ok) return null;
    const o = await a.json(), s = typeof o.rate == "number" ? o.rate * t.amount : void 0;
    if (typeof s != "number") return null;
    const i = o.date, u = c(s);
    return n(
      "quick-tools-currency",
      `${c(t.amount)} ${t.from} = ${u} ${t.to}`,
      `${u} ${t.to}，汇率日期 ${i ?? "latest"}`,
      e,
      {
        tool: "currency-converter",
        date: i,
        provider: "Frankfurter"
      }
    );
  } catch {
    return null;
  }
}, f = {
  pluginId: "quick-tools",
  source: "quick-tools",
  async search(e) {
    const t = [], r = S(e);
    r && t.push(r);
    const a = g(e);
    a && t.push(a);
    const o = await P(e);
    return o && t.push(o), [
      {
        source: "quick-tools",
        items: t
      }
    ];
  }
};
function p(e) {
  e.registerSearchProvider({
    source: f.source,
    search: (t) => f.search(t)
  });
}
export {
  p as activate,
  p as default
};
