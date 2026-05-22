const T = "CNY", p = "[\\d.]+|[零〇一二两三四五六七八九十百千万]+", S = {
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
}, d = {
  t: { base: "g", factor: 1e6, label: "吨", defaultTarget: "kg" },
  ton: { base: "g", factor: 1e6, label: "吨", defaultTarget: "kg" },
  tonne: { base: "g", factor: 1e6, label: "吨", defaultTarget: "kg" },
  吨: { base: "g", factor: 1e6, label: "吨", defaultTarget: "kg" },
  公吨: { base: "g", factor: 1e6, label: "吨", defaultTarget: "kg" },
  kg: { base: "g", factor: 1e3, label: "千克", defaultTarget: "g" },
  千克: { base: "g", factor: 1e3, label: "千克", defaultTarget: "g" },
  公斤: { base: "g", factor: 1e3, label: "千克", defaultTarget: "g" },
  g: { base: "g", factor: 1, label: "克", defaultTarget: "kg" },
  克: { base: "g", factor: 1, label: "克", defaultTarget: "kg" },
  mg: { base: "g", factor: 1e-3, label: "毫克", defaultTarget: "g" },
  毫克: { base: "g", factor: 1e-3, label: "毫克", defaultTarget: "g" },
  斤: { base: "g", factor: 500, label: "斤", defaultTarget: "kg" },
  兩: { base: "g", factor: 50, label: "两", defaultTarget: "g" },
  两: { base: "g", factor: 50, label: "两", defaultTarget: "g" },
  lb: { base: "g", factor: 453.59237, label: "磅", defaultTarget: "kg" },
  lbs: { base: "g", factor: 453.59237, label: "磅", defaultTarget: "kg" },
  磅: { base: "g", factor: 453.59237, label: "磅", defaultTarget: "kg" },
  km: { base: "m", factor: 1e3, label: "千米", defaultTarget: "m" },
  千米: { base: "m", factor: 1e3, label: "千米", defaultTarget: "m" },
  公里: { base: "m", factor: 1e3, label: "千米", defaultTarget: "m" },
  m: { base: "m", factor: 1, label: "米", defaultTarget: "cm" },
  米: { base: "m", factor: 1, label: "米", defaultTarget: "cm" },
  dm: { base: "m", factor: 0.1, label: "分米", defaultTarget: "m" },
  分米: { base: "m", factor: 0.1, label: "分米", defaultTarget: "m" },
  cm: { base: "m", factor: 0.01, label: "厘米", defaultTarget: "m" },
  厘米: { base: "m", factor: 0.01, label: "厘米", defaultTarget: "m" },
  mm: { base: "m", factor: 1e-3, label: "毫米", defaultTarget: "m" },
  毫米: { base: "m", factor: 1e-3, label: "毫米", defaultTarget: "m" },
  um: { base: "m", factor: 1e-6, label: "微米", defaultTarget: "m" },
  μm: { base: "m", factor: 1e-6, label: "微米", defaultTarget: "m" },
  µm: { base: "m", factor: 1e-6, label: "微米", defaultTarget: "m" },
  微米: { base: "m", factor: 1e-6, label: "微米", defaultTarget: "m" },
  nm: { base: "m", factor: 1e-9, label: "纳米", defaultTarget: "m" },
  纳米: { base: "m", factor: 1e-9, label: "纳米", defaultTarget: "m" },
  l: { base: "ml", factor: 1e3, label: "升", defaultTarget: "ml" },
  L: { base: "ml", factor: 1e3, label: "升", defaultTarget: "ml" },
  升: { base: "ml", factor: 1e3, label: "升", defaultTarget: "ml" },
  ml: { base: "ml", factor: 1, label: "毫升", defaultTarget: "L" },
  毫升: { base: "ml", factor: 1, label: "毫升", defaultTarget: "L" },
  km2: { base: "m2", factor: 1e6, label: "平方千米", defaultTarget: "平方米" },
  "km²": { base: "m2", factor: 1e6, label: "平方千米", defaultTarget: "平方米" },
  平方千米: { base: "m2", factor: 1e6, label: "平方千米", defaultTarget: "平方米" },
  平方公里: { base: "m2", factor: 1e6, label: "平方千米", defaultTarget: "平方米" },
  m2: { base: "m2", factor: 1, label: "平方米", defaultTarget: "cm2" },
  "m²": { base: "m2", factor: 1, label: "平方米", defaultTarget: "cm2" },
  "㎡": { base: "m2", factor: 1, label: "平方米", defaultTarget: "cm2" },
  平方: { base: "m2", factor: 1, label: "平方米", defaultTarget: "cm2" },
  平方米: { base: "m2", factor: 1, label: "平方米", defaultTarget: "cm2" },
  平米: { base: "m2", factor: 1, label: "平方米", defaultTarget: "cm2" },
  cm2: { base: "m2", factor: 1e-4, label: "平方厘米", defaultTarget: "平方米" },
  "cm²": { base: "m2", factor: 1e-4, label: "平方厘米", defaultTarget: "平方米" },
  平方厘米: { base: "m2", factor: 1e-4, label: "平方厘米", defaultTarget: "平方米" },
  mm2: { base: "m2", factor: 1e-6, label: "平方毫米", defaultTarget: "平方米" },
  "mm²": { base: "m2", factor: 1e-6, label: "平方毫米", defaultTarget: "平方米" },
  平方毫米: { base: "m2", factor: 1e-6, label: "平方毫米", defaultTarget: "平方米" },
  亩: { base: "m2", factor: 666.6666666667, label: "亩", defaultTarget: "平方米" },
  公顷: { base: "m2", factor: 1e4, label: "公顷", defaultTarget: "平方米" },
  ha: { base: "m2", factor: 1e4, label: "公顷", defaultTarget: "平方米" }
}, h = (a) => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), i = Object.keys(d).sort((a, e) => e.length - a.length).map(h).join("|"), k = {
  零: 0,
  "〇": 0,
  一: 1,
  二: 2,
  两: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
}, v = {
  十: 10,
  百: 100,
  千: 1e3,
  万: 1e4
}, s = (a) => Number.isInteger(a) ? String(a) : a.toLocaleString("zh-CN", { maximumFractionDigits: 12 }), C = (a) => {
  let e = 0, t = 0, r = 0;
  for (const l of a) {
    if (l in k) {
      r = k[l];
      continue;
    }
    const o = v[l];
    if (!o) return null;
    if (o === 1e4) {
      t = (t + r) * o, e += t, t = 0, r = 0;
      continue;
    }
    t += (r || 1) * o, r = 0;
  }
  return e + t + r;
}, M = (a) => /^[\d.]+$/.test(a) ? Number(a) : C(a) ?? Number.NaN, b = (a) => d[a.trim()] ?? d[a.trim().toLowerCase()], I = (a, e, t, r, l = {}) => ({
  id: a,
  title: e,
  content: t,
  summarize: "tool",
  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjQ2ZTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIi8+PGxpbmUgeDE9IjgiIHkxPSI2IiB4Mj0iMTYiIHkyPSI2Ii8+PGxpbmUgeDE9IjgiIHkxPSIxMCIgeDI9IjgiIHkyPSIxMCIvPjxsaW5lIHgxPSIxMiIgeTE9IjEwIiB4Mj0iMTIiIHkyPSIxMCIvPjxsaW5lIHgxPSIxNiIgeTE9IjEwIiB4Mj0iMTYiIHkyPSIxMCIvPjxsaW5lIHgxPSI4IiB5MT0iMTQiIHgyPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iMTIiIHkxPSIxNCIgeDI9IjEyIiB5Mj0iMTQiLz48bGluZSB4MT0iMTYiIHkxPSIxNCIgeDI9IjE2IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeTE9IjE4IiB4Mj0iMTYiIHkyPSIxOCIvPjwvc3ZnPg==",
  metadata: {
    source: "quick-tools",
    query: r,
    ...l
  }
}), x = (a) => {
  const e = a.trim().replace(/（/g, "(").replace(/）/g, ")").replace(/×/g, "*").replace(/÷/g, "/").replace(/＝/g, "=").replace(/^calc(?:ulate)?\s*/i, "").replace(/^计算\s*/, "").replace(/=$/, "").trim();
  return !/[0-9]/.test(e) || !/^[\d+\-*/%().\s]+$/.test(e) || !/[+\-*/%]/.test(e) ? null : e;
}, $ = (a) => {
  const e = x(a);
  if (!e) return null;
  try {
    const t = Function(`"use strict"; return (${e})`)();
    if (typeof t != "number" || !Number.isFinite(t)) return null;
    const r = s(t);
    return I("quick-tools-calc", `${e} = ${r}`, r, a, {
      tool: "calculator"
    });
  } catch {
    return null;
  }
}, E = (a) => {
  const e = a.trim(), t = e.match(new RegExp(`^(${p})\\s*(${i})\\s*(?:=|to|转|换算(?:成)?|是多少|等于多少|等于)\\s*(${i})$`, "i")), r = e.match(new RegExp(`^(${p})\\s*(${i})$`, "i"));
  if (t) {
    const m = M(t[1]), u = b(t[2]), f = b(t[3]);
    if (Number.isFinite(m) && u && f && u.base === f.base) {
      const P = m * u.factor / f.factor;
      return {
        amount: m,
        fromLabel: u.label,
        toLabel: f.label,
        value: P
      };
    }
  }
  if (!r) return null;
  const l = M(r[1]), o = b(r[2]), c = o?.defaultTarget ? b(o.defaultTarget) : void 0;
  if (!Number.isFinite(l) || !o || !c || o.base !== c.base) return null;
  const n = l * o.factor / c.factor;
  return {
    amount: l,
    fromLabel: o.label,
    toLabel: c.label,
    value: n
  };
}, j = (a) => {
  const e = E(a);
  if (!e) return null;
  const t = s(e.value);
  return I(
    "quick-tools-unit",
    `${s(e.amount)} ${e.fromLabel} = ${t} ${e.toLabel}`,
    `${t} ${e.toLabel}`,
    a,
    { tool: "unit-converter" }
  );
}, g = (a) => S[a.trim().toLowerCase()] ?? S[a.trim()] ?? null, y = (a) => {
  const e = a.trim(), t = e.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i), r = e.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  if (t) {
    const l = Number(t[1]), o = g(t[2]), c = g(t[3]);
    if (Number.isFinite(l) && o && c && o !== c)
      return { amount: l, from: o, to: c };
  }
  if (r) {
    const l = Number(r[1]), o = g(r[2]);
    return !Number.isFinite(l) || !o || o === T ? null : { amount: l, from: o, to: T };
  }
  return null;
}, H = async (a) => {
  const e = y(a);
  if (!e) return null;
  try {
    const t = `https://api.frankfurter.dev/v2/rate/${e.from}/${e.to}`, r = await fetch(t);
    if (!r.ok) return null;
    const l = await r.json(), o = typeof l.rate == "number" ? l.rate * e.amount : void 0;
    if (typeof o != "number") return null;
    const c = l.date, n = s(o);
    return I(
      "quick-tools-currency",
      `${s(e.amount)} ${e.from} = ${n} ${e.to}`,
      `${n} ${e.to}，汇率日期 ${c ?? "latest"}`,
      a,
      {
        tool: "currency-converter",
        date: c,
        provider: "Frankfurter"
      }
    );
  } catch {
    return null;
  }
}, N = {
  pluginId: "quick-tools",
  source: "quick-tools",
  async search(a) {
    const e = [], t = j(a);
    t && e.push(t);
    const r = $(a);
    r && e.push(r);
    const l = await H(a);
    return l && e.push(l), [
      {
        source: "quick-tools",
        items: e
      }
    ];
  }
};
function D(a) {
  a.registerSearchProvider({
    source: N.source,
    search: (e) => N.search(e)
  });
}
export {
  D as activate,
  D as default
};
