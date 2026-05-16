export async function activate(context) {
  const { h, defineComponent } = context.ui;

  const Panel = defineComponent({
    name: 'HelloLocalPluginPanel',
    setup() {
      return () => h('div', {
        style: {
          padding: '16px',
          lineHeight: '1.7'
        }
      }, [
        h('h2', {
          style: {
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '8px'
          }
        }, 'Hello Local Plugin'),
        h('p', 'This panel was registered by a local plugin frontend entry.'),
        h('p', `Package path: ${context.packagePath}`)
      ]);
    }
  });

  context.registerSettingsTab({
    id: 'helloLocalPlugin',
    label: 'Hello Plugin',
    component: Panel
  });

  context.registerRoute({
    target: 'layout',
    path: '/hello-local-plugin',
    name: 'HelloLocalPlugin',
    component: Panel
  });

  context.registerSearchProvider({
    source: 'hello-local-plugin',
    async search(query) {
      if (!query.toLowerCase().includes('hello')) {
        return [];
      }

      return [
        {
          source: 'hello-local-plugin',
          items: [
            {
              id: 'hello-local-plugin-result',
              title: 'Hello Local Plugin',
              content: 'Local plugin search provider is active.',
              summarize: 'hello-local-plugin',
              icon: ''
            }
          ]
        }
      ];
    }
  });
}
