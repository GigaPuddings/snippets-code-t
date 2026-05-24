import { k as G, r as l } from "./runtime-entry-C62Reu10.js";
import { f as r, h as y, l as b } from "./_plugin-vue_export-helper-BxX7cX_q.js";
async function P() {
  try {
    return await r("get_git_settings_command");
  } catch (e) {
    throw new Error(`获取 Git 设置失败: ${e}`);
  }
}
async function A(e) {
  try {
    await r("update_git_settings_command", { settings: e });
  } catch (t) {
    throw new Error(`更新 Git 设置失败: ${t}`);
  }
}
async function E() {
  try {
    return await r("get_git_status_command");
  } catch (e) {
    throw new Error(`获取 Git 状态失败: ${e}`);
  }
}
async function I(e = 10) {
  try {
    return await r("get_git_records_command", { limit: e });
  } catch (t) {
    throw new Error(`获取 Git 记录失败: ${t}`);
  }
}
async function j(e, t) {
  try {
    await r("restore_git_record_file_command", { commitHash: e, filePath: t });
  } catch (s) {
    throw new Error(`恢复 Git 记录文件失败: ${s}`);
  }
}
async function x() {
  try {
    return await r("git_pull_command");
  } catch (e) {
    throw new Error(`Git pull 失败: ${e}`);
  }
}
async function B(e) {
  try {
    await r("switch_git_branch_command", { branch: e });
  } catch (t) {
    throw new Error(`切换 Git 分支失败: ${t}`);
  }
}
async function H(e) {
  try {
    await r("remove_untracked_file_command", { filePath: e });
  } catch (t) {
    throw new Error(`删除未跟踪文件失败: ${t}`);
  }
}
async function U(e) {
  try {
    return await r("git_push_command", { message: e });
  } catch (t) {
    throw new Error(`Git push 失败: ${t}`);
  }
}
async function q() {
  try {
    await r("start_auto_sync_command");
  } catch (e) {
    throw new Error(`启动自动同步失败: ${e}`);
  }
}
async function J() {
  try {
    await r("stop_auto_sync_command");
  } catch (e) {
    throw new Error(`停止自动同步失败: ${e}`);
  }
}
const a = l("disabled"), i = l(null), f = l(null), u = l(null), h = l(!1);
let c = null, o = null;
const T = l(!1), k = l(0), L = l(Date.now());
let d = null, v = null, w = null, _ = null, p = null;
const C = (e) => {
  const s = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((g) => s.includes(g.toLowerCase()));
}, D = (e) => {
  const s = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return s.includes("插件 'git-sync' 未启用") || s.includes('插件 "git-sync" 未启用') || s.includes("plugin 'git-sync'") && (s.includes("disabled") || s.includes("not enabled") || s.includes("未启用"));
};
function K() {
  const e = G(() => !i.value || !i.value.is_repo ? 0 : i.value.changed_files.length), t = G(() => {
    if (k.value, !f.value) return "";
    const n = new Date(f.value), M = L.value - n.getTime(), m = Math.floor(M / 6e4), S = Math.floor(m / 60), $ = Math.floor(S / 24);
    return m < 1 ? "刚刚" : m < 60 ? `${m}分钟前` : S < 24 ? `${S}小时前` : $ < 7 ? `${$}天前` : n.toLocaleDateString("zh-CN");
  }), s = G(() => {
    const n = u.value;
    if (!n || !n.enabled)
      return "Git 同步已禁用";
    if (e.value > 0)
      return `${e.value} 个文件待同步`;
    switch (a.value) {
      case "syncing":
        return "同步中...";
      case "synced":
        return t.value || "已同步";
      case "has_changes":
        return `${e.value} 个文件待同步`;
      case "error":
        return "同步出错";
      default:
        return t.value || "已同步";
    }
  }), g = async () => {
    if (u.value && !u.value.enabled) {
      i.value = null, a.value = "disabled";
      return;
    }
    if (h.value || a.value === "syncing") {
      T.value = !0;
      return;
    }
    h.value = !0;
    try {
      const n = await E();
      i.value = n, !n.is_repo || !u.value?.enabled ? a.value = "disabled" : n.has_changes ? a.value = "has_changes" : a.value = "synced";
    } catch (n) {
      if (C(n) || D(n)) {
        i.value = null, a.value = "disabled";
        return;
      }
      b.error("[GitStatus] 获取 Git 状态失败", n), a.value = "error";
    } finally {
      h.value = !1, T.value && (T.value = !1, setTimeout(() => g(), 100));
    }
  };
  return {
    syncState: a,
    gitStatus: i,
    pendingFilesCount: e,
    lastSyncTime: f,
    gitSettings: u,
    isLoading: h,
    refreshStatus: g,
    refreshSettings: async () => {
      try {
        const n = await P();
        u.value = n, n.enabled ? (a.value === "disabled" && (a.value = "idle"), n.last_sync_time && (f.value = n.last_sync_time)) : a.value = "disabled";
      } catch (n) {
        b.error("[GitStatus] 获取 Git 设置失败", n);
      }
    },
    formattedLastSyncTime: t,
    stateDescription: s,
    // 导出内部方法供外部调用
    _setSyncState: (n) => {
      a.value = n;
    },
    _setLastSyncTime: (n) => {
      f.value = n;
    }
  };
}
function O() {
  d || (d = setInterval(() => {
    L.value = Date.now(), k.value += 1;
  }, 6e4)), y("git-pull-start", () => {
    a.value = "syncing";
  }).then((e) => {
    v = e;
  }), y("git-push-start", () => {
    a.value = "syncing";
  }).then((e) => {
    w = e;
  }), y("git-sync-complete", (e) => {
    e.payload.success ? (a.value = "syncing", e.payload.last_sync_time && (f.value = e.payload.last_sync_time)) : a.value = "error", o !== null && clearTimeout(o), o = setTimeout(() => {
      o = null, E().then((t) => {
        i.value = t, t.has_changes ? a.value = "has_changes" : a.value = "synced";
      }).catch((t) => {
        if (C(t) || D(t)) {
          i.value = null, a.value = "disabled";
          return;
        }
        b.error("[GitStatus] git-sync-complete 后刷新状态失败", t), a.value = "error";
      });
    }, 1e3);
  }).then((e) => {
    _ = e;
  });
}
function Q(e, t = 300) {
  y("git-workspace-changed", () => {
    c !== null && clearTimeout(c), c = setTimeout(async () => {
      c = null, await e();
    }, t);
  }).then((s) => {
    p = s;
  });
}
function V() {
  d && (clearInterval(d), d = null), c && (clearTimeout(c), c = null), o && (clearTimeout(o), o = null), v && (v(), v = null), w && (w(), w = null), _ && (_(), _ = null), p && (p(), p = null);
}
export {
  j as a,
  P as b,
  q as c,
  J as d,
  x as e,
  U as f,
  I as g,
  A as h,
  O as i,
  Q as j,
  V as k,
  H as r,
  B as s,
  K as u
};
