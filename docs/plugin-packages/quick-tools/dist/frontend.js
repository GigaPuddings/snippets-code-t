const I = "CNY", m = {
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
}, f = {
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
}, n = (e) => Number.isInteger(e) ? String(e) : e.toLocaleString("zh-CN", { maximumFractionDigits: 6 }), u = (e, t, r, o, a = {}) => ({
  id: e,
  title: t,
  content: r,
  summarize: "tool",
  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjQ2ZTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIi8+PGxpbmUgeDE9IjgiIHkxPSI2IiB4Mj0iMTYiIHkyPSI2Ii8+PGxpbmUgeDE9IjgiIHkxPSIxMCIgeDI9IjgiIHkyPSIxMCIvPjxsaW5lIHgxPSIxMiIgeTE9IjEwIiB4Mj0iMTIiIHkyPSIxMCIvPjxsaW5lIHgxPSIxNiIgeTE9IjEwIiB4Mj0iMTYiIHkyPSIxMCIvPjxsaW5lIHgxPSI4IiB5MT0iMTQiIHgyPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iMTIiIHkxPSIxNCIgeDI9IjEyIiB5Mj0iMTQiLz48bGluZSB4MT0iMTYiIHkxPSIxNCIgeDI9IjE2IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeTE9IjE4IiB4Mj0iMTYiIHkyPSIxOCIvPjwvc3ZnPg==",
  metadata: {
    source: "quick-tools",
    query: o,
    ...a
  }
}), g = (e) => {
  const t = e.trim().replace(/（/g, "(").replace(/）/g, ")").replace(/×/g, "*").replace(/÷/g, "/").replace(/＝/g, "=").replace(/^calc(?:ulate)?\s*/i, "").replace(/^计算\s*/, "").replace(/=$/, "").trim();
  return !/[0-9]/.test(t) || !/^[\d+\-*/%().\s]+$/.test(t) || !/[+\-*/%]/.test(t) ? null : t;
}, d = (e) => {
  const t = g(e);
  if (!t) return null;
  try {
    const r = Function(`"use strict"; return (${t})`)();
    if (typeof r != "number" || !Number.isFinite(r)) return null;
    const o = n(r);
    return u("quick-tools-calc", `${t} = ${o}`, o, e, {
      tool: "calculator"
    });
  } catch {
    return null;
  }
}, M = (e) => {
  const t = e.trim().match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  if (!t) return null;
  const r = Number(t[1]), o = f[t[2]], a = f[t[3]];
  if (!Number.isFinite(r) || !o || !a || o.base !== a.base) return null;
  const c = r * o.factor / a.factor;
  return {
    amount: r,
    fromLabel: t[2],
    toLabel: t[3],
    value: c
  };
}, S = (e) => {
  const t = M(e);
  if (!t) return null;
  const r = n(t.value);
  return u(
    "quick-tools-unit",
    `${n(t.amount)} ${t.fromLabel} = ${r} ${t.toLabel}`,
    `${r} ${t.toLabel}`,
    e,
    { tool: "unit-converter" }
  );
}, i = (e) => m[e.trim().toLowerCase()] ?? m[e.trim()] ?? null, P = (e) => {
  const t = e.trim(), r = t.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i), o = t.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  if (r) {
    const a = Number(r[1]), c = i(r[2]), s = i(r[3]);
    if (Number.isFinite(a) && c && s && c !== s)
      return { amount: a, from: c, to: s };
  }
  if (o) {
    const a = Number(o[1]), c = i(o[2]);
    return !Number.isFinite(a) || !c || c === I ? null : { amount: a, from: c, to: I };
  }
  return null;
}, p = async (e) => {
  const t = P(e);
  if (!t) return null;
  try {
    const r = `https://api.frankfurter.dev/v2/rate/${t.from}/${t.to}`, o = await fetch(r);
    if (!o.ok) return null;
    const a = await o.json(), c = typeof a.rate == "number" ? a.rate * t.amount : void 0;
    if (typeof c != "number") return null;
    const s = a.date, l = n(c);
    return u(
      "quick-tools-currency",
      `${n(t.amount)} ${t.from} = ${l} ${t.to}`,
      `${l} ${t.to}，汇率日期 ${s ?? "latest"}`,
      e,
      {
        tool: "currency-converter",
        date: s,
        provider: "Frankfurter"
      }
    );
  } catch {
    return null;
  }
}, b = {
  pluginId: "quick-tools",
  source: "quick-tools",
  async search(e) {
    const t = [], r = S(e);
    r && t.push(r);
    const o = d(e);
    o && t.push(o);
    const a = await p(e);
    return a && t.push(a), [
      {
        source: "quick-tools",
        items: t
      }
    ];
  }
};
function v(e) {
  e.registerSearchProvider({
    source: b.source,
    search: (t) => b.search(t)
  });
}
export {
  v as activate,
  v as default
};
