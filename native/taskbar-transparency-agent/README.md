# Taskbar Transparency Agent

This native component is a GPL-3.0-or-later backend for the wallpaper switcher
taskbar transparency option.

It is intentionally isolated from the main Apache-2.0 Tauri application because
the practical Windows 11 taskbar transparency approaches used by the open-source
community, especially TranslucentTB and Windhawk Windows 11 Taskbar Styler, rely
on Explorer/XAML integration and are GPL licensed.

Current behavior:

- Build a small Rust `cdylib`.
- Inject it into `explorer.exe`.
- Keep a lightweight monitor thread inside Explorer so repeated setting changes
  still work after the DLL has already been loaded.
- Execute the legacy `SetWindowCompositionAttribute` transparency operation from
  inside Explorer as a compatibility layer.
- Register a XAML Diagnostics TAP object and watch the Explorer XAML VisualTree.
- Apply the Windows 11 taskbar styling rule used by Windhawk's
  `SimplyTransparent` theme:
  - `Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground > Grid > Rectangle#BackgroundFill`
    -> `Fill=Transparent`
  - `Rectangle#BackgroundStroke` -> `Fill=Transparent`
- Keep detailed logs in `%LOCALAPPDATA%\snippets-code\taskbar-transparency-agent.log`.
