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
    clear: 'Clear',
    reset: 'Reset',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    start: 'Get Started',
    browse: 'Browse',
    quickStart: 'Quick Start',
    create: 'Create',
    inputTitle: 'Input',
    requiredField: 'This field is required',
    maxLengthExceeded: 'Length cannot exceed {max} characters',
    invalidInput: 'Invalid input',
    operationFailed: 'Operation failed'
  },

  // Setup Wizard
  setup: {
    welcome: 'Welcome',
    dataLocation: 'Workspace',
    paths: 'Paths',
    appDataStep: 'Data',
    workspaceStep: 'Workspace',
    pluginStep: 'Plugins',
    indexing: 'Indexing',
    complete: 'Complete',
    welcomeTitle: 'Welcome to Snippets Code',
    welcomeDesc:
      'A local-first workspace for frontend snippets and knowledge assets, built to capture, search, and reuse code.',
    versionLabel: 'Version',
    quickStart: 'Quick Start',
    createWorkspace: 'Create new workspace',
    createWorkspaceDesc:
      'Choose a location and create a new Markdown workspace.',
    create: 'Create',
    openWorkspace: 'Open workspace',
    openWorkspaceDesc:
      'Open an existing local folder as workspace (local or cloned).',
    open: 'Open',
    selectLanguage: 'Select Language',
    pathsTitle: 'Path Setup',
    pathsDesc:
      'Choose app data, Markdown workspace, and plugin install locations',
    appDataDir: 'App Data Directory',
    appDataDirDesc:
      'Stores the database, global settings, caches, and plugin runtime data.',
    defaultAppDataDir: 'Default App Data Directory (Recommended)',
    customAppDataDir: 'Custom App Data Directory',
    customAppDataDirDesc: 'Choose a folder for app data',
    workspaceDir: 'Markdown Workspace',
    workspaceDirDesc: 'Stores Markdown snippets and knowledge assets.',
    pluginInstallDir: 'Plugin Install Location',
    pluginInstallDirDesc:
      'Stores installed plugin packages. Plugin features take effect after install or enable completes.',
    defaultPluginInstallDir: 'Default Plugin Directory (Recommended)',
    customPluginInstallDir: 'Custom Plugin Directory',
    customPluginInstallDirDesc: 'Choose a folder for plugin packages',
    dataLocationTitle: 'Workspace Location',
    dataLocationDesc:
      'Choose where to store Markdown snippets and knowledge assets',
    defaultLocation: 'Default Workspace (Recommended)',
    customLocation: 'Custom Workspace',
    customLocationDesc: 'Choose a folder as your workspace',
    pathTip:
      'Creating a workspace will create the directory automatically. Opening a workspace requires an existing folder. Do not select protected system directories like Program Files.',
    indexTitle: 'First Indexing',
    indexDesc: 'Choose which search sources to enable and warm up after setup',
    localLauncherIndex: 'App and Bookmark Launcher',
    localLauncherIndexDesc:
      'Index local apps and browser bookmarks for quick launch and link opening.',
    desktopFilesIndex: 'Desktop File Search',
    desktopFilesIndexDesc:
      'Index common desktop files for direct search and preview.',
    cacheIcons: 'Cache Icons',
    cacheIconsDesc:
      'Cache app, bookmark, and desktop file icons so results are easier to scan.',
    indexTip:
      'Enabled indexes scan automatically after restart. You can adjust them later in plugin or general settings.',
    indexSummary: 'Index Settings',
    indexDisabled: 'All Off',
    selectDir: 'Please select a workspace directory',
    selectAppDataDir: 'Please select an app data directory',
    selectPluginInstallDir: 'Please select a plugin install directory',
    selectDirTitle: 'Select Workspace Directory',
    selectAppDataDirTitle: 'Select App Data Directory',
    selectPluginInstallDirTitle: 'Select Plugin Install Directory',
    completeTitle: 'Setup Complete',
    completeDesc: 'Initial setup is complete. You can start using the app now!',
    dataPath: 'Workspace Path',
    appDataPath: 'App Data Directory',
    workspacePath: 'Workspace Path',
    pluginInstallPath: 'Plugin Install Location',
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
    resetSoftwareDesc:
      'Reset clears plugin indexes such as app/bookmark launcher and desktop file search, plus cached icons, then re-indexes after restart',
    resetSoftwareTitle: 'Reset Software',
    resetSelectContent: 'Select content to reset:',
    resetAll: 'Reset All',
    resetApps: 'Reset Apps',
    resetBookmarks: 'Reset Bookmarks',
    resetDesktopFiles: 'Reset Desktop Files',
    resetAppsSuccess: 'Apps reset successfully',
    resetBookmarksSuccess: 'Bookmarks reset successfully',
    resetDesktopFilesSuccess: 'Desktop files reset successfully',
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
    editorLineNumbers: 'Editor Line Numbers',
    editorLineNumbersDesc: 'Show or hide line numbers in the rich text editor',
    exitApp: 'Exit App',
    exitAppDesc: 'Exit the application',
    exitAppConfirm: 'Are you sure you want to exit?',
    exitAppSuccess: 'Application exited',
    settingFailed: 'Setting failed',
    exitFailed: 'Exit failed',
    developer: {
      menu: 'Developer Mode',
      title: 'Developer Diagnostics',
      mode: 'Developer Mode',
      modeDesc:
        'When enabled, collect frontend diagnostics and read backend log tails on refresh; when disabled, old diagnostics are hidden.',
      refresh: 'Refresh Diagnostics',
      copy: 'Copy Report',
      openLogs: 'Open Log Folder',
      clearFrontend: 'Clear Frontend Logs',
      hint: 'When disabled, only the environment overview is shown. When enabled, the report includes frontend diagnostics and backend log tails. Sensitive credentials such as Git tokens are redacted automatically.',
      generatedAt: 'Generated',
      status: 'Diagnostic Status',
      attention: 'Needs Attention',
      normal: 'No Issues Found',
      issueCount: '{count} warnings or errors',
      ignoredWarnings:
        '{count} expected runtime notices were ignored. They remain available in the full report.',
      application: 'Application',
      windows: 'Windows',
      visibleWindows: 'visible / total windows',
      frontendIssues: 'Frontend Issues',
      backendIssues: 'Backend Issues',
      errorWarnCount: '{errors} errors · {warnings} warnings',
      overview: 'Overview',
      frontendLogs: 'Frontend Logs',
      backendLogs: 'Backend Logs',
      fullReport: 'Full Report',
      paths: 'Runtime Directories',
      dataDir: 'Data Directory',
      pluginDir: 'Plugin Directory',
      logDir: 'Log Directory',
      logFiles: 'Log Files',
      visible: 'Visible',
      hidden: 'Hidden',
      searchLogs: 'Search current logs...',
      matchLines: '{count} lines',
      empty: 'No data',
      noMatches: 'No matching log lines',
      enabled: 'Developer mode enabled',
      disabled: 'Developer mode disabled',
      copied: 'Diagnostic report copied',
      copyFailed: 'Failed to copy diagnostic report',
      refreshFailed: 'Failed to refresh diagnostics',
      openLogsFailed: 'Failed to open log folder',
      frontendCleared: 'Frontend diagnostic logs cleared'
    },
    attachment: {
      menu: 'Attachments',
      title: 'Attachment Settings',
      description:
        'Configure storage location and filename format for note image attachments',
      pathTemplate: 'Attachment Path Template',
      pathTemplatePlaceholder: 'assets/${noteFileName}/',
      pathTemplateHint: 'Supported variables: ${noteFileName} (note filename)',
      filenameFormat: 'Filename Format',
      filenameFormatHint: 'Choose the filename generation rule for images',
      formatObsidian: 'Classic Style (Pasted image 20240228010203)',
      formatSimple: 'Simple Format (image-20240228-010203)',
      formatUuid: 'UUID (a1b2c3d4-e5f6)',
      pathPreview: 'Path Preview',
      pathPreviewHint: 'Example path with current configuration',
      exampleNoteName: 'Example Note',
      configSaved: 'Configuration saved',
      configSaveFailed: 'Failed to save configuration',
      syncingMessage: 'Syncing attachments: {oldTitle} → {newTitle}',
      syncSuccessMessage: 'Attachments synced, image paths updated',
      syncErrorMessage: 'Failed to sync attachments, but note was saved',
      cleanupSuccessMessage: 'Attachments cleaned up',
      categoryCleanupSuccessMessage: 'Cleaned up attachments for {count} notes',
      unusedCleanupSuccessMessage: 'Cleaned up {count} unused images'
    },
    gitSync: {
      menu: 'Git Sync',
      title: 'Git Sync Settings',
      enabled: 'Enable Git Sync',
      enabledDesc: 'Sync notes to GitHub repository',
      enabledSuccess: 'Git sync enabled',
      disabledSuccess: 'Git sync disabled',
      autoDetect: 'Auto Detect Config',
      autoDetectDesc: 'Detect Git configuration from system or workspace',
      autoDetectDescWorkspace:
        'Detect Git configuration from workspace .git/config',
      detectButton: 'Detect Config',
      detectConfigFilled: 'Git config filled from workspace',
      noConfigDetectedWorkspace:
        'No Git config in workspace. Please configure in User Center',
      detectConfigTitle: 'Git Configuration Detected',
      detectConfigDesc:
        'The following Git configurations were detected. Please select which one to use:',
      localConfig: 'Local Config (Workspace)',
      globalConfig: 'Global Config (System)',
      manualConfig: 'Manual Config',
      manualConfigDesc: 'Do not use detected config, enter manually',
      recommended: 'Recommended',
      noConfigDetected: 'No Git configuration detected',
      detectFailed: 'Failed to detect Git configuration',
      localConfigApplied: 'Local Git config applied',
      globalConfigApplied: 'Global Git config applied',
      userName: 'Git Username',
      userNameDesc: 'Username for Git commits',
      userNamePlaceholder: 'Enter Git username',
      userEmail: 'Git Email',
      userEmailDesc: 'Email address for Git commits',
      userEmailPlaceholder: 'Enter Git email',
      invalidEmail: 'Invalid email format',
      token: 'GitHub Token',
      tokenDesc: 'GitHub Personal Access Token for authentication',
      tokenPlaceholder: 'Enter GitHub Token',
      remoteUrl: 'Remote Repository URL',
      remoteUrlDesc: 'GitHub repository URL (supports HTTPS or SSH format)',
      remoteUrlPlaceholder: 'Enter remote repository URL',
      invalidUrl: 'Invalid repository URL format (supports HTTPS or SSH)',
      saveConfig: 'Save Git Configuration',
      saveConfigDesc: 'Save Git user info and remote repository config',
      pullOnStart: 'Pull on Start',
      pullOnStartDesc:
        'Automatically pull from remote repository on app launch',
      pullOnStartEnabled: 'Pull on start enabled',
      pullOnStartDisabled: 'Pull on start disabled',
      autoSync: 'Auto Sync',
      autoSyncDesc: 'Automatically push to remote after stopping editing',
      autoSyncEnabled: 'Auto sync enabled',
      autoSyncDisabled: 'Auto sync disabled',
      autoSyncDelay: 'Auto Sync Delay',
      autoSyncDelayDesc: 'Time to wait after stopping editing before auto sync',
      minutes: 'minutes',
      delaySaved: 'Delay time saved',
      manualSync: 'Manual Sync',
      manualSyncDesc: 'Manually pull or push data',
      pull: 'Pull',
      push: 'Push',
      loadFailed: 'Failed to load Git settings',
      saveFailed: 'Failed to save settings',
      fillAllFields: 'Please fill in all required fields',
      configSuccess: 'Git configured successfully',
      configFailed: 'Git configuration failed',
      pullSuccess: 'Pull successful, updated {count} files',
      alreadyUpToDate: 'Already up to date',
      pullFailed: 'Pull failed',
      pullConflicts: 'Pull successful, but conflicts exist',
      conflictError:
        'Sync failed: Local file {files} conflicts with remote version, please commit or discard local changes first',
      unresolvedConflict:
        'Sync failed: Unresolved conflict files exist, please resolve conflicts or reset repository first',
      pushSuccess: 'Push successful, synced {count} files',
      pushFailed: 'Push failed',
      contribution: {
        title: 'Contribution Activity',
        desc: 'Calculated from local Git commit history in the current workspace',
        totalLastYear: '{count} commits in the last year',
        totalYear: '{count} commits in {year}',
        loading: 'Loading contribution activity...',
        empty: 'No commit activity',
        less: 'Less',
        more: 'More',
        dayTitle: '{date}: {count} commits'
      },
      conflictDetected: 'Git Conflict Detected',
      conflictFiles: 'Conflicting files:',
      untrackedFiles: 'Untracked files that will be overwritten by remote:',
      selectResolution: 'Select resolution strategy:',
      forcePush: 'Force Push (Keep Local)',
      forcePushDesc: 'Overwrite remote repository with local changes',
      forcePushWarning:
        "Warning: This will overwrite the remote repository and may cause loss of collaborators' changes",
      forcePull: 'Force Pull (Keep Remote)',
      forcePullDesc: 'Overwrite local files with remote version',
      forcePullWarning:
        'Warning: This will overwrite local files, your local changes will be lost',
      manualMerge: 'Manual Merge',
      manualMergeDesc: 'Compare files one by one and choose which to keep',
      mergeTitle: 'Merge Conflicts',
      remoteVersion: 'Remote',
      localVersion: 'Local',
      selectThisVersion: 'Select',
      selectedVersion: 'Selected: {version}',
      previousFile: 'Previous',
      nextFile: 'Next',
      prev: 'Prev',
      next: 'Next',
      resolved: 'resolved',
      edited: 'Edited',
      accepted: 'Accepted',
      acceptIncoming: 'Accept Incoming',
      acceptCurrent: 'Accept Current',
      conflictFile: 'File',
      completeMerge: 'Complete Merge',
      backToConflictDialog: 'Back',
      forcePushSuccess: 'Force push successful',
      forcePullSuccess: 'Force pull successful, local files updated',
      mergeSuccess: 'Conflicts resolved, merge complete',
      mergeFailed: 'Merge failed',
      confirmForcePush: 'Confirm Force Push?',
      confirmForcePushMessage:
        'This will overwrite the remote repository and cannot be undone. Continue?',
      confirmForcePull: 'Confirm Force Pull?',
      confirmForcePullMessage:
        'This will overwrite local changes and cannot be undone. Continue?',
      conflictResolutionFailed: 'Conflict resolution failed',
      cancelConflictTitle: 'Cancel Conflict Resolution',
      cancelConflictMessage:
        'Handle conflicts later?\n\n• "Handle Later": Keep conflict state, auto sync stays paused\n• "Resume Sync": Clear conflict state, resume auto sync',
      handleLater: 'Handle Later',
      resumeSync: 'Resume Sync',
      autoSyncResumed: 'Auto sync resumed',
      // Status
      status: {
        syncing: 'Syncing...',
        synced: 'Synced',
        hasChanges: 'Pending',
        error: 'Error',
        idle: 'Idle',
        pendingFiles: 'files pending',
        lastSync: 'Last sync',
        waitingSync: 'Waiting to sync',
        ready: 'Ready',
        checking: 'Checking status…',
        unknown: 'Unknown',
        viewDetails: 'View details',
        pendingFilesTitle: 'Pending files',
        section: {
          status: 'Sync Status',
          config: 'Git Config',
          sync: 'Sync Operations'
        }
      },
      // Repository not found
      repoNotFoundTitle: 'Remote Repository Not Found',
      repoNotFoundMessage:
        'Cannot connect to remote repository "{url}" ({operation} failed).\n\nThe remote repository may have been deleted or you may not have access. Would you like to reconfigure?',
      repoNotFoundReconfig: 'Reconfigure',
      repoNotFoundIgnore: 'Ignore',
      repoNotFoundIgnored:
        'Repository not found error ignored. Please manually resolve and reconfigure.',
      // Manual merge enhancements
      acceptAllRemote: 'Accept All Remote',
      acceptAllLocal: 'Accept All Local',
      syncScrollOn: 'Sync Scroll: ON',
      syncScrollOff: 'Sync Scroll: OFF',
      lineChanged: 'This line has changes',
      // Progress related
      loadingFile: 'Loading file...',
      initEditor: 'Initializing editor...',
      mergingProgress: 'Merging ({current}/{total})...',
      mergeComplete: 'Merge complete'
    }
  },

  // Plugin Management
  plugins: {
    title: 'Plugins',
    builtinTitle: 'Official Plugin Repository',
    builtinDesc:
      'Screenshot, OCR, translation, reminders, theme, search-source, and sync features extend the snippet workflow as plugins. The main app focuses on Markdown, editing, search, and workspace basics.',
    securityNotice:
      'Before installing, review the plugin source, permissions, and resource scope. Local plugins can run declared backend commands or load local resources.',
    installLocal: 'Install Local Plugin',
    installZip: 'Install Package',
    marketplaceSearchPlaceholder: 'Search GitHub plugin marketplace',
    marketplaceRefresh: 'Refresh Marketplace',
    marketplaceRefreshed: 'Plugin marketplace refreshed',
    marketplaceRefreshFailed: 'Failed to refresh plugin marketplace',
    marketplaceEmpty: 'No matching plugins',
    marketplaceInstall: 'Install from marketplace',
    marketplaceInstallDependencies: 'Install missing dependencies',
    marketplaceUpdate: 'Update plugin',
    marketplaceInstalled: 'Installed',
    marketplaceIncluded: 'Provided',
    marketplacePlanned: 'Planned',
    marketplaceAvailable: 'Available',
    marketplaceUpdateAvailable: 'Update available',
    marketplaceDependencyMissing: 'Missing dependency',
    marketplaceIncompatible: 'App update required',
    permissionNone: 'No extra permissions',
    permissionBackend: 'Backend {permission}',
    permissionCommand: 'Command {permission}',
    permissionResource: 'Local resources',
    permissionCapabilities: {
      routes: 'Page routes',
      settings: 'Settings tab',
      hotkeys: 'Hotkeys',
      search: 'Search source',
      titlebar: 'Titlebar action',
      tray: 'Tray item',
      windows: 'Window access'
    },
    quickTools: {
      name: 'Quick Tools',
      description:
        'Calculator, unit conversion, and live currency conversion in quick search.'
    },
    versionLabel: 'Version {version}',
    sizeLabel: 'Size {size}',
    sizeUnknown: 'Unknown',
    minAppVersion: 'Min app {version}',
    dependenciesLabel: 'Requires {dependencies}',
    dependencyMissing: 'Missing dependency plugin {id}',
    dependencyIncompatible: 'Dependency plugin {plugin} requires a newer app',
    installingPlugin: 'plugin',
    installPhases: {
      downloading: 'Downloading',
      downloaded: 'Downloaded',
      extracting: 'Extracting',
      installed: 'Installed'
    },
    installLocationTitle: 'Plugin Install Location',
    installLocationDesc:
      'Local plugins and large resources are installed here; screenshot OCR looks for RapidOCR in the same location.',
    installLocationDefault: 'Use default plugin directory',
    chooseInstallLocation: 'Choose Folder',
    resetInstallLocation: 'Reset Default',
    selectInstallLocation: 'Select plugin install location',
    installLocationSaved: 'Plugin install location saved',
    installLocationReset: 'Plugin install location reset',
    installLocationSaveFailed: 'Failed to save plugin install location',
    selectPluginDirectory: 'Select a plugin directory containing plugin.json',
    selectPluginZip: 'Select a .zip plugin package',
    installSuccess: 'Local plugin installed',
    installFailed: 'Failed to install local plugin',
    updateSuccess: 'Plugin updated',
    updateFailed: 'Failed to update plugin',
    uninstallSuccess: 'Local plugin uninstalled',
    uninstallFailed: 'Failed to uninstall local plugin',
    refresh: 'Refresh',
    refreshed: 'Plugin list refreshed',
    refreshFailed: 'Failed to refresh plugin list',
    enabled: 'Plugin enabled',
    disabled: 'Plugin disabled',
    saveFailed: 'Failed to save plugin state',
    gitSyncUnavailable: 'Git Sync plugin is not installed or enabled',
    resourceReady: 'Resource installed',
    resourceMissing:
      'Resource is not installed and will be requested when used',
    sources: {
      builtin: 'Core',
      local: 'Local'
    },
    categories: {
      capture: 'Capture',
      automation: 'Automation',
      search: 'Search',
      sync: 'Sync',
      editor: 'Editor',
      appearance: 'Appearance'
    },
    translation: {
      name: 'Translation',
      description:
        'Translate window, selection translation, screenshot translation, and offline model management.',
      resourceHint:
        'Offline translation runtime and models are loaded on demand as plugin resources.'
    },
    translationOfflineRuntime: {
      name: 'Offline Translation Runtime',
      description:
        'Local runtime resource loaded on demand by offline translation; text recognition is provided by the RapidOCR resource.'
    },
    screenshot: {
      name: 'Screenshot and OCR',
      description:
        'Screenshot annotation, color picker, pin windows, OCR, and screenshot translation.',
      resourceHint:
        'RapidOCR is a large resource and is now kept out of the core installer as an on-demand plugin resource.'
    },
    screenshotRapidocr: {
      name: 'RapidOCR Resource',
      description:
        'RapidOCR runtime, models, and local recognition files required by screenshot OCR and screenshot translation.'
    },
    screenRecorder: {
      name: 'Screen Recorder',
      description:
        'Record a custom area and export MP4 or GIF without a watermark.',
      resourceHint:
        'Screen recording export depends on FFmpeg, provided as a plugin resource or from the system installation.'
    },
    screenRecorderFfmpeg: {
      name: 'Screen Recorder FFmpeg Resource',
      description:
        'FFmpeg executable resource required by custom screen recording MP4 and GIF export.'
    },
    todo: {
      name: 'Reminders',
      description:
        'Todo cards, timed reminders, and system notification windows.'
    },
    systemTheme: {
      name: 'System Theme',
      description:
        'Auto dark mode, sunrise/sunset scheduling, and system theme hotkey toggling.'
    },
    wallpaperSwitcher: {
      name: 'Wallpaper Switcher',
      description:
        'Windows desktop wallpaper switching, local folder rotation, and Wallhaven online wallpapers.'
    },
    localLauncher: {
      name: 'Apps and Bookmarks Launcher',
      description:
        'Local app and browser bookmark management, plus quick-launch search results.'
    },
    desktopFiles: {
      name: 'Desktop File Search',
      description: 'Index desktop files and show file results in global search.'
    },
    searchEngines: {
      name: 'Search Engines',
      description:
        'Custom search engines, keyword search, and default web search entries.'
    },
    gitSync: {
      name: 'Git Sync',
      description:
        'Workspace Git initialization, pull, push, auto sync, and conflict handling.'
    },
    attachments: {
      name: 'Attachments',
      description:
        'Image attachment path templates, naming rules, and cleanup tools.'
    },
    helloLocal: {
      name: 'Hello Local Plugin',
      description:
        'Example plugin package used to validate marketplace download and installation.'
    }
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
    screenRecorderHotkey: 'Screen Recorder Hotkey:',
    screenRecorderHotkeyDesc: 'Set hotkey for custom area recording',
    darkModeHotkey: 'Theme Toggle Hotkey:',
    darkModeHotkeyDesc: 'Set hotkey to toggle system theme',
    wallpaperSwitcherHotkey: 'Wallpaper Switcher Hotkey:',
    wallpaperSwitcherHotkeyDesc: 'Set hotkey to open the wallpaper switcher',
    pluginHotkeyDesc: 'Set hotkey for the {plugin} plugin',
    register: 'Register',
    pressToSet: 'Press keys to set hotkey',
    registerSuccess: 'Hotkey registered',
    registerFailed: 'Hotkey registration failed',
    needMainKey: 'Hotkey must include a main key (e.g., A, 1, F1, Space)'
  },

  // Data Management
  dataManager: {
    title: 'Data Management',
    workspaceDir: 'Markdown Workspace:',
    workspaceDirDesc:
      'Set the Markdown file workspace. Plugins and settings remain available before it is set.',
    workspaceNotSet: 'Workspace not set',
    changeWorkspace: 'Choose Workspace',
    workspaceSuccess: 'Workspace set successfully',
    workspaceFailed: 'Failed to set workspace',
    snippetDir: 'App Data Directory:',
    snippetDirDesc:
      'Stores the database, app config, and default plugins. This is not the Markdown workspace.',
    changePath: 'Change Data Dir',
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
    restoreWarning:
      'Restoring data will replace the current database and requires restarting the app. Continue?',
    restoreSuccess: 'Data restored. App will restart.',
    pathWarning:
      'Changing database location will migrate data and restart the app. Continue?',
    pathSuccess: 'Path changed. App will restart.',
    warning: 'Warning',
    // Markdown Migration
    migration: 'Data Migration',
    migrationDesc:
      'Migrate data from database to Markdown files, similar to common Markdown note apps file management',
    migrationBtn: 'Migrate to Markdown',
    migrationFromFileBtn: 'Migrate from database file',
    migrationConfirm: 'Confirm Migration',
    migrationInfo: 'This operation will:',
    migrationStep1: 'Read all categories and fragments from database',
    migrationStep2:
      'Create corresponding folders and Markdown files in data directory',
    migrationStep3:
      'Generate workspace.json and cache.json configuration files',
    migrationStep4: "Write metadata to each file's Front Matter (for Git sync)",
    migrationStep5: 'Keep original database file unchanged',
    migrationWarning: 'Recommend backing up database before migration!',
    migrating: 'Migrating',
    migratingData: 'Migrating data...',
    migrationComplete: 'Migration Complete',
    migrationFailed: 'Migration Failed',
    totalCategories: 'Total Categories',
    totalFragments: 'Total Fragments',
    createdFolders: 'Created Folders',
    createdFiles: 'Created Files',
    failedFiles: 'Failed Files',
    outputPath: 'Output Path',
    failedFilesList: 'Failed Files List',
    nextSteps: 'Next Steps',
    nextStep1: 'Check Markdown files in output directory (with Front Matter)',
    nextStep2: 'Verify .snippets-code/workspace.json and cache.json',
    nextStep3: 'Files can be opened with any Markdown editor',
    nextStep4: 'Original database file is preserved, can rollback anytime',
    migrationCacheToFrontmatter: 'Write Metadata to Front Matter',
    migrationCacheToFrontmatterDesc:
      "Write cache.json metadata to each .md file's Front Matter for Git sync",
    migrationCacheToFrontmatterBtn: 'Write Front Matter',
    migrationCacheToFrontmatterSuccess: 'Front Matter written to {count} files',
    migrationCacheToFrontmatterFailed: 'Some files failed: {count}'
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
    iconSourceAutoDesc: 'Try multiple icon sources automatically (Recommended)',
    iconSourceGoogleDesc: 'Use Google service (High quality)',
    iconSourceYandexDesc: 'Use Yandex service (Wide coverage)',
    iconSourceWebsite: 'Website Direct',
    iconSourceWebsiteDesc: 'Fetch icon directly from website'
  },

  // Dialogs
  dialog: {
    updateBacklinks: {
      title: 'Update Backlinks',
      message:
        'Title changed from "{oldTitle}" to "{newTitle}". Found {count} fragment(s) referencing the old title. Update these references?',
      affectedFragments: 'Affected fragments:',
      occurrences: 'reference(s)',
      updating: 'Updating',
      successCount: 'Successfully updated {count} fragment(s)',
      failureCount: 'Failed {count}',
      confirm: 'Update References'
    }
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
    saveSuccess: 'Saved successfully',
    saveFailed: 'Save failed, please retry',
    loadFailed: 'Failed to load content, please retry',
    loadingEditor: 'Loading editor...',
    retry: 'Retry',
    deleteConfirm:
      'Delete folder "{name}"? All snippets inside will also be deleted.',
    deleteSuccess: 'Folder deleted',
    deleteFailed: 'Delete failed',
    convertType: 'Convert Type',
    convertToNote: 'Convert to Note',
    convertToCode: 'Convert to Code',
    convertConfirmTitle: 'Confirm Type Conversion',
    convertToNoteConfirm:
      'Converting code snippet to note will wrap the code in a code block. Continue?',
    convertToCodeConfirm:
      'Converting note to code snippet will lose all formatting and keep only plain text. Continue?',
    convertSuccess: 'Type conversion successful',
    convertFailed: 'Type conversion failed',
    unsavedChanges: 'You have unsaved changes. Do you want to save them?',
    discardChanges: 'Discard Changes',
    createNoteConfirm: 'Note "{name}" not found. Create a new note?',
    createContentTitle: 'New Fragment',
    createContentPlaceholder: 'Enter fragment title',
    emptyName: 'Category name cannot be empty',
    invalidNameChars: 'Category name cannot contain \\ / : * ? " < > |',
    duplicateName: 'Category name already exists',
    createSuccess: 'Category created successfully',
    createFailed: 'Failed to create category',
    emptyContentTitle: 'Content title cannot be empty',
    language: 'Language',
    framework: 'Framework',
    kind: 'Kind'
  },

  codeBlock: {
    editLanguageTitle: 'Edit code language',
    editLanguageMessage:
      'Enter language (e.g. ts, vue, flutter, bash), leave empty for auto detection',
    editLanguagePlaceholder: 'e.g. ts / vue / flutter / bash',
    invalidLanguage: 'Language only allows letters, numbers, #, +, ., _, -'
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
    deepSearch: 'Deep Search',
    deepSearchOn:
      'Deep search on: matching titles, content, notes, paths, and tags',
    deepSearchOff: 'Deep search off: matching titles only',
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
    title: 'Opening snippet workspace'
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
    scanningDesktopFiles: 'Scanning desktop files',
    loadingIcons: 'Loading icons',
    savingToDatabase: 'Saving to database',
    scanComplete:
      'Scan complete: {apps} apps, {bookmarks} bookmarks, {desktopFiles} desktop files'
  },

  // Pin Window
  pin: {
    togglePin: 'Unpin',
    pinWindow: 'Pin Window',
    resetZoom: 'Reset Zoom',
    copyImage: 'Copy Image',
    saveImage: 'Save Image',
    closePin: 'Close Pin',
    ocrResult: 'OCR Result',
    viewOriginal: 'View Original',
    recognizing: 'Recognizing',
    recognizeFailed: 'Recognition Failed',
    recognizeSuccess: 'Recognition Completed',
    noTextRecognized: 'No text recognized',
    copyText: 'Copy Text',
    translate: 'Translate',
    ocrLanguage: 'OCR Language',
    ocrLanguageAuto: 'Auto',
    ocrLanguageZh: 'Chinese',
    ocrLanguageZhTw: 'Traditional Chinese',
    ocrLanguageEn: 'English',
    ocrLanguageJa: 'Japanese',
    ocrLanguageKo: 'Korean',
    unsupportedTranslateLanguage:
      'Translation currently supports Chinese and English only.',
    recognizeAgain: 'Recognize Again',
    saveAsText: 'Save as Text',
    showRecords: 'Show Records',
    hideRecords: 'Hide Records',
    more: 'More',
    minimize: 'Minimize',
    maximize: 'Maximize',
    close: 'Close',
    screenshotPreview: 'Screenshot Preview',
    screenshotPrefix: 'Screenshot',
    copySuccess: 'Copied successfully',
    copyFailed: 'Failed to copy',
    saveSuccess: 'Saved successfully',
    saveFailed: 'Failed to save',
    translateSuccess: 'Translated successfully',
    translateFailed: 'Failed to translate',
    sourceText: 'Source',
    selectedText: 'Selected Text',
    translationResult: 'Translation',
    viewResult: 'View Result'
  },

  // Wallpaper Switcher Plugin
  wallpaperSwitcher: {
    title: 'Wallpaper Switcher',
    wallhavenTitle: 'Wallhaven Wallpapers',
    back: 'Back',
    close: 'Close',
    openWallhaven: 'Open Wallhaven wallpapers',
    sourceToggle: 'Wallpaper source switcher',
    categoryToggle: 'Wallpaper category switcher',
    unsupported:
      'Desktop wallpaper switching is not supported on this system. This plugin currently supports Windows only.',
    currentPreviewAlt: 'Current wallpaper preview',
    wallpaperPreviewAlt: 'Wallpaper preview',
    noCurrentWallpaper: 'No current wallpaper',
    currentWallpaper: 'Current wallpaper:',
    source: 'Source:',
    sourceShort: 'Source',
    resolution: 'Resolution:',
    nextSwitch: 'Next switch:',
    switchNow: 'Switch now',
    switching: 'Switching',
    setFixed: 'Set fixed',
    mode: 'Mode',
    fixedImage: 'Fixed image',
    localFolder: 'Local folder',
    wallhavenOnline: 'Wallhaven Online',
    selectImage: 'Select image',
    select: 'Select',
    scan: 'Scan',
    hot: 'Hot',
    toplist: 'Toplist',
    favorites: 'Favorites',
    hotWithLabel: 'Hot',
    toplistWithLabel: 'Toplist',
    favoritesWithLabel: 'Favorites',
    openOnlineGrid: 'Open online grid',
    screenMatch: 'Screen match',
    switchRules: 'Switch rules',
    enableSchedule: 'Scheduled switching',
    every: 'Every',
    minutes: 'minutes',
    type: 'Type',
    fitMode: 'Fit mode',
    fitFillCrop: 'Fill crop',
    fitContain: 'Fit',
    fitCenter: 'Center',
    autoRestore: 'Restore scheduled task on startup',
    cache: 'Cache',
    wallhavenCache: 'Wallhaven cache',
    clearing: 'Clearing',
    clearCache: 'Clear cache',
    opening: 'Opening',
    openCache: 'Open cache',
    saving: 'Saving',
    saveSettings: 'Save settings',
    searchPlaceholder: 'Search keyword',
    clear: 'Clear',
    refresh: 'Refresh',
    autoMatch: 'Auto match {resolution}',
    loadingWallhaven: 'Loading Wallhaven wallpapers...',
    retry: 'Retry',
    noWallpapers: 'No wallpapers available',
    preview: 'Preview',
    setWallpaper: 'Set wallpaper',
    setting: 'Setting',
    set: 'Set',
    download: 'Download',
    page: 'Page {page}',
    sourceNote: 'Source: {source} · SFW',
    prevPage: 'Previous',
    nextPage: 'Next',
    loadingPreview: 'Loading preview...',
    previewLoadFailed: 'Preview failed to load',
    downloadCache: 'Download cache',
    placeholders: {
      fixedImage: 'E:\\Wallpapers\\city.png',
      folder: 'E:\\Wallpapers'
    },
    folderStatus: {
      notScanned: 'Folder not scanned yet',
      selectFirst: 'Select a local wallpaper folder',
      detected: 'Detected {count} available images'
    },
    categories: {
      general: 'General',
      anime: 'Anime',
      people: 'People',
      nature: 'Nature'
    },
    time: {
      secondsLater: 'in {count} seconds',
      minutesLater: 'in {count} minutes'
    },
    messages: {
      settingsSaved: 'Wallpaper settings saved',
      fixedSet: 'Fixed wallpaper set',
      selectFolderFirst: 'Select a wallpaper folder first',
      noImagesInFolder: 'No available images in this folder',
      wallpaperSwitched: 'Wallpaper switched',
      fitApplied: 'Fit mode applied',
      noCurrentToFix: 'No current wallpaper to set as fixed',
      cacheCleared: 'Cache cleared',
      wallhavenNetworkError:
        'Wallhaven connection failed. Please try again later or check your proxy/network.',
      settingWallpaper: 'Setting wallpaper...',
      wallpaperSet: 'Wallpaper set',
      downloadingWallpaper: 'Downloading wallpaper...',
      wallpaperDownloaded: 'Wallpaper downloaded to cache',
      scheduleSwitchFailed: 'Scheduled switch failed'
    }
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
    readyToRestart: '{version} is ready and will take effect after restart.',
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
    line: 'Line',
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
    customColor: 'Custom Color',
    color: 'Color',
    lineWidth: 'Width',
    opacity: 'Opacity',
    fontSize: 'Font',
    mosaicSize: 'Size',
    engine: 'Engine',
    brush: 'Brush',
    delete: 'Delete',
    ocr: 'OCR',
    translate: 'Translate'
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
    showInExplorer: 'Show in folder',
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
    files: 'Files',
    tools: 'Tools',
    code: 'Snippets',
    notes: 'Notes',
    search: 'Search',
    total: 'items',
    copyCode: 'Copy code',
    copySuccess: 'Code copied',
    copyFailed: 'Failed to copy code',
    backToSearch: 'Back to Search',
    backToResults: 'Back to Results'
  },

  configSearch: {
    emptyTitle: 'Search Current Workspace',
    emptyText:
      'Type to search snippets, notes, files, tags, and commands. Results open inside this config window.',
    folderResultContent: 'Go to folder',
    navigate: 'Navigate',
    open: 'Open'
  },

  searchPreview: {
    expandPreview: 'Expand Preview',
    collapsePreview: 'Collapse Preview',
    availableActions: 'Available Actions',
    url: 'URL',
    path: 'Path',
    createdAt: 'Created At',
    size: 'Size',
    open: 'Open',
    revealFileLocation: 'Open File Location',
    openWithOtherWays: 'Open With Other Apps',
    pasteContent: 'Paste Content',
    copyCode: 'Copy',
    openInConfig: 'View in Config',
    name: 'Name',
    type: 'Type',
    category: 'Category',
    tags: 'Tags',
    imagePreviewFailed: 'Image preview failed to load',
    noPreviewItem: 'No preview item available',
    selectResultHint: 'Select a result on the left to see details here.',
    loading: 'Loading preview...',
    noPreviewContent: 'No preview content available',
    noContent: 'No content available',
    previewLoadFailed: 'Failed to load file preview',
    openApp: 'Open App',
    openAppAsAdmin: 'Open App as Administrator',
    openAppFolder: 'Open App Folder',
    openWebpage: 'Open Webpage',
    copyUrl: 'Copy URL',
    search: 'Search'
  },

  // Titlebar
  titlebar: {
    more: 'More',
    userCenter: 'User Center',
    collapseFolders: 'Collapse folders',
    expandFolders: 'Expand folders',
    collapseSnippetList: 'Collapse snippet list',
    expandSnippetList: 'Expand snippet list',
    checkUpdate: 'Check Update',
    pinWindow: 'Pin Window',
    unpinWindow: 'Unpin Window',
    settings: 'Settings',
    minimize: 'Minimize',
    maximize: 'Maximize',
    restore: 'Restore',
    close: 'Close',
    // Git status
    gitSync: 'Git Sync',
    gitSyncing: 'Syncing...',
    gitSynced: 'Synced',
    gitHasChanges: '{count} files pending',
    gitError: 'Sync error',
    gitDisabled: 'Git sync disabled',
    gitLastSync: 'Last sync: {time}',
    goToGitSettings: 'Click to view Git sync settings',
    quickSearch: 'Quick Search',
    quickSearchPlaceholder:
      'Search snippets, notes, files, tags and commands...',
    workspace: 'Workspace',
    openWorkspace: 'Open Workspace'
  },

  // User Center
  userCenter: {
    title: 'User Center',
    subtitle: 'View workspace, sync status, and snippet workspace details',
    appVersion: 'App Version',
    workspaceRoot: 'Workspace Root',
    notSet: 'Not Set',
    gitSyncStatus: 'Git Sync Status',
    configured: 'Configured',
    notConfigured: 'Not Configured',
    gitAccount: 'Git Account',
    gitEmail: 'Git Email',
    gitToken: 'GitHub Token',
    gitRemote: 'Remote Repository',
    gitConfigSection: 'Git Required Config',
    gitConfigSectionDesc:
      'After filling these fields, the Git Sync tab will appear in Settings. Workspace must be a valid Git repo with remote configured.',
    gitPluginUnavailableTitle: 'Git Sync Plugin Unavailable',
    gitPluginUnavailableDesc:
      'Install and enable the Git Sync plugin to show the required Git configuration here.',
    goToPluginSettings: 'Go to Plugin Settings',
    workspaceSetupTitle: 'Set Workspace First',
    workspaceSetupDesc:
      'Git config depends on the workspace directory. After setting a workspace, Git required config will appear in User Center.',
    goToWorkspaceSettings: 'Set Workspace',
    saveGitConfig: 'Save Git Config',
    gitConfigSaved: 'Git config saved',
    gitConfigSaveFailed: 'Failed to save Git config',
    gitConfigSaveWarningName: 'Please enter Git username',
    gitConfigSaveWarningEmail: 'Please enter Git email',
    gitConfigSaveWarningRemote: 'Please enter remote repository URL',
    gitSyncTitle: 'Git Sync',
    gitSyncDesc:
      'Use Git sync to synchronize notes to GitHub repository, with auto sync and pull on start support',
    gitSyncConfigured:
      'Git sync is configured, you can manage sync options in settings',
    goToSettings: 'Go to Settings',
    manageSettings: 'Manage Settings',
    quickActions: 'Quick Actions',
    openDataDir: 'Open Data Directory',
    openSettings: 'Open Settings',
    about: 'About',
    appDescription:
      'Snippets Code - A local-first frontend snippet and knowledge asset workspace',
    viewOnGitHub: 'View on GitHub',
    checkUpdate: 'Check Update',
    workspaceNotSet: 'Workspace not set',
    openDirFailed: 'Failed to open directory'
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

  // Editor Search
  editor: {
    searchPlaceholder: 'Find in document...',
    nextMatch: 'Next Match',
    previousMatch: 'Previous Match',
    matchCase: 'Match Case',
    closeSearch: 'Close Search'
  },

  // Backlinks
  backlinks: {
    title: 'Backlinks',
    togglePanel: 'Toggle Backlinks Panel',
    linkedReferences: 'Linked References',
    unlinkedMentions: 'Unlinked Mentions',
    noLinkedReferences: 'No other notes link to this file',
    noUnlinkedMentions: 'No other notes mention this file name',
    occurrences: ' references',
    searchPlaceholder: 'Search backlinks...',
    deleteWithBacklinks: 'Delete Fragment with Backlinks',
    deleteMessage:
      'Fragment "{title}" is referenced by {count} other fragment(s). These references will become invalid after deletion.',
    deleteOptions: 'Delete Options:',
    deleteOnly: 'Delete fragment only',
    deleteAndRemoveLinks: 'Delete fragment and remove reference links',
    updateSuccess: 'Successfully updated {count} fragment(s)',
    updatePartialFailed: 'Updated {success}, failed {failed}',
    deleteWithUpdate: 'Fragment deleted and {count} backlink(s) updated',
    deleteWithPartialUpdate:
      'Fragment deleted, {success} backlink(s) updated, {failed} failed'
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

  screenRecorder: {
    title: 'Screen Recorder',
    dragToSelect: 'Drag to select recording area',
    pickRegionHint:
      'Click Pick Region, then hold and drag on the screen to choose the recording area.',
    pickRegion: 'Pick Region',
    picking: 'Picking...',
    width: 'W',
    height: 'H',
    start: 'Start Recording',
    pause: 'Pause',
    resume: 'Resume',
    stop: 'Stop',
    cancel: 'Cancel',
    export: 'Export',
    exportSettings: 'Export Settings',
    exporting: 'Compressing and exporting...',
    exportDone: 'Export Complete',
    format: 'Format',
    fps: 'Frame Rate',
    quality: 'Quality',
    qualityHigh: 'High',
    qualityStandard: 'Standard',
    qualitySmall: 'Small File',
    showCursor: 'Show Cursor',
    showCursorOn: 'Show cursor while recording',
    showCursorOff: 'Hide cursor while recording',
    savePath: 'Save Path',
    openFile: 'Open File',
    openFolder: 'Open Folder',
    recordAgain: 'Record Again',
    ffmpegMissing:
      'FFmpeg was not found. Install or configure FFmpeg before recording.'
  },

  // Search Syntax Helper
  searchSyntax: {
    typeFilter: 'Type Filter',
    typeCodeDesc: 'Filter code snippets',
    typeNoteDesc: 'Filter notes',
    languageDesc: 'Filter by language',
    frameworkDesc: 'Filter by frontend framework',
    kindDesc: 'Filter by semantic snippet kind',
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
    defaultEngineDesc:
      'Set default engine for screenshot and selection translation',
    google: 'Google Translate',
    bing: 'Bing Translate',
    offline: 'Offline Translate',
    engineSaved: 'Translation engine saved',
    engineSaveFailed: 'Failed to save translation engine',
    offlineModel: 'Offline Model',
    offlineModelDesc:
      'Download offline translation model for use without network',
    modelLoading: 'Loading model...',
    modelReady: 'Model ready',
    modelActivated: 'Activated (lazy load)',
    modelCached: 'Model cached (not activated)',
    modelNotLoaded: 'Model not loaded',
    runtimeMissing: 'Runtime not installed',
    installRuntime: 'Install Runtime',
    runtimeMarketplaceMissing:
      'translation-offline-runtime resource package was not found in the marketplace',
    runtimeInstallSuccess: 'Offline translation runtime installed',
    runtimeInstallFailed: 'Failed to install offline translation runtime',
    runtimeInstallVerifyFailed:
      'Runtime files were still missing after installation. Please check the network and retry',
    runtimeMissingInstallFirst:
      'Please install the offline translation runtime first',
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
