module.exports = {
  base: '/vue-monorepo-boilerplate/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-monorepo-boilerplate',
      description: 'Fullstack Vue App Monorepo Boilerplate'
    }
  },
  serviceWorker: true,
  themeConfig: {
    repo: 'slanatech/vue-monorepo-boilerplate',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 1,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vue-monorepo-boilerplate/blob/dev/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/guide/': [
            '/guide/'
          ]
        }
      }
    }
  }
}
