import { k as G, r as s } from "./runtime-entry-DtonpMUQ.js";
import { f as r, h as d, l as $ } from "./_plugin-vue_export-helper-CKv_N83a.js";
async function D() {
  try {
    return await r("get_git_settings_command");
  } catch (t) {
    throw new Error(`获取 Git 设置失败: ${t}`);
  }
}
async function F(t) {
  try {
    await r("update_git_settings_command", { settings: t });
  } catch (a) {
    throw new Error(`更新 Git 设置失败: ${a}`);
  }
}
async function b() {
  try {
    return await r("get_git_status_command");
  } catch (t) {
    throw new Error(`获取 Git 状态失败: ${t}`);
  }
}
async function I() {
  try {
    return await r("git_pull_command");
  } catch (t) {
    throw new Error(`Git pull 失败: ${t}`);
  }
}
async function x(t) {
  try {
    await r("switch_git_branch_command", { branch: t });
  } catch (a) {
    throw new Error(`切换 Git 分支失败: ${a}`);
  }
}
async function B(t) {
  try {
    await r("remove_untracked_file_command", { filePath: t });
  } catch (a) {
    throw new Error(`删除未跟踪文件失败: ${a}`);
  }
}
async function H(t) {
  try {
    return await r("git_push_command", { message: t });
  } catch (a) {
    throw new Error(`Git push 失败: ${a}`);
  }
}
async function R() {
  try {
    await r("start_auto_sync_command");
  } catch (t) {
    throw new Error(`启动自动同步失败: ${t}`);
  }
}
async function U() {
  try {
    await r("stop_auto_sync_command");
  } catch (t) {
    throw new Error(`停止自动同步失败: ${t}`);
  }
}
const n = s("disabled"), i = s(null), o = s(null), y = s(null), g = s(!1);
let l = null, c = null;
const T = s(!1), E = s(0), L = s(Date.now());
let f = null, v = null, w = null, _ = null, p = null;
const M = (t) => {
  const u = (t instanceof Error ? t.message : String(t)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((h) => u.includes(h.toLowerCase()));
};
function j() {
  const t = G(() => !i.value || !i.value.is_repo ? 0 : i.value.changed_files.length), a = G(() => {
    if (E.value, !o.value) return "";
    const e = new Date(o.value), C = L.value - e.getTime(), m = Math.floor(C / 6e4), S = Math.floor(m / 60), k = Math.floor(S / 24);
    return m < 1 ? "刚刚" : m < 60 ? `${m}分钟前` : S < 24 ? `${S}小时前` : k < 7 ? `${k}天前` : e.toLocaleDateString("zh-CN");
  }), u = G(() => {
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
  }), h = async () => {
    if (g.value || n.value === "syncing") {
      T.value = !0;
      return;
    }
    g.value = !0;
    try {
      const e = await b();
      i.value = e, !e.is_repo || !y.value?.enabled ? n.value = "disabled" : e.has_changes ? n.value = "has_changes" : n.value = "synced";
    } catch (e) {
      if (M(e)) {
        i.value = null, n.value = "disabled";
        return;
      }
      $.error("[GitStatus] 获取 Git 状态失败", e), n.value = "error";
    } finally {
      g.value = !1, T.value && (T.value = !1, setTimeout(() => h(), 100));
    }
  };
  return {
    syncState: n,
    gitStatus: i,
    pendingFilesCount: t,
    lastSyncTime: o,
    gitSettings: y,
    isLoading: g,
    refreshStatus: h,
    refreshSettings: async () => {
      try {
        const e = await D();
        y.value = e, e.enabled ? (n.value === "disabled" && (n.value = "idle"), e.last_sync_time && (o.value = e.last_sync_time)) : n.value = "disabled";
      } catch (e) {
        $.error("[GitStatus] 获取 Git 设置失败", e);
      }
    },
    formattedLastSyncTime: a,
    stateDescription: u,
    // 导出内部方法供外部调用
    _setSyncState: (e) => {
      n.value = e;
    },
    _setLastSyncTime: (e) => {
      o.value = e;
    }
  };
}
function q() {
  f || (f = setInterval(() => {
    L.value = Date.now(), E.value += 1;
  }, 6e4)), d("git-pull-start", () => {
    n.value = "syncing";
  }).then((t) => {
    v = t;
  }), d("git-push-start", () => {
    n.value = "syncing";
  }).then((t) => {
    w = t;
  }), d("git-sync-complete", (t) => {
    t.payload.success ? (n.value = "syncing", t.payload.last_sync_time && (o.value = t.payload.last_sync_time)) : n.value = "error", c !== null && clearTimeout(c), c = setTimeout(() => {
      c = null, b().then((a) => {
        i.value = a, a.has_changes ? n.value = "has_changes" : n.value = "synced";
      }).catch((a) => {
        $.error("[GitStatus] git-sync-complete 后刷新状态失败", a), n.value = "error";
      });
    }, 1e3);
  }).then((t) => {
    _ = t;
  });
}
function J(t, a = 300) {
  d("git-workspace-changed", () => {
    l !== null && clearTimeout(l), l = setTimeout(async () => {
      l = null, await t();
    }, a);
  }).then((u) => {
    p = u;
  });
}
function K() {
  f && (clearInterval(f), f = null), l && (clearTimeout(l), l = null), c && (clearTimeout(c), c = null), v && (v(), v = null), w && (w(), w = null), _ && (_(), _ = null), p && (p(), p = null);
}
export {
  R as a,
  U as b,
  I as c,
  H as d,
  F as e,
  q as f,
  D as g,
  K as h,
  J as i,
  B as r,
  x as s,
  j as u
};
