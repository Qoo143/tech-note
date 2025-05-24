import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tech-note/',
  srcDir: 'docs',
  head: [["link", { rel: 'icon', href: "/tech-note/logo.svg" }]],
  title: "個人技術筆記",
  description: "紀錄平時學習的紀錄",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主頁', link: './docs/index.md' },
      {
        text: 'Javascript', items: [
          { text: 'Array', link: '/array-method.md' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],

      },
      {
        text: 'Javascript',
        items: [
          { text: 'Array常用方法', link: '/array-method.md' },

        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: "Copyright @ 2025-present Qoo143"
    }
  }
})
