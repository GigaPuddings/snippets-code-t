import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { fileURLToPath } from 'node:url';

const collections = ['lucide', 'simple-icons'];
const customIcons = fileURLToPath(
  new URL('../src/assets/icons/', import.meta.url)
);

// Share the exact same offline icon pipeline between the app and plugin builds.
export function createIconPlugins() {
  return [
    {
      name: 'app-icon-collections',
      enforce: 'pre',
      resolveId(id) {
        const match = id.match(/^(?:~icons|virtual:icons)\/([^/]+)\//);
        if (match && ![...collections, 'app'].includes(match[1])) {
          throw new Error(
            `Unsupported icon collection: ${match[1]}. Use Lucide for UI icons.`
          );
        }
      }
    },
    Icons({
      compiler: 'vue3',
      autoInstall: false,
      scale: 1,
      customCollections: { app: FileSystemIconLoader(customIcons) },
      iconCustomizer(collection, _icon, props) {
        props.class = `app-icon app-icon--${collection}`;
        props['aria-hidden'] = 'true';
        props.focusable = 'false';
        if (collection === 'lucide') props.fill = 'none';
      }
    })
  ];
}

export function createIconResolver() {
  return IconsResolver({
    enabledCollections: collections,
    customCollections: ['app']
  });
}
