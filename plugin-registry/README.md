# Plugin Registry

This directory stores installable plugin registry assets. It is separate from
`docs/` so project documentation can remain focused on architecture, standards,
and development notes.

## Layout

- `marketplace/`: marketplace index files consumed by the app.
- `packages/`: official plugin package manifests and built frontend runtimes.
- `examples/`: local example packages and resource package templates.

Large runtime resources, such as OCR, FFmpeg, or local AI binaries, must not be
committed here. They are distributed through dedicated plugin release assets.
