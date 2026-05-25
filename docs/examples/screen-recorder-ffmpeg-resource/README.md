# Screen Recorder FFmpeg Resource Package

This is a resource-only local plugin package for the built-in `screen-recorder`
plugin. It keeps the FFmpeg executable out of the core installer while still
allowing MP4 and GIF export to be installed on demand.

Expected installed layout:

```text
screen-recorder-ffmpeg/
  plugin.json
  resources/
    ffmpeg/
      ffmpeg.exe
      *.dll
```

During development, run:

```bash
pnpm ffmpeg:install
```

This downloads the Windows GPL FFmpeg build used by the recorder to:

```text
src-tauri/resources/ffmpeg/ffmpeg.exe
```

The installer uses BtbN's shared Windows build so the generated plugin
repository can stay within GitHub's 100 MB per-file limit. The companion DLLs
are copied with `ffmpeg.exe` during packaging.

Then generate an installable resource package directory:

```bash
pnpm ffmpeg:package
```

The package is written to `dist-plugin-packages/screen-recorder-ffmpeg`.
Install that directory from the app's plugin settings page. To publish the
generated package to `GigaPuddings/snippets-code-plugin-screen-recorder-ffmpeg`
and create the matching plugin repository tag, run:

```bash
pnpm ffmpeg:release
```

The app release script does not upload the FFmpeg binary implicitly; resource
publishing is explicit so normal app tags do not unexpectedly push large
third-party executables.

At runtime the recorder backend searches these plugin resource roots first:

```text
<app-data>/plugins/screen-recorder/resources/ffmpeg/ffmpeg.exe
<app-data>/plugins/screen-recorder-ffmpeg/resources/ffmpeg/ffmpeg.exe
```
