# Local AI Settings Density QA

## Comparison Target

- Source visual truth:
  - `C:\Users\zero\AppData\Local\Temp\codex-clipboard-a80acd61-f000-476b-83d9-a55afcff7279.png`
  - `C:\Users\zero\AppData\Local\Temp\codex-clipboard-814e9324-2c44-4282-ae62-cb3d3aa7da87.png`
- Implementation screenshots:
  - `C:\Users\zero\AppData\Local\Temp\snippets-local-ai-density-20260831-local-ai-density-implementation-top.png`
  - `C:\Users\zero\AppData\Local\Temp\snippets-local-ai-density-20260831-local-ai-density-implementation-lower.png`
  - `C:\Users\zero\AppData\Local\Temp\snippets-local-ai-density-20260831-local-ai-density-implementation-bottom.png`
  - `C:\Users\zero\AppData\Local\Temp\snippets-local-ai-density-20260831-local-ai-density-implementation-dark.png`
- Viewport: `1600 x 900` CSS pixels, device scale factor `1`.
- Source pixels: `2561 x 1529`; implementation pixels: `1600 x 900`.
- Normalization: the source main-content region was cropped from `x=440, y=50`, then both sides were scaled to a 1000-pixel comparison width.
- State: Simplified Chinese, light theme, runtime/model ready, service stopped. Dark theme was checked separately.

## Evidence

- Full-view comparison: `C:\Users\zero\AppData\Local\Temp\snippets-local-ai-density-20260831-local-ai-density-comparison-top.png`
- Focused lower-section comparison: `C:\Users\zero\AppData\Local\Temp\snippets-local-ai-density-20260831-local-ai-density-comparison-lower.png`
- Focused regions were required because the model rows, number controls, switch rows, and section rhythm were too small to judge reliably from one full-page image.

## Fidelity Review

- Typography: existing family, size, weight, line height, and copy are unchanged.
- Spacing and layout: non-status section gaps are 20px; model rows render at 58-59px on desktop; number and switch rows render at 40px minimum.
- Controls: model controls are capped at 460px; numeric controls render at `120 x 32px`; focus uses the theme primary border and disabled opacity remains 0.6.
- Colors and tokens: existing panel, content, border, primary, success, and danger tokens are unchanged. Dark inputs render on the existing dark content token.
- Assets: this settings page has no raster imagery; existing icon and switch components are unchanged.
- Copy and behavior: labels, descriptions, values, bindings, service controls, and save behavior are unchanged.

## Responsive Verification

- Checked `1440 x 900`, `1600 x 900`, `1920 x 1080`, `1180 x 800`, `900 x 760`, `760 x 720`, and `640 x 720`.
- Horizontal overflow: 0px at every checked viewport.
- Browser console: 0 warnings and 0 errors on the final preview tab.
- Primary checks: internal scrolling, input focus, disabled controls, dark theme, and desktop/narrow layout transitions.

## Comparison History

- First pass found a P2 responsive issue: the 460px desktop flex basis became vertical height after rows stacked below 1180px.
- Fix: override the field control with `flex: none` at the stacked breakpoint and remove the max-width restriction at the narrow breakpoint.
- Post-fix evidence: stacked model rows render at 114-115px instead of 542-543px, with no horizontal overflow.

## Findings

- No actionable P0, P1, or P2 visual differences remain for the requested density adjustment.

final result: passed
