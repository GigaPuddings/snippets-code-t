import { k as S, r as s } from "./runtime-entry-CxfepRbR.js";
import { f as i, h as g, l as G } from "./_plugin-vue_export-helper-Kpx6kpKo.js";
async function C() {
  try {
    return await i("get_git_settings_command");
  } catch (t) {
    throw new Error(`获取 Git 设置失败: ${t}`);
  }
}
async function W(t) {
  try {
    await i("update_git_settings_command", { settings: t });
  } catch (a) {
    throw new Error(`更新 Git 设置失败: ${a}`);
  }
}
async function L() {
  try {
    return await i("get_git_status_command");
  } catch (t) {
    throw new Error(`获取 Git 状态失败: ${t}`);
  }
}
async function x() {
  try {
    return await i("git_pull_command");
  } catch (t) {
    throw new Error(`Git pull 失败: ${t}`);
  }
}
async function z(t) {
  try {
    return await i("git_push_command", { message: t });
  } catch (a) {
    throw new Error(`Git push 失败: ${a}`);
  }
}
async function F() {
  try {
    await i("start_auto_sync_command");
  } catch (t) {
    throw new Error(`启动自动同步失败: ${t}`);
  }
}
async function H() {
  try {
    await i("stop_auto_sync_command");
  } catch (t) {
    throw new Error(`停止自动同步失败: ${t}`);
  }
}
const n = s("disabled"), u = s(null), c = s(null), y = s(null), h = s(!1);
let r = null, l = null;
const T = s(!1), k = s(0), D = s(Date.now());
let o = null, m = null, v = null, d = null, _ = null;
function R() {
  const t = S(() => !u.value || !u.value.is_repo ? 0 : u.value.changed_files.length), a = S(() => {
    if (k.value, !c.value) return "";
    const e = new Date(c.value), E = D.value - e.getTime(), f = Math.floor(E / 6e4), w = Math.floor(f / 60), b = Math.floor(w / 24);
    return f < 1 ? "刚刚" : f < 60 ? `${f}分钟前` : w < 24 ? `${w}小时前` : b < 7 ? `${b}天前` : e.toLocaleDateString("zh-CN");
  }), p = S(() => {
    const e = y.value;
    if (!e || !e.enabled)
      return "Git 同步已禁用";
    if (t.value > 0)
      return `${t.value} 个文件待同步`;
    switch (n.value) {
      case "syncing":
        return "同步中...";
      case "synced":
        return a.value || "已同步";
      case "has_changes":
        return `${t.value} 个文件待同步`;
      case "error":
        return "同步出错";
      default:
        return a.value || "已同步";
    }
  }), $ = async () => {
    if (h.value || n.value === "syncing") {
      T.value = !0;
      return;
    }
    h.value = !0;
    try {
      const e = await L();
      u.value = e, !e.is_repo || !y.value?.enabled ? n.value = "disabled" : e.has_changes ? n.value = "has_changes" : n.value = "synced";
    } catch (e) {
      G.error("[GitStatus] 获取 Git 状态失败", e), n.value = "error";
    } finally {
      h.value = !1, T.value && (T.value = !1, setTimeout(() => $(), 100));
    }
  };
  return {
    syncState: n,
    gitStatus: u,
    pendingFilesCount: t,
    lastSyncTime: c,
    gitSettings: y,
    isLoading: h,
    refreshStatus: $,
    refreshSettings: async () => {
      try {
        const e = await C();
        y.value = e, e.enabled ? (n.value === "disabled" && (n.value = "idle"), e.last_sync_time && (c.value = e.last_sync_time)) : n.value = "disabled";
      } catch (e) {
        G.error("[GitStatus] 获取 Git 设置失败", e);
      }
    },
    formattedLastSyncTime: a,
    stateDescription: p,
    // 导出内部方法供外部调用
    _setSyncState: (e) => {
      n.value = e;
    },
    _setLastSyncTime: (e) => {
      c.value = e;
    }
  };
}
function j() {
  o || (o = setInterval(() => {
    D.value = Date.now(), k.value += 1;
  }, 6e4)), g("git-pull-start", () => {
    n.value = "syncing";
  }).then((t) => {
    m = t;
  }), g("git-push-start", () => {
    n.value = "syncing";
  }).then((t) => {
    v = t;
  }), g("git-sync-complete", (t) => {
    t.payload.success ? (n.value = "syncing", t.payload.last_sync_time && (c.value = t.payload.last_sync_time)) : n.value = "error", l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, L().then((a) => {
        u.value = a, a.has_changes ? n.value = "has_changes" : n.value = "synced";
      }).catch((a) => {
        G.error("[GitStatus] git-sync-complete 后刷新状态失败", a), n.value = "error";
      });
    }, 1e3);
  }).then((t) => {
    d = t;
  });
}
function q(t, a = 300) {
  g("git-workspace-changed", () => {
    r !== null && clearTimeout(r), r = setTimeout(async () => {
      r = null, await t();
    }, a);
  }).then((p) => {
    _ = p;
  });
}
function B() {
  o && (clearInterval(o), o = null), r && (clearTimeout(r), r = null), l && (clearTimeout(l), l = null), m && (m(), m = null), v && (v(), v = null), d && (d(), d = null), _ && (_(), _ = null);
}
export {
  H as a,
  x as b,
  z as c,
  W as d,
  j as e,
  B as f,
  C as g,
  q as i,
  F as s,
  R as u
};
