# Taskbar Transparency Agent

This native component is a GPL-3.0-or-later backend for the wallpaper switcher
taskbar transparency option.

It is intentionally isolated from the main Apache-2.0 Tauri application because
the practical Windows 11 taskbar transparency approaches used by the open-source
community, especially TranslucentTB and Windhawk Windows 11 Taskbar Styler, rely
on Explorer/XAML integration and are GPL licensed.

Current phase:

- Build a small Rust `cdylib`.
- Inject it into `explorer.exe`.
- Execute the transparency operation from inside Explorer.
- Keep detailed logs in `%LOCALAPPDATA%\snippets-code\taskbar-transparency-agent.log`.

Next phase:

- Port the minimal Windows 11 XAML styling rule used by Windhawk's
  `SimplyTransparent` theme:
  - `Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground > Grid > Rectangle#BackgroundFill`
    -> `Fill=Transparent`
  - `Rectangle#BackgroundStroke` -> `Fill=Transparent`

The current first phase is deliberately small and exists to validate the
injection/loading pipeline before adding the XAML VisualTree watcher.
