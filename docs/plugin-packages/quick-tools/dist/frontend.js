const P = "CNY", T = "[\\d.]+|[零〇一二两三四五六七八九十百千万]+", p = {
  usd: { code: "USD", label: "美元" },
  dollar: { code: "USD", label: "美元" },
  dollars: { code: "USD", label: "美元" },
  美元: { code: "USD", label: "美元" },
  美金: { code: "USD", label: "美元" },
  cny: { code: "CNY", label: "人民币" },
  rmb: { code: "CNY", label: "人民币" },
  yuan: { code: "CNY", label: "元" },
  人民币: { code: "CNY", label: "人民币" },
  元: { code: "CNY", label: "元" },
  eur: { code: "EUR", label: "欧元" },
  euro: { code: "EUR", label: "欧元" },
  欧元: { code: "EUR", label: "欧元" },
  jpy: { code: "JPY", label: "日元" },
  yen: { code: "JPY", label: "日元" },
  日元: { code: "JPY", label: "日元" },
  hkd: { code: "HKD", label: "港币" },
  港币: { code: "HKD", label: "港币" },
  gbp: { code: "GBP", label: "英镑" },
  pound: { code: "GBP", label: "英镑" },
  英镑: { code: "GBP", label: "英镑" }
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
}, h = (a) => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), g = Object.keys(d).sort((a, e) => e.length - a.length).map(h).join("|"), S = {
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
  let e = 0, t = 0, l = 0;
  for (const r of a) {
    if (r in S) {
      l = S[r];
      continue;
    }
    const o = v[r];
    if (!o) return null;
    if (o === 1e4) {
      t = (t + l) * o, e += t, t = 0, l = 0;
      continue;
    }
    t += (l || 1) * o, l = 0;
  }
  return e + t + l;
}, k = (a) => /^[\d.]+$/.test(a) ? Number(a) : C(a) ?? Number.NaN, f = (a) => d[a.trim()] ?? d[a.trim().toLowerCase()], I = (a, e, t, l, r = {}) => ({
  id: a,
  title: e,
  content: t,
  summarize: "tool",
  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjQ2ZTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIi8+PGxpbmUgeDE9IjgiIHkxPSI2IiB4Mj0iMTYiIHkyPSI2Ii8+PGxpbmUgeDE9IjgiIHkxPSIxMCIgeDI9IjgiIHkyPSIxMCIvPjxsaW5lIHgxPSIxMiIgeTE9IjEwIiB4Mj0iMTIiIHkyPSIxMCIvPjxsaW5lIHgxPSIxNiIgeTE9IjEwIiB4Mj0iMTYiIHkyPSIxMCIvPjxsaW5lIHgxPSI4IiB5MT0iMTQiIHgyPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iMTIiIHkxPSIxNCIgeDI9IjEyIiB5Mj0iMTQiLz48bGluZSB4MT0iMTYiIHkxPSIxNCIgeDI9IjE2IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeTE9IjE4IiB4Mj0iMTYiIHkyPSIxOCIvPjwvc3ZnPg==",
  metadata: {
    source: "quick-tools",
    query: l,
    ...r
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
    const l = s(t);
    return I("quick-tools-calc", `${e} = ${l}`, l, a, {
      tool: "calculator"
    });
  } catch {
    return null;
  }
}, E = (a) => {
  const e = a.trim(), t = e.match(
    new RegExp(
      `^(${T})\\s*(${g})\\s*(?:=|to|转|换算(?:成)?|是多少|等于多少|等于)?\\s*(${g})$`,
      "i"
    )
  ), l = e.match(new RegExp(`^(${T})\\s*(${g})$`, "i"));
  if (t) {
    const i = k(t[1]), u = f(t[2]), b = f(t[3]);
    if (Number.isFinite(i) && u && b && u.base === b.base) {
      const N = i * u.factor / b.factor;
      return {
        amount: i,
        fromLabel: u.label,
        toLabel: b.label,
        value: N
      };
    }
  }
  if (!l) return null;
  const r = k(l[1]), o = f(l[2]), c = o?.defaultTarget ? f(o.defaultTarget) : void 0;
  if (!Number.isFinite(r) || !o || !c || o.base !== c.base) return null;
  const n = r * o.factor / c.factor;
  return {
    amount: r,
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
}, m = (a) => p[a.trim().toLowerCase()] ?? p[a.trim()] ?? null, y = (a) => {
  const e = a.trim(), t = e.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i), l = e.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  if (t) {
    const r = Number(t[1]), o = m(t[2]), c = m(t[3]);
    if (Number.isFinite(r) && o && c && o.code !== c.code)
      return { amount: r, from: o, to: c };
  }
  if (l) {
    const r = Number(l[1]), o = m(l[2]), c = m(P);
    return !Number.isFinite(r) || !o || !c || o.code === c.code ? null : { amount: r, from: o, to: c };
  }
  return null;
}, H = async (a) => {
  const e = y(a);
  if (!e) return null;
  try {
    const t = `https://api.frankfurter.dev/v2/rate/${e.from.code}/${e.to.code}`, l = await fetch(t);
    if (!l.ok) return null;
    const r = await l.json(), o = typeof r.rate == "number" ? r.rate * e.amount : void 0;
    if (typeof o != "number") return null;
    const c = r.date, n = s(o);
    return I(
      "quick-tools-currency",
      `${s(e.amount)} ${e.from.label} = ${n} ${e.to.label}`,
      `${n} ${e.to.label}，汇率日期 ${c ?? "latest"}`,
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
}, M = {
  pluginId: "quick-tools",
  source: "quick-tools",
  async search(a) {
    const e = [], t = j(a);
    t && e.push(t);
    const l = $(a);
    l && e.push(l);
    const r = await H(a);
    return r && e.push(r), [
      {
        source: "quick-tools",
        items: e
      }
    ];
  }
};
function D(a) {
  a.registerSearchProvider({
    source: M.source,
    search: (e) => M.search(e)
  });
}
export {
  D as activate,
  D as default
};
