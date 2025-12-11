export default {
  // 通用
  common: {
    confirm: '确定',
    cancel: '取消',
    on: '开启',
    off: '关闭',
    tip: '提示',
    warning: '警告',
    success: '成功',
    failed: '失败',
    loading: '加载中...',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    add: '添加',
    search: '搜索',
    reset: '重置',
    close: '关闭',
    prev: '上一步',
    next: '下一步',
    start: '开始使用',
    browse: '浏览',
    quickStart: '快速开始'
  },

  // 设置向导
  setup: {
    welcome: '欢迎',
    dataLocation: '数据位置',
    complete: '完成',
    welcomeTitle: '欢迎使用 Snippets Code',
    welcomeDesc: '高效的代码片段管理工具，助您快速存储和检索代码。',
    selectLanguage: '选择语言',
    dataLocationTitle: '数据存储位置',
    dataLocationDesc: '选择数据存储位置，包括数据库和配置文件',
    defaultLocation: '默认位置（推荐）',
    customLocation: '自定义位置',
    customLocationDesc: '选择一个自定义文件夹来存储您的数据',
    pathTip: '建议选择非系统盘位置，以便数据备份和迁移',
    selectDir: '请选择数据存储目录',
    selectDirTitle: '选择目录',
    completeTitle: '设置完成',
    completeDesc: '已完成初始设置，现在可以开始使用了！',
    dataPath: '数据位置',
    setupComplete: '设置完成！',
    setupFailed: '设置失败'
  },

  // 通用设置
  settings: {
    general: '通用设置',
    theme: '基础颜色',
    themeDesc: '设置 Snippets Code 的基本颜色',
    themeLight: '浅色',
    themeDark: '深色',
    themeAuto: '跟随系统',
    language: '界面语言',
    languageDesc: '设置应用显示语言',
    languageChanged: '语言已切换',
    autoStart: '开机自启',
    autoStartDesc: '设置开机自动启动',
    autoStartEnabled: '自启动已开启',
    autoStartDisabled: '自启动已关闭',
    resetSoftware: '重置软件',
    resetSoftwareDesc: '重置软件将清除本地应用列表、书签数据、缓存图标等信息，需要重新索引',
    resetSoftwareTitle: '重置软件',
    resetSelectContent: '请选择要重置的内容：',
    resetAll: '重置全部',
    resetApps: '重置应用数据',
    resetBookmarks: '重置书签数据',
    resetAppsSuccess: '重置应用列表成功',
    resetBookmarksSuccess: '重置书签数据成功',
    resetAllSuccess: '重置软件成功',
    resetFailed: '重置失败',
    autoUpdateCheck: '自动检查更新',
    autoUpdateCheckDesc: '设置应用启动是否自动检查更新',
    autoUpdateEnabled: '已开启自动检查更新',
    autoUpdateDisabled: '已关闭自动检查更新',
    autoHideOnBlur: '失焦自动隐藏',
    autoHideOnBlurDesc: '设置搜索窗口在失去焦点时是否自动隐藏',
    autoHideEnabled: '已开启自动失焦隐藏',
    autoHideDisabled: '已关闭自动失焦隐藏',
    exitApp: '退出应用',
    exitAppDesc: '是否退出应用',
    exitAppConfirm: '确定要退出应用吗？',
    exitAppSuccess: '退出应用成功',
    settingFailed: '设置失败'
  },

  // 语言选项
  languages: {
    'zh-CN': '简体中文',
    'en-US': 'English'
  },

  // 侧边栏导航
  nav: {
    quickActions: '快捷操作',
    allSnippets: '所有片段',
    uncategorized: '未分类',
    folders: '文件夹',
    noFolders: '暂无文件夹'
  },

  // 快捷键设置
  shortcut: {
    title: '快捷键设置',
    searchHotkey: '工具条快捷键：',
    searchHotkeyDesc: '设置工具条唤醒快捷键',
    configHotkey: '主窗口快捷键：',
    configHotkeyDesc: '设置主窗口唤醒快捷键',
    translateHotkey: '翻译窗口快捷键：',
    translateHotkeyDesc: '设置翻译窗口唤醒快捷键',
    selectionTranslateHotkey: '划词翻译快捷键：',
    selectionTranslateHotkeyDesc: '设置划词翻译功能快捷键',
    screenshotHotkey: '截图快捷键：',
    screenshotHotkeyDesc: '设置截图功能快捷键',
    darkModeHotkey: '系统主题快捷键：',
    darkModeHotkeyDesc: '设置系统主题窗口快捷键',
    register: '注册',
    pressToSet: '按下按键设置快捷键',
    registerSuccess: '快捷键注册成功',
    registerFailed: '快捷键注册失败'
  },

  // 数据管理
  dataManager: {
    title: '数据管理',
    snippetDir: '片段目录：',
    snippetDirDesc: '设置片段存储位置',
    changePath: '修改路径',
    backup: '片段数据备份：',
    backupDesc: '设置片段数据备份位置',
    backupBtn: '数据备份',
    restore: '数据恢复：',
    restoreDesc: '恢复片段数据',
    restoreBtn: '数据恢复',
    backupFormat: {
      date: '年月日',
      time: '时分秒',
      datetime: '年月日时分秒'
    },
    selectFormat: '请选择备份文件名格式',
    backupSuccess: '数据备份成功',
    backupFailed: '备份失败',
    restoreWarning: '恢复数据将会替换当前数据库，并且需要重启应用。是否继续？',
    restoreSuccess: '数据恢复成功，应用即将重启',
    pathWarning: '修改数据库存储位置将会迁移现有数据并重启应用，是否继续？',
    pathSuccess: '数据库路径修改成功，应用将重启以应用更改',
    warning: '警告'
  },

  // 本地应用/书签
  local: {
    apps: '本地应用',
    bookmarks: '浏览器书签',
    total: '共',
    items: '项',
    showing: '显示',
    search: '搜索...',
    edit: '编辑',
    done: '完成',
    add: '新增',
    delete: '删除',
    noData: '暂无{type}数据',
    noMatch: '没有找到匹配的结果',
    addItem: '添加{type}',
    usedTimes: '使用 {count} 次',
    loadFailed: '加载{type}失败',
    openFailed: '打开{type}失败',
    updateSuccess: '{type}更新成功',
    addSuccess: '{type}添加成功',
    deleteSuccess: '{type}删除成功',
    deleteFailed: '删除失败',
    operationFailed: '操作失败',
    deleteConfirm: '确定要删除"{name}"吗？',
    deleteTitle: '删除确认'
  },

  // 编辑对话框
  editDialog: {
    editApp: '编辑应用',
    editBookmark: '编辑书签',
    addApp: '新增应用',
    addBookmark: '新增书签',
    name: '名称',
    namePlaceholder: '请输入{type}名称',
    path: '路径',
    url: '网址',
    pathPlaceholder: '请输入应用路径',
    urlPlaceholder: '请输入书签网址',
    icon: '图标',
    noIcon: '暂无图标',
    extractIcon: '提取图标',
    fetchIcon: '获取网站图标',
    extractSuccess: '提取图标成功',
    extractFailed: '提取图标失败',
    fetchSuccess: '获取图标成功',
    fetchFailed: '获取图标失败',
    noIconFound: '未能提取到图标',
    selectFile: '选择文件失败',
    enterPathFirst: '请先输入应用路径',
    enterUrlFirst: '请先输入网址',
    executableFiles: '可执行文件',
    nameRequired: '请输入名称',
    nameLength: '名称长度在 1 到 100 个字符',
    pathRequired: '请输入路径',
    urlRequired: '请输入网址',
    iconSourceAuto: '自动获取',
    iconSourceAutoDesc: '自动尝试多个图标源',
    iconSourceGoogleDesc: '使用 Google Favicon 服务',
    iconSourceYandexDesc: '使用 Yandex Favicon 服务',
    iconSourceWebsite: '网站直接获取',
    iconSourceWebsiteDesc: '直接从网站获取图标'
  },

  // 提醒事项
  alarm: {
    noAlarms: '暂无设定提醒事项',
    noAlarmsDesc: '点击右下角的"＋"以添加新提醒事项',
    addAlarm: '新增提醒',
    editAlarm: '编辑提醒',
    title: '提醒标题',
    alarmType: '提醒类型',
    daily: '每天',
    weekly: '每周',
    specificDate: '指定日期',
    repeatReminder: '重复提醒',
    pauseTime: '暂停时间',
    selectDates: '选择多个日期',
    dailyRepeat: '每日重复',
    totalDates: '共 {count} 个日期',
    notSet: '未设置',
    minutes: '分钟',
    saveFailed: '保存失败',
    titleRequired: '请输入提醒标题',
    hourError: '小时格式错误 (0-23)',
    minuteError: '分钟格式错误 (0-59)',
    weekdayRequired: '每周模式请至少选择一个星期',
    dateRequired: '请选择具体日期',
    dateExpired: '日期 {date} 的时间不能早于当前时间',
    weekdays: {
      mon: '一',
      tue: '二',
      wed: '三',
      thu: '四',
      fri: '五',
      sat: '六',
      sun: '日'
    },
    deleteConfirm: '确定要删除提醒事项「{name}」吗？',
    deleteSuccess: '提醒事项已删除'
  },

  // 分类/片段
  category: {
    newFolder: '新建文件夹',
    rename: '重命名',
    delete: '删除',
    noContent: '暂无片段内容',
    folders: '文件夹',
    newSnippet: '新建片段',
    searchPlaceholder: '搜索...',
    ascending: '升序',
    descending: '降序',
    saveFailed: '保存失败，请重试',
    loadFailed: '获取内容失败，请重试',
    deleteConfirm: '确定要删除文件夹「{name}」吗？其中的片段也会被删除。',
    deleteSuccess: '文件夹已删除'
  },

  // 搜索引擎设置
  retrieve: {
    title: '浏览器搜索设置',
    resetDefault: '重置默认搜索引擎',
    addNew: '添加新的搜索引擎',
    noEngines: '暂无搜索引擎配置',
    name: '名称',
    keyword: '快捷字词',
    urlFormat: '网址格式（用"%s"代替搜索字词）',
    icon: '搜索引擎图标',
    default: '默认',
    off: '关闭',
    defaultConfig: '默认配置',
    deleteEngine: '删除搜索引擎',
    invalidConfig: '存在无效的搜索引擎配置，请完善信息',
    configUpdated: '搜索引擎配置已更新',
    resetSuccess: '已重置为默认搜索引擎',
    resetFailed: '重置搜索引擎失败',
    loadFailed: '获取搜索引擎配置失败',
    updateFailed: '更新搜索引擎配置失败',
    addSuccess: '已添加新搜索引擎，请完善信息',
    deleteSuccess: '已删除搜索引擎',
    deleteConfirm: '确定要删除搜索引擎「{name}」吗？',
    defaultUpdated: '已更新默认搜索引擎'
  },

  // GitHub 同步
  github: {
    title: 'GitHub 数据同步',
    subtitle: '配置 GitHub 数据同步，保护您的数据安全',
    connectGithub: '连接 GitHub',
    token: 'GitHub Personal Access Token',
    tokenPlaceholder: '请输入您的 GitHub Token',
    repoName: '仓库名称（可选）',
    repoPlaceholder: '默认：snippets-code-backup',
    howToGetToken: '如何获取 Token？',
    viewTutorial: '查看教程',
    connect: '连接',
    connecting: '验证中...',
    accountInfo: '账号信息',
    logout: '登出',
    syncStatus: '同步状态',
    lastSyncTime: '上次同步时间',
    neverSynced: '从未同步',
    repoAddress: '仓库地址',
    dataSync: '数据同步',
    uploadToGithub: '上传到 GitHub',
    uploading: '同步中...',
    restoreFromGithub: '从 GitHub 恢复',
    restoring: '恢复中...',
    uploadingData: '正在上传数据...',
    restoringData: '正在恢复数据...',
    restoreWarning: '恢复数据将覆盖本地所有数据，请谨慎操作！',
    autoSync: '自动同步',
    autoSyncOnExit: '退出时自动备份',
    autoSyncOnExitDesc: '关闭应用时自动上传数据到 GitHub',
    autoRestoreOnStart: '启动时自动恢复',
    autoRestoreOnStartDesc: '应用启动时检测云端更新并提示恢复',
    loading: '正在加载...',
    connectSuccess: '连接成功！',
    connectFailed: '验证失败，请检查 Token 是否正确',
    logoutConfirm: '登出后将无法自动同步数据，确定要登出吗？',
    logoutTitle: '确认登出',
    logoutSuccess: '已登出',
    syncSuccess: '同步成功！数据已上传到 GitHub',
    syncFailed: '同步失败',
    restoreConfirm: '此操作将覆盖本地所有数据，无法恢复。确定要继续吗？',
    restoreTitle: '警告',
    restoreSuccess: '恢复成功！应用即将重启...',
    restoreFailed: '恢复失败',
    settingSaved: '设置已保存',
    settingFailed: '保存失败',
    pleaseInputToken: '请输入 GitHub Token'
  },

  // 主题切换
  darkMode: {
    title: '系统主题',
    // 主题模式（三选一）
    themeMode: '主题模式',
    lightMode: '浅色',
    lightModeDesc: '始终使用浅色主题',
    darkMode: '深色',
    darkModeDesc: '始终使用深色主题',
    scheduleMode: '定时',
    scheduleModeDesc: '按时间自动切换',
    // 当前状态
    currentTheme: '当前系统主题：',
    darkTheme: '深色模式',
    lightTheme: '浅色模式',
    schedulerStatus: '调度器状态：',
    running: '运行中',
    stopped: '已停止',
    manualToggle: '手动切换主题',
    // 定时类型
    scheduleType: '定时方式',
    sunBased: '日出日落',
    sunBasedDesc: '根据您的位置自动计算',
    customSchedule: '自定义时间',
    customScheduleDesc: '手动设置切换时间',
    // 位置信息
    locationInfo: '位置信息',
    gettingLocation: '获取位置信息中...',
    location: '位置：',
    timezone: '时区：',
    coordinates: '坐标：',
    refreshLocation: '刷新位置',
    refreshing: '获取中...',
    // 日出日落
    sunTimes: '日出日落时间',
    sunrise: '日出时间',
    sunset: '日落时间',
    currentPeriod: '当前时段：',
    daytime: '白天（浅色模式）',
    nighttime: '夜晚（深色模式）',
    // 自定义时间
    customTime: '自定义时间',
    lightModeStart: '浅色模式开始时间',
    darkModeStart: '深色模式开始时间',
    // 提示消息
    loadConfigFailed: '加载配置失败',
    saveConfigFailed: '保存配置失败',
    getLocationFailed: '获取位置信息失败',
    toggleFailed: '切换主题失败',
    switchedTo: '已手动切换到{theme}模式',
    autoRestoreNote: '。定时切换将在下一次计划任务时恢复'
  },

  // 加载页面
  loading: {
    title: '应用程序正在加载中'
  },

  // 通知提醒
  notification: {
    title: '代办提醒',
    confirm: '确认',
    remindLater: '{minutes}分钟后提醒'
  },

  // 扫描进度
  progress: {
    title: '正在索引数据',
    completed: '索引完成',
    preparing: '准备中...',
    scanningApps: '正在扫描本地应用',
    scanningBookmarks: '正在扫描浏览器书签',
    loadingIcons: '正在加载图标',
    savingToDatabase: '正在保存到数据库',
    scanComplete: '扫描完成：{apps} 个应用，{bookmarks} 个书签'
  },

  // 贴图窗口
  pin: {
    togglePin: '取消置顶',
    pinWindow: '置顶窗口',
    resetZoom: '重置缩放',
    copyImage: '复制图片',
    saveImage: '保存图片',
    closePin: '关闭贴图'
  },

  // 更新窗口
  update: {
    title: '软件更新',
    currentVersion: '当前版本',
    newVersion: '最新版本',
    releaseDate: '发布时间：',
    releaseNotes: '更新内容',
    gettingData: '获取数据中...',
    startDownload: '开始下载',
    downloading: '正在下载',
    downloadComplete: '下载完成，正在启动安装程序...',
    installing: '安装中...',
    installSuccess: '安装成功，准备重启应用...',
    installFailed: '安装失败',
    downloadFailed: '下载失败',
    preparing: '准备下载...',
    updateLater: '稍后更新',
    updateNow: '立即更新',
    retryInstall: '重试安装',
    close: '关闭'
  },

  // 翻译窗口
  translate: {
    title: '翻译',
    inputPlaceholder: '请输入要翻译的文本',
    speakText: '朗读文本',
    deleteText: '删除文本',
    copyResult: '复制结果',
    translateBack: '翻译回来',
    resultPlaceholder: '翻译结果将显示在这里',
    copiedToClipboard: '已复制到剪贴板',
    tooManyRequests: '请求过于频繁，请稍后再试',
    timeout: '翻译超时，请检查网络连接',
    networkError: '网络连接失败，请检查网络',
    translateFailed: '翻译失败，请重试',
    bingTranslate: '必应翻译',
    googleTranslate: '谷歌翻译',
    languages: {
      auto: '自动检测',
      zh: '简体中文',
      zh_tw: '繁体中文',
      en: '英语',
      ja: '日语',
      ko: '韩语',
      fr: '法语',
      de: '德语',
      ru: '俄语',
      es: '西班牙语',
      pt_pt: '葡萄牙语',
      pt_br: '巴西葡萄牙语',
      vi: '越南语',
      id: '印尼语',
      th: '泰语',
      ar: '阿拉伯语'
    }
  },

  // 截图工具栏
  screenshot: {
    select: '选择',
    rectangle: '矩形',
    ellipse: '椭圆',
    arrow: '箭头',
    pen: '画笔',
    mosaic: '马赛克',
    text: '文字',
    undo: '撤销',
    redo: '重做',
    pin: '贴图',
    copy: '复制',
    save: '保存',
    cancel: '取消',
    confirm: '确定',
    colorPicker: '取色器',
    delete: '删除'
  },

  // 404页面
  errorPage: {
    notFound: '页面不存在',
    backHome: '返回首页'
  },

  // 内容项目右键菜单
  contentItem: {
    changeCategory: '修改分类',
    rename: '重命名',
    delete: '删除',
    uncategorized: '未分类',
    updateFailed: '更新分类失败',
    deleteConfirm: '确定要删除片段「{name}」吗？',
    deleteSuccess: '片段已删除'
  },

  // 搜索结果
  searchResult: {
    all: '全部',
    apps: '应用',
    bookmarks: '书签',
    backToSearch: '返回搜索'
  },

  // 标题栏
  titlebar: {
    userCenter: '个人中心',
    checkUpdate: '检查更新',
    pinWindow: '置顶窗口',
    unpinWindow: '取消置顶',
    settings: '设置',
    minimize: '最小化窗口',
    maximize: '最大化窗口',
    restore: '还原窗口',
    close: '关闭窗口'
  },

  // 代码编辑器
  codeEditor: {
    lines: '行数',
    chars: '字数',
    language: '语言'
  },

  // 截图工具
  screenshotTool: {
    loading: '正在加载截图...',
    dragToSelect: '拖拽鼠标选择截图区域',
    pressEscToClose: '按ESC键关闭',
    colorPicker: '取色器'
  },

  // 片段预览
  snippetPreview: {
    untitled: '未命名片段',
    pleaseInput: '请输入',
    copyAndClose: '复制并关闭',
    close: '关闭'
  }
};
