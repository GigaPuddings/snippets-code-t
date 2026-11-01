/** Copy the original image pixels, independent of the editor's display scale. */
export async function copyImageToClipboard(src: string): Promise<void> {
  if (!navigator.clipboard?.write || typeof ClipboardItem === 'undefined')
    throw new Error('Image clipboard unavailable');
  // Start the clipboard operation during the menu click's user activation.
  return navigator.clipboard.write([
    new ClipboardItem({ 'image/png': imagePng(src) })
  ]);
}

async function imagePng(src: string): Promise<Blob> {
  if (!src) throw new Error('Missing image source');
  const image = new Image();
  // Reload with CORS enabled so local asset URLs and permitted remote images
  // can be drawn without tainting the canvas used for the clipboard.
  image.crossOrigin = 'anonymous';
  image.src = src;
  await image.decode();
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Image canvas unavailable');
  context.drawImage(image, 0, 0);
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) =>
        blob ? resolve(blob) : reject(new Error('Image encoding failed')),
      'image/png'
    );
  });
}
