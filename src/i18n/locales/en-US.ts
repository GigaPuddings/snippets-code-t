export default {
  // Common
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    on: 'On',
    off: 'Off',
    tip: 'Tip',
    warning: 'Warning',
    success: 'Success',
    failed: 'Failed',
    loading: 'Loading...',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    search: 'Search',
    reset: 'Reset',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    start: 'Get Started',
    browse: 'Browse',
    quickStart: 'Quick Start',
    create: 'Create'
  },

  // Setup Wizard
  setup: {
    welcome: 'Welcome',
    dataLocation: 'Data Location',
    complete: 'Complete',
    welcomeTitle: 'Welcome to Snippets Code',
    welcomeDesc: 'An efficient code snippet manager to help you store and retrieve code quickly.',
    selectLanguage: 'Select Language',
    dataLocationTitle: 'Data Storage Location',
    dataLocationDesc: 'Choose where to store your database and configuration files',
    defaultLocation: 'Default Location (Recommended)',
    customLocation: 'Custom Location',
    customLocationDesc: 'Choose a custom folder to store your data',
    pathTip: 'Recommend non-system drive for easy backup and migration. Do not select protected system directories like Program Files.',
    selectDir: 'Please select a directory',
    selectDirTitle: 'Select Data Directory',
    completeTitle: 'Setup Complete',
    completeDesc: 'Initial setup is complete. You can start using the app now!',
    dataPath: 'Data Path',
    setupComplete: 'Setup Complete!',
    setupFailed: 'Setup Failed',
    pathError: 'Path setup failed'
  },

  // General Settings
  settings: {
    general: 'General Settings',
    theme: 'Theme',
    themeDesc: 'Set the color theme for Snippets Code',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeAuto: 'System',
    language: 'Language',
    languageDesc: 'Set the display language',
    languageChanged: 'Language changed',
    autoStart: 'Auto Start',
    autoStartDesc: 'Launch app when system starts',
    autoStartEnabled: 'Auto start enabled',
    autoStartDisabled: 'Auto start disabled',
    resetSoftware: 'Reset Software',
    resetSoftwareDesc: 'Reset will clear local apps, bookmarks, cached icons, and require re-indexing',
    resetSoftwareTitle: 'Reset Software',
    resetSelectContent: 'Select content to reset:',
    resetAll: 'Reset All',
    resetApps: 'Reset Apps',
    resetBookmarks: 'Reset Bookmarks',
    resetAppsSuccess: 'Apps reset successfully',
    resetBookmarksSuccess: 'Bookmarks reset successfully',
    resetAllSuccess: 'Software reset successfully',
    resetFailed: 'Reset failed',
    autoUpdateCheck: 'Auto Update Check',
    autoUpdateCheckDesc: 'Check for updates on app launch',
    autoUpdateEnabled: 'Auto update check enabled',
    autoUpdateDisabled: 'Auto update check disabled',
    autoHideOnBlur: 'Auto Hide on Blur',
    autoHideOnBlurDesc: 'Hide search window when it loses focus',
    autoHideEnabled: 'Auto hide enabled',
    autoHideDisabled: 'Auto hide disabled',
    exitApp: 'Exit App',
    exitAppDesc: 'Exit the application',
    exitAppConfirm: 'Are you sure you want to exit?',
    exitAppSuccess: 'Application exited',
    settingFailed: 'Setting failed'
  },

  // Language Options
  languages: {
    'zh-CN': '简体中文',
    'en-US': 'English'
  },

  // Sidebar Navigation
  nav: {
    quickActions: 'Quick Actions',
    allSnippets: 'All Snippets',
    uncategorized: 'Uncategorized',
    folders: 'Folders',
    noFolders: 'No folders'
  },

  // Shortcut Settings
  shortcut: {
    title: 'Shortcut Settings',
    searchHotkey: 'Search Bar Hotkey:',
    searchHotkeyDesc: 'Set hotkey to open search bar',
    configHotkey: 'Main Window Hotkey:',
    configHotkeyDesc: 'Set hotkey to open main window',
    translateHotkey: 'Translate Window Hotkey:',
    translateHotkeyDesc: 'Set hotkey to open translate window',
    selectionTranslateHotkey: 'Selection Translate Hotkey:',
    selectionTranslateHotkeyDesc: 'Set hotkey for selection translation',
    screenshotHotkey: 'Screenshot Hotkey:',
    screenshotHotkeyDesc: 'Set hotkey for screenshot',
    darkModeHotkey: 'Theme Toggle Hotkey:',
    darkModeHotkeyDesc: 'Set hotkey to toggle system theme',
    register: 'Register',
    pressToSet: 'Press keys to set hotkey',
    registerSuccess: 'Hotkey registered',
    registerFailed: 'Hotkey registration failed',
    needMainKey: 'Hotkey must include a main key (e.g., A, 1, F1, Space)'
  },

  // Data Management
  dataManager: {
    title: 'Data Management',
    snippetDir: 'Data Directory:',
    snippetDirDesc: 'Set snippet storage location',
    changePath: 'Change Path',
    backup: 'Data Backup:',
    backupDesc: 'Set backup file location',
    backupBtn: 'Backup',
    restore: 'Data Restore:',
    restoreDesc: 'Restore snippet data',
    restoreBtn: 'Restore',
    backupFormat: {
      date: 'Date',
      time: 'Time',
      datetime: 'DateTime'
    },
    selectFormat: 'Select backup filename format',
    backupSuccess: 'Backup successful',
    backupFailed: 'Backup failed',
    restoreWarning: 'Restoring data will replace the current database and requires restarting the app. Continue?',
    restoreSuccess: 'Data restored. App will restart.',
    pathWarning: 'Changing database location will migrate data and restart the app. Continue?',
    pathSuccess: 'Path changed. App will restart.',
    warning: 'Warning'
  },

  // Local Apps/Bookmarks
  local: {
    apps: 'Local Apps',
    bookmarks: 'Bookmarks',
    total: 'Total',
    items: 'items',
    showing: 'Showing',
    search: 'Search...',
    edit: 'Edit',
    done: 'Done',
    add: 'Add',
    delete: 'Delete',
    noData: 'No {type} data',
    noMatch: 'No matching results',
    addItem: 'Add {type}',
    usedTimes: 'Used {count} times',
    loadFailed: 'Failed to load {type}',
    openFailed: 'Failed to open {type}',
    updateSuccess: '{type} updated',
    addSuccess: '{type} added',
    deleteSuccess: '{type} deleted',
    deleteFailed: 'Delete failed',
    operationFailed: 'Operation failed',
    deleteConfirm: 'Delete "{name}"?',
    deleteTitle: 'Confirm Delete'
  },

  // Edit Dialog
  editDialog: {
    editApp: 'Edit App',
    editBookmark: 'Edit Bookmark',
    addApp: 'Add App',
    addBookmark: 'Add Bookmark',
    name: 'Name',
    namePlaceholder: 'Enter {type} name',
    path: 'Path',
    url: 'URL',
    pathPlaceholder: 'Enter app path',
    urlPlaceholder: 'Enter bookmark URL',
    icon: 'Icon',
    noIcon: 'No icon',
    extractIcon: 'Extract Icon',
    fetchIcon: 'Fetch Website Icon',
    extractSuccess: 'Icon extracted',
    extractFailed: 'Extract failed',
    fetchSuccess: 'Icon fetched',
    fetchFailed: 'Fetch failed',
    noIconFound: 'No icon found',
    selectFile: 'Failed to select file',
    enterPathFirst: 'Enter app path first',
    enterUrlFirst: 'Enter URL first',
    executableFiles: 'Executable Files',
    nameRequired: 'Name is required',
    nameLength: 'Name must be 1-100 characters',
    pathRequired: 'Path is required',
    urlRequired: 'URL is required',
    iconSourceAuto: 'Auto',
    iconSourceAutoDesc: 'Try multiple icon sources automatically',
    iconSourceGoogleDesc: 'Use Google Favicon service',
    iconSourceYandexDesc: 'Use Yandex Favicon service',
    iconSourceWebsite: 'Website Direct',
    iconSourceWebsiteDesc: 'Fetch icon directly from website'
  },

  // Alarms/Reminders
  alarm: {
    noAlarms: 'No reminders set',
    noAlarmsDesc: 'Click "+" at bottom right to add a reminder',
    addAlarm: 'Add Reminder',
    editAlarm: 'Edit Reminder',
    title: 'Reminder Title',
    alarmType: 'Reminder Type',
    daily: 'Daily',
    weekly: 'Weekly',
    specificDate: 'Specific Date',
    repeatReminder: 'Repeat',
    pauseTime: 'Snooze Time',
    selectDates: 'Select dates',
    dailyRepeat: 'Daily repeat',
    totalDates: '{count} dates',
    notSet: 'Not set',
    minutes: 'minutes',
    saveFailed: 'Save failed',
    titleRequired: 'Title is required',
    hourError: 'Invalid hour (0-23)',
    minuteError: 'Invalid minute (0-59)',
    weekdayRequired: 'Select at least one day',
    dateRequired: 'Select a date',
    dateExpired: 'Date {date} cannot be in the past',
    weekdays: {
      mon: 'Mon',
      tue: 'Tue',
      wed: 'Wed',
      thu: 'Thu',
      fri: 'Fri',
      sat: 'Sat',
      sun: 'Sun'
    },
    deleteConfirm: 'Delete reminder "{name}"?',
    deleteSuccess: 'Reminder deleted'
  },

  // Category/Snippets
  category: {
    newFolder: 'New Folder',
    rename: 'Rename',
    delete: 'Delete',
    noContent: 'No snippets',
    folders: 'Folders',
    newSnippet: 'New Content',
    searchPlaceholder: 'Search...',
    ascending: 'Ascending',
    descending: 'Descending',
    saveFailed: 'Save failed, please retry',
    loadFailed: 'Failed to load content, please retry',
    loadingEditor: 'Loading editor...',
    retry: 'Retry',
    deleteConfirm: 'Delete folder "{name}"? All snippets inside will also be deleted.',
    deleteSuccess: 'Folder deleted',
    deleteFailed: 'Delete failed',
    convertType: 'Convert Type',
    convertToNote: 'Convert to Note',
    convertToCode: 'Convert to Code',
    convertConfirmTitle: 'Confirm Type Conversion',
    convertToNoteConfirm: 'Converting code snippet to note will wrap the code in a code block. Continue?',
    convertToCodeConfirm: 'Converting note to code snippet will lose all formatting and keep only plain text. Continue?',
    convertSuccess: 'Type conversion successful',
    convertFailed: 'Type conversion failed',
    unsavedChanges: 'You have unsaved changes. Do you want to save them?',
    discardChanges: 'Discard Changes',
    createNoteConfirm: 'Note "{name}" not found. Create a new note?'
  },

  // Content Editing
  content: {
    handleLinkFailed: 'Failed to handle link',
    createNoteFailed: 'Failed to create note'
  },

  // Advanced Search
  search: {
    filterByDate: 'Filter by Date',
    createdDate: 'Created Date',
    updatedDate: 'Updated Date',
    startDate: 'Start Date',
    endDate: 'End Date',
    today: 'Today',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    customRange: 'Custom Range',
    clearFilters: 'Clear Filters',
    activeFilters: 'Active Filters',
    noResults: 'No Results',
    suggestRelax: 'Try relaxing filter conditions',
    sortBy: 'Sort By',
    defaultSort: 'Default Sort',
    sortByCreated: 'Created Time',
    sortByUpdated: 'Updated Time',
    sortByTitle: 'Title',
    ascending: 'Ascending',
    descending: 'Descending',
    createdDesc: 'Created (Descending)',
    createdAsc: 'Created (Ascending)',
    updatedDesc: 'Updated (Descending)',
    updatedAsc: 'Updated (Ascending)',
    filterPanel: 'Filter Panel',
    applyFilter: 'Apply Filter',
    resetFilter: 'Reset',
    allTypes: 'All Types',
    allDates: 'All Dates',
    selectTags: 'Select Tags',
    syntaxHelp: 'Search Syntax Help',
    syntaxExamples: 'Examples: type:code tag:vue created:week',
    filterCount: 'Filters',
    resultCount: '{count} results'
  },

  // Search Engine Settings
  retrieve: {
    title: 'Browser Search Settings',
    resetDefault: 'Reset to default search engines',
    addNew: 'Add new search engine',
    noEngines: 'No search engine configured',
    name: 'Name',
    keyword: 'Keyword',
    urlFormat: 'URL format (use "%s" for search term)',
    icon: 'Search engine icon',
    default: 'Default',
    off: 'Off',
    defaultConfig: 'Default Config',
    deleteEngine: 'Delete search engine',
    invalidConfig: 'Invalid search engine config, please complete the info',
    configUpdated: 'Search engine config updated',
    resetSuccess: 'Reset to default search engines',
    resetFailed: 'Failed to reset search engines',
    loadFailed: 'Failed to load search engine config',
    updateFailed: 'Failed to update search engine config',
    addSuccess: 'New search engine added, please complete info',
    deleteSuccess: 'Search engine deleted',
    deleteConfirm: 'Delete search engine "{name}"?',
    defaultUpdated: 'Default search engine updated'
  },

  // GitHub Sync
  github: {
    title: 'GitHub Data Sync',
    subtitle: 'Configure GitHub sync to protect your data',
    connectGithub: 'Connect GitHub',
    token: 'GitHub Personal Access Token',
    tokenPlaceholder: 'Enter your GitHub Token',
    repoName: 'Repository Name (Optional)',
    repoPlaceholder: 'Default: snippets-code-backup',
    howToGetToken: 'How to get Token?',
    viewTutorial: 'View Tutorial',
    connect: 'Connect',
    connecting: 'Verifying...',
    accountInfo: 'Account Info',
    logout: 'Logout',
    syncStatus: 'Sync Status',
    lastSyncTime: 'Last Sync Time',
    neverSynced: 'Never synced',
    repoAddress: 'Repository URL',
    dataSync: 'Data Sync',
    uploadToGithub: 'Upload to GitHub',
    uploading: 'Syncing...',
    restoreFromGithub: 'Restore from GitHub',
    restoring: 'Restoring...',
    uploadingData: 'Uploading data...',
    restoringData: 'Restoring data...',
    restoreWarning: 'Restoring will overwrite all local data. Proceed with caution!',
    autoSync: 'Auto Sync',
    autoSyncOnExit: 'Auto backup on exit',
    autoSyncOnExitDesc: 'Automatically upload data to GitHub when closing the app',
    autoRestoreOnStart: 'Auto restore on start',
    autoRestoreOnStartDesc: 'Check for cloud updates and prompt to restore on app start',
    loading: 'Loading...',
    connectSuccess: 'Connected successfully!',
    connectFailed: 'Verification failed, please check your Token',
    logoutConfirm: 'Auto sync will be disabled after logout. Are you sure?',
    logoutTitle: 'Confirm Logout',
    logoutSuccess: 'Logged out',
    syncSuccess: 'Sync successful! Data uploaded to GitHub',
    syncFailed: 'Sync failed',
    restoreConfirm: 'This will overwrite all local data and cannot be undone. Continue?',
    restoreTitle: 'Warning',
    restoreSuccess: 'Restore successful! App will restart...',
    restoreFailed: 'Restore failed',
    settingSaved: 'Settings saved',
    settingFailed: 'Save failed',
    pleaseInputToken: 'Please enter GitHub Token'
  },

  // Theme Toggle
  darkMode: {
    title: 'System Theme',
    // Theme Mode (4 options)
    themeMode: 'Theme Mode',
    systemMode: 'System',
    systemModeDesc: 'Follow Windows system theme',
    lightMode: 'Light',
    lightModeDesc: 'Always use light theme',
    darkMode: 'Dark',
    darkModeDesc: 'Always use dark theme',
    scheduleMode: 'Schedule',
    scheduleModeDesc: 'Auto-switch by time',
    // Current Status
    currentTheme: 'Current system theme:',
    darkTheme: 'Dark Mode',
    lightTheme: 'Light Mode',
    schedulerStatus: 'Scheduler status:',
    running: 'Running',
    stopped: 'Stopped',
    manualToggle: 'Toggle Theme Manually',
    // Schedule Type
    scheduleType: 'Schedule Type',
    sunBased: 'Sunrise/Sunset',
    sunBasedDesc: 'Auto-calculate based on your location',
    customSchedule: 'Custom Time',
    customScheduleDesc: 'Set custom switch times',
    // Location Info
    locationInfo: 'Location Info',
    gettingLocation: 'Getting location...',
    location: 'Location:',
    timezone: 'Timezone:',
    coordinates: 'Coordinates:',
    refreshLocation: 'Refresh Location',
    refreshing: 'Refreshing...',
    // Sunrise/Sunset
    sunTimes: 'Sunrise & Sunset Times',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    currentPeriod: 'Current period:',
    daytime: 'Daytime (Light Mode)',
    nighttime: 'Nighttime (Dark Mode)',
    // Custom Time
    customTime: 'Custom Time',
    lightModeStart: 'Light mode start time',
    darkModeStart: 'Dark mode start time',
    // Messages
    loadConfigFailed: 'Failed to load config',
    saveConfigFailed: 'Failed to save config',
    getLocationFailed: 'Failed to get location',
    toggleFailed: 'Failed to toggle theme',
    switchedTo: 'Switched to {theme} mode',
    autoRestoreNote: '. Schedule will resume at next scheduled time'
  },

  // Loading Page
  loading: {
    title: 'Application is loading'
  },

  // Notification
  notification: {
    title: 'Reminder',
    confirm: 'Confirm',
    remindLater: 'Remind me in {minutes} minutes'
  },

  // Scan Progress
  progress: {
    title: 'Indexing Data',
    completed: 'Indexing Complete',
    preparing: 'Preparing...',
    scanningApps: 'Scanning local applications',
    scanningBookmarks: 'Scanning browser bookmarks',
    loadingIcons: 'Loading icons',
    savingToDatabase: 'Saving to database',
    scanComplete: 'Scan complete: {apps} apps, {bookmarks} bookmarks'
  },

  // Pin Window
  pin: {
    togglePin: 'Unpin',
    pinWindow: 'Pin Window',
    resetZoom: 'Reset Zoom',
    copyImage: 'Copy Image',
    saveImage: 'Save Image',
    closePin: 'Close Pin'
  },

  // Update Window
  update: {
    title: 'Software Update',
    currentVersion: 'Current Version',
    newVersion: 'New Version',
    releaseDate: 'Release Date:',
    releaseNotes: 'Release Notes',
    gettingData: 'Getting data...',
    startDownload: 'Starting download',
    downloading: 'Downloading',
    downloadComplete: 'Download complete, launching installer...',
    installing: 'Installing...',
    installSuccess: 'Installation successful, restarting app...',
    installFailed: 'Installation failed',
    downloadFailed: 'Download failed',
    preparing: 'Preparing download...',
    updateLater: 'Update Later',
    updateNow: 'Update Now',
    retryInstall: 'Retry Install',
    close: 'Close'
  },

  // Translate Window
  translate: {
    title: 'Translate',
    inputPlaceholder: 'Enter text to translate',
    speakText: 'Speak Text',
    deleteText: 'Delete Text',
    copyResult: 'Copy Result',
    translateBack: 'Translate Back',
    resultPlaceholder: 'Translation will appear here',
    copiedToClipboard: 'Copied to clipboard',
    tooManyRequests: 'Too many requests, please try again later',
    timeout: 'Translation timeout, check network',
    networkError: 'Network error, check connection',
    translateFailed: 'Translation failed, please retry',
    bingTranslate: 'Bing Translate',
    googleTranslate: 'Google Translate',
    offlineTranslate: 'Offline Translate',
    languages: {
      auto: 'Auto Detect',
      zh: 'Chinese (Simplified)',
      zh_tw: 'Chinese (Traditional)',
      en: 'English',
      ja: 'Japanese',
      ko: 'Korean',
      fr: 'French',
      de: 'German',
      ru: 'Russian',
      es: 'Spanish',
      pt_pt: 'Portuguese',
      pt_br: 'Brazilian Portuguese',
      vi: 'Vietnamese',
      id: 'Indonesian',
      th: 'Thai',
      ar: 'Arabic'
    }
  },

  // Screenshot Toolbar
  screenshot: {
    select: 'Select',
    rectangle: 'Rectangle',
    ellipse: 'Ellipse',
    arrow: 'Arrow',
    pen: 'Pen',
    mosaic: 'Mosaic',
    text: 'Text',
    undo: 'Undo',
    redo: 'Redo',
    pin: 'Pin',
    copy: 'Copy',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    colorPicker: 'Color Picker',
    delete: 'Delete'
  },

  // 404 Page
  errorPage: {
    notFound: 'Page Not Found',
    backHome: 'Back to Home'
  },

  // Content Item Context Menu
  contentItem: {
    changeCategory: 'Change Category',
    changeCategorySuccess: 'Category changed successfully',
    changeCategoryFailed: 'Failed to change category',
    rename: 'Rename',
    delete: 'Delete',
    uncategorized: 'Uncategorized',
    updateFailed: 'Failed to update category',
    deleteConfirm: 'Delete snippet "{name}"?',
    deleteSuccess: 'Snippet deleted',
    deleteFailed: 'Failed to delete',
    codeSnippet: 'Snippet',
    note: 'Note',
    filterByType: 'Filter by Type',
    allTypes: 'All Types'
  },

  // Search Result
  searchResult: {
    all: 'All',
    apps: 'Apps',
    bookmarks: 'Bookmarks',
    backToSearch: 'Back to Search'
  },

  // Titlebar
  titlebar: {
    userCenter: 'User Center',
    checkUpdate: 'Check Update',
    pinWindow: 'Pin Window',
    unpinWindow: 'Unpin Window',
    settings: 'Settings',
    minimize: 'Minimize',
    maximize: 'Maximize',
    restore: 'Restore',
    close: 'Close'
  },

  // Code Editor
  codeEditor: {
    lines: 'Lines',
    chars: 'Chars',
    language: 'Lang'
  },

  // Note Editor
  noteEditor: {
    words: 'Words',
    chars: 'Chars',
    livePreview: 'Live Preview',
    sourceMode: 'Source Mode',
    readingView: 'Reading View',
    outline: 'Outline',
    toggleReading: 'Toggle Reading Mode',
    toggleEditing: 'Toggle Editing Mode',
    noHeadings: 'No Headings',
    noSearchResults: 'No matching headings found',
    searchHeadings: 'Search headings...',
    search: 'Search',
    collapseAll: 'Collapse All',
    expandAll: 'Expand All',
    scrollToActive: 'Scroll to Active'
  },

  // Editor Toolbar
  toolbar: {
    bold: 'Bold (Ctrl+B)',
    italic: 'Italic (Ctrl+I)',
    strikethrough: 'Strikethrough',
    code: 'Inline Code',
    heading: 'Heading',
    paragraph: 'Paragraph',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    bulletList: 'Bullet List',
    orderedList: 'Ordered List',
    taskList: 'Task List',
    blockquote: 'Blockquote',
    codeBlock: 'Code Block',
    link: 'Link',
    table: 'Insert Table',
    horizontalRule: 'Horizontal Rule'
  },

  // Editor Context Menu
  contextMenu: {
    addLink: 'Add Link',
    addExternalLink: 'Add External Link',
    textFormat: 'Text Format',
    paragraphSettings: 'Paragraph Settings',
    insert: 'Insert',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    highlight: 'Highlight',
    code: 'Code',
    clearFormat: 'Clear Format',
    bulletList: 'Bullet List',
    orderedList: 'Ordered List',
    taskList: 'Task List',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    paragraph: 'Paragraph',
    blockquote: 'Blockquote',
    footnote: 'Footnote',
    table: 'Table',
    callout: 'Callout',
    horizontalRule: 'Horizontal Rule',
    codeBlock: 'Code Block',
    mathBlock: 'Math Block',
    database: 'New Database',
    cut: 'Cut',
    copy: 'Copy',
    paste: 'Paste',
    pasteAsPlainText: 'Paste as Plain Text',
    selectAll: 'Select All',
    enterUrl: 'Enter URL',
    urlPlaceholder: 'Enter link URL',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },

  // Fragment Type Selector
  fragmentType: {
    selectType: 'Create New Content',
    codeSnippet: 'Snippet',
    codeSnippetDesc: 'Store and manage code with syntax highlighting',
    note: 'Note',
    noteDesc: 'Create rich text notes with formatting'
  },

  // Screenshot Tool
  screenshotTool: {
    loading: 'Loading screenshot...',
    dragToSelect: 'Drag to select area',
    pressEscToClose: 'Press ESC to close',
    colorPicker: 'Color Picker'
  },

  // Search Syntax Helper
  searchSyntax: {
    typeFilter: 'Type Filter',
    typeCodeDesc: 'Filter code snippets',
    typeNoteDesc: 'Filter notes',
    tagFilter: 'Tag Filter',
    tagDesc: 'Filter by tag',
    multipleTags: 'Multiple tags',
    dateFilter: 'Date Filter',
    createdTodayDesc: 'Created today',
    createdWeekDesc: 'Created this week',
    createdMonthDesc: 'Created this month',
    specificDateDesc: 'Specific date',
    afterDateDesc: 'After this date',
    beforeDateDesc: 'Before this date',
    updatedTodayDesc: 'Updated today',
    updatedWeekDesc: 'Updated this week',
    updatedMonthDesc: 'Updated this month',
    combinedSearch: 'Combined search'
  },

  // Snippet Preview
  snippetPreview: {
    untitled: 'Untitled Snippet',
    pleaseInput: 'Please input',
    copyAndClose: 'Copy & Close',
    close: 'Close',
    openDetail: 'View Details',
    noContent: 'No Content'
  },

  // Tag Management
  tags: {
    tag: 'Tag',
    tags: 'Tags',
    addTag: 'Add Tag',
    inputPlaceholder: 'Enter tag name',
    emptyTag: 'Tag cannot be empty',
    noComma: 'Tag cannot contain comma',
    duplicateTag: 'Tag already exists',
    filterByTag: 'Filter by Tag',
    allTags: 'All Tags',
    noTags: 'No tags',
    clickToFilter: 'Click tag to view related snippets'
  },

  // Error Handling
  errors: {
    // API Errors
    invalidFragmentType: 'Invalid fragment type. Must be "code" or "note"',
    invalidFormat: 'Invalid content format',
    invalidMetadata: 'Invalid metadata format',
    invalidJson: 'Invalid JSON format',
    apiCallFailed: 'Operation failed: {message}',
    networkError: 'Network error, please check connection',
    unknownError: 'Unknown error, please retry',
    
    // Editor Errors
    editorLoadFailed: 'Editor failed to load',
    editorInitFailed: 'Editor initialization failed, please refresh',
    editorNotReady: 'Editor not ready',
    
    // Save Errors
    saveFailed: 'Save failed',
    saveFailedRetry: 'Save failed, please retry',
    saveFailedDetail: 'Save failed: {message}',
    
    // Load Errors
    loadFailed: 'Load failed',
    loadFailedRetry: 'Load failed, please retry',
    loadFailedDetail: 'Load failed: {message}',
    
    // Conversion Errors
    conversionFailed: 'Type conversion failed',
    conversionFailedDetail: 'Type conversion failed: {message}',
    conversionFailedRetain: 'Type conversion failed, retaining original type',
    
    // Validation Errors
    validationFailed: 'Data validation failed',
    emptyTitle: 'Title cannot be empty',
    emptyContent: 'Content cannot be empty',
    invalidParameter: 'Invalid parameter',
    
    // General Errors
    operationFailed: 'Operation failed',
    operationCancelled: 'Operation cancelled',
    timeout: 'Operation timeout',
    permissionDenied: 'Permission denied'
  },

  // Translation Settings
  translation: {
    title: 'Translation',
    defaultEngine: 'Default Engine',
    defaultEngineDesc: 'Set default engine for screenshot and selection translation',
    google: 'Google Translate',
    bing: 'Bing Translate',
    offline: 'Offline Translate',
    engineSaved: 'Translation engine saved',
    engineSaveFailed: 'Failed to save translation engine',
    offlineModel: 'Offline Model',
    offlineModelDesc: 'Download offline translation model for use without network',
    modelLoading: 'Loading model...',
    modelReady: 'Model ready',
    modelActivated: 'Activated (lazy load)',
    modelCached: 'Model cached (not activated)',
    modelNotLoaded: 'Model not loaded',
    loadModel: 'Download Model',
    activateModel: 'Activate Model',
    deleteModel: 'Delete Model',
    modelLoadSuccess: 'Offline translation model loaded',
    modelLoadFailed: 'Model load failed, please retry',
    modelDeleted: 'Offline translation model deleted',
    modelDeleteFailed: 'Failed to delete model',
    modelInfo: 'Model Info',
    modelInfoDesc: 'Information about the loaded offline translation model',
    modelName: 'Model Name',
    modelSize: 'Model Size',
    supportLang: 'Supported Languages',
    enToZh: 'English → Chinese',
    cacheStorageLocation: 'Browser Cache Storage (App Data Directory)',
    indexedDBLocation: 'Browser IndexedDB (App Data Directory)',
    usage: 'Usage Tips',
    usageDesc: 'Tips for using offline translation',
    usageTip1: 'First load requires downloading ~300MB model files',
    usageTip2: 'Model is cached locally after download, no re-download needed',
    usageTip3: 'Offline translation only supports English to Chinese',
    usageTip4: 'Model must be activated before using offline translation',
    preparingModel: 'Preparing model...',
    fileComplete: 'File complete: {file}',
    downloading: 'Downloading: {file}',
    completed: 'Done',
    failed: 'Failed',
    waiting: 'Waiting',
    downloadProgress: 'Download Progress',
    downloadProgressDesc: 'Model file download status'
  }
};
