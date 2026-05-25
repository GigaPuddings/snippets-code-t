# Screen Recorder

Custom area recording for Snippets Code.

## Features

- Drag to select a recording region.
- Start, pause, resume, stop, and cancel recording.
- Export MP4 or GIF without a watermark.
- Export compression keeps the selected pixel dimensions unchanged.

## FFmpeg

Recording depends on FFmpeg. The app looks for FFmpeg in this order:

1. `SNIPPETS_FFMPEG_PATH` or `FFMPEG_PATH`
2. `screen-recorder` plugin resources
3. `screen-recorder-ffmpeg` resource plugin
4. Development resource folders
5. System `PATH`

Place `ffmpeg.exe` under `resources/ffmpeg/ffmpeg.exe` or
`resources/ffmpeg/bin/ffmpeg.exe` when packaging it as a plugin resource.
For the official resource package workflow, run `pnpm ffmpeg:install` and then
`pnpm ffmpeg:package`.
