import { existsSync, mkdirSync, rmSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const FFMPEG_PATH = resolve(ROOT, 'src-tauri/resources/ffmpeg/ffmpeg.exe')
const FFPROBE_PATH = resolve(ROOT, 'src-tauri/resources/ffmpeg/ffprobe.exe')
const OUTPUT_DIR = resolve(ROOT, '_tmp/screen-recorder-smoke')
const WIDTH = 384
const HEIGHT = 148

function main() {
  assertExecutable(FFMPEG_PATH, 'ffmpeg.exe')
  assertExecutable(FFPROBE_PATH, 'ffprobe.exe')

  rmSync(OUTPUT_DIR, { recursive: true, force: true })
  mkdirSync(OUTPUT_DIR, { recursive: true })

  const defaultMp4 = join(OUTPUT_DIR, 'default.mp4')
  const compressedMp4 = join(OUTPUT_DIR, 'compressed.mp4')
  const palette = join(OUTPUT_DIR, 'palette.png')
  const compressedGif = join(OUTPUT_DIR, 'compressed.gif')
  const desktopCapture = join(OUTPUT_DIR, 'desktop-capture.mp4')

  run(FFMPEG_PATH, [
    '-y',
    '-hide_banner',
    '-f',
    'lavfi',
    '-i',
    `testsrc2=size=${WIDTH}x${HEIGHT}:rate=30`,
    '-t',
    '2',
    '-an',
    '-c:v',
    'libx264',
    '-preset',
    'ultrafast',
    '-crf',
    '18',
    '-pix_fmt',
    'yuv420p',
    defaultMp4
  ])

  run(FFMPEG_PATH, [
    '-y',
    '-hide_banner',
    '-i',
    defaultMp4,
    '-r',
    '15',
    '-an',
    '-c:v',
    'libx264',
    '-preset',
    'medium',
    '-crf',
    '34',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    compressedMp4
  ])

  run(FFMPEG_PATH, [
    '-y',
    '-hide_banner',
    '-i',
    defaultMp4,
    '-vf',
    'fps=15,palettegen=max_colors=96',
    palette
  ])

  run(FFMPEG_PATH, [
    '-y',
    '-hide_banner',
    '-i',
    defaultMp4,
    '-i',
    palette,
    '-lavfi',
    'fps=15[x];[x][1:v]paletteuse=dither=bayer',
    compressedGif
  ])

  const defaultBytes = statSync(defaultMp4).size
  const compressedBytes = statSync(compressedMp4).size
  const gifBytes = statSync(compressedGif).size
  const mp4Size = probeSize(compressedMp4)
  const gifSize = probeSize(compressedGif)

  assert(mp4Size === `${WIDTH}x${HEIGHT}`, `MP4 分辨率错误: ${mp4Size}`)
  assert(gifSize === `${WIDTH}x${HEIGHT}`, `GIF 分辨率错误: ${gifSize}`)
  assert(
    compressedBytes < defaultBytes,
    `MP4 压缩无效: default=${defaultBytes}, compressed=${compressedBytes}`
  )

  const result = {
    defaultMp4Bytes: defaultBytes,
    compressedMp4Bytes: compressedBytes,
    gifBytes,
    mp4Size,
    gifSize
  }

  if (process.platform === 'win32') {
    run(FFMPEG_PATH, [
      '-y',
      '-hide_banner',
      '-f',
      'gdigrab',
      '-framerate',
      '15',
      '-offset_x',
      '0',
      '-offset_y',
      '0',
      '-video_size',
      `${WIDTH}x${HEIGHT}`,
      '-draw_mouse',
      '1',
      '-t',
      '1',
      '-i',
      'desktop',
      '-an',
      '-c:v',
      'libx264',
      '-preset',
      'ultrafast',
      '-crf',
      '24',
      '-pix_fmt',
      'yuv420p',
      desktopCapture
    ])
    result.desktopCaptureBytes = statSync(desktopCapture).size
    result.desktopCaptureSize = probeSize(desktopCapture)
    assert(
      result.desktopCaptureSize === `${WIDTH}x${HEIGHT}`,
      `桌面录制分辨率错误: ${result.desktopCaptureSize}`
    )
  }

  console.log(`[ScreenRecorderSmoke] ${JSON.stringify(result)}`)
}

function assertExecutable(path, name) {
  if (!existsSync(path)) {
    throw new Error(`未找到 ${name}，请先运行 pnpm ffmpeg:install`)
  }
}

function probeSize(filePath) {
  return run(FFPROBE_PATH, [
    '-v',
    'error',
    '-select_streams',
    'v:0',
    '-show_entries',
    'stream=width,height',
    '-of',
    'csv=s=x:p=0',
    filePath
  ]).trim()
}

function run(command, args) {
  const output = spawnSync(command, args, {
    cwd: ROOT,
    encoding: 'utf8'
  })
  if (output.status !== 0) {
    throw new Error(
      `${command} ${args.join(' ')} failed\n${output.stderr || output.stdout}`
    )
  }
  return output.stdout
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

main()
