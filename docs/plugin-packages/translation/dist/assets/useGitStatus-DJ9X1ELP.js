import { k as G, r as s } from "./runtime-entry-yPFnsQUl.js";
import { f as r, h as d, l as $ } from "./_plugin-vue_export-helper-BykmhDAa.js";
async function D() {
  try {
    return await r("get_git_settings_command");
  } catch (t) {
    throw new Error(`获取 Git 设置失败: ${t}`);
  }
}
async function z(t) {
  try {
    await r("update_git_settings_command", { settings: t });
  } catch (e) {
    throw new Error(`更新 Git 设置失败: ${e}`);
  }
}
async function E() {
  try {
    return await r("get_git_status_command");
  } catch (t) {
    throw new Error(`获取 Git 状态失败: ${t}`);
  }
}
async function A(t = 10) {
  try {
    return await r("get_git_records_command", { limit: t });
  } catch (e) {
    throw new Error(`获取 Git 记录失败: ${e}`);
  }
}
async function I(t, e) {
  try {
    await r("restore_git_record_file_command", { commitHash: t, filePath: e });
  } catch (i) {
    throw new Error(`恢复 Git 记录文件失败: ${i}`);
  }
}
async function j() {
  try {
    return await r("git_pull_command");
  } catch (t) {
    throw new Error(`Git pull 失败: ${t}`);
  }
}
async function x(t) {
  try {
    await r("switch_git_branch_command", { branch: t });
  } catch (e) {
    throw new Error(`切换 Git 分支失败: ${e}`);
  }
}
async function B(t) {
  try {
    await r("remove_untracked_file_command", { filePath: t });
  } catch (e) {
    throw new Error(`删除未跟踪文件失败: ${e}`);
  }
}
async function H(t) {
  try {
    return await r("git_push_command", { message: t });
  } catch (e) {
    throw new Error(`Git push 失败: ${e}`);
  }
}
async function U() {
  try {
    await r("start_auto_sync_command");
  } catch (t) {
    throw new Error(`启动自动同步失败: ${t}`);
  }
}
async function q() {
  try {
    await r("stop_auto_sync_command");
  } catch (t) {
    throw new Error(`停止自动同步失败: ${t}`);
  }
}
const n = s("disabled"), c = s(null), u = s(null), y = s(null), g = s(!1);
let o = null, l = null;
const T = s(!1), b = s(0), L = s(Date.now());
let f = null, v = null, _ = null, w = null, p = null;
const M = (t) => {
  const i = (t instanceof Error ? t.message : String(t)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((h) => i.includes(h.toLowerCase()));
};
function J() {
  const t = G(() => !c.value || !c.value.is_repo ? 0 : c.value.changed_files.length), e = G(() => {
    if (b.value, !u.value) return "";
    const a = new Date(u.value), C = L.value - a.getTime(), m = Math.floor(C / 6e4), S = Math.floor(m / 60), k = Math.floor(S / 24);
    return m < 1 ? "刚刚" : m < 60 ? `${m}分钟前` : S < 24 ? `${S}小时前` : k < 7 ? `${k}天前` : a.toLocaleDateString("zh-CN");
  }), i = G(() => {
    const a = y.value;
    if (!a || !a.enabled)
      return "Git 同步已禁用";
    if (t.value > 0)
      return `${t.value} 个文件待同步`;
    switch (n.value) {
      case "syncing":
        return "同步中...";
      case "synced":
        return e.value || "已同步";
      case "has_changes":
        return `${t.value} 个文件待同步`;
      case "error":
        return "同步出错";
      default:
        return e.value || "已同步";
    }
  }), h = async () => {
    if (g.value || n.value === "syncing") {
      T.value = !0;
      return;
    }
    g.value = !0;
    try {
      const a = await E();
      c.value = a, !a.is_repo || !y.value?.enabled ? n.value = "disabled" : a.has_changes ? n.value = "has_changes" : n.value = "synced";
    } catch (a) {
      if (M(a)) {
        c.value = null, n.value = "disabled";
        return;
      }
      $.error("[GitStatus] 获取 Git 状态失败", a), n.value = "error";
    } finally {
      g.value = !1, T.value && (T.value = !1, setTimeout(() => h(), 100));
    }
  };
  return {
    syncState: n,
    gitStatus: c,
    pendingFilesCount: t,
    lastSyncTime: u,
    gitSettings: y,
    isLoading: g,
    refreshStatus: h,
    refreshSettings: async () => {
      try {
        const a = await D();
        y.value = a, a.enabled ? (n.value === "disabled" && (n.value = "idle"), a.last_sync_time && (u.value = a.last_sync_time)) : n.value = "disabled";
      } catch (a) {
        $.error("[GitStatus] 获取 Git 设置失败", a);
      }
    },
    formattedLastSyncTime: e,
    stateDescription: i,
    // 导出内部方法供外部调用
    _setSyncState: (a) => {
      n.value = a;
    },
    _setLastSyncTime: (a) => {
      u.value = a;
    }
  };
}
function K() {
  f || (f = setInterval(() => {
    L.value = Date.now(), b.value += 1;
  }, 6e4)), d("git-pull-start", () => {
    n.value = "syncing";
  }).then((t) => {
    v = t;
  }), d("git-push-start", () => {
    n.value = "syncing";
  }).then((t) => {
    _ = t;
  }), d("git-sync-complete", (t) => {
    t.payload.success ? (n.value = "syncing", t.payload.last_sync_time && (u.value = t.payload.last_sync_time)) : n.value = "error", l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, E().then((e) => {
        c.value = e, e.has_changes ? n.value = "has_changes" : n.value = "synced";
      }).catch((e) => {
        $.error("[GitStatus] git-sync-complete 后刷新状态失败", e), n.value = "error";
      });
    }, 1e3);
  }).then((t) => {
    w = t;
  });
}
function O(t, e = 300) {
  d("git-workspace-changed", () => {
    o !== null && clearTimeout(o), o = setTimeout(async () => {
      o = null, await t();
    }, e);
  }).then((i) => {
    p = i;
  });
}
function Q() {
  f && (clearInterval(f), f = null), o && (clearTimeout(o), o = null), l && (clearTimeout(l), l = null), v && (v(), v = null), _ && (_(), _ = null), w && (w(), w = null), p && (p(), p = null);
}
export {
  I as a,
  D as b,
  U as c,
  q as d,
  j as e,
  H as f,
  A as g,
  z as h,
  K as i,
  O as j,
  Q as k,
  B as r,
  x as s,
  J as u
};
