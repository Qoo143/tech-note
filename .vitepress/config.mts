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
      { text: '主頁', link: './' },
      {
        text: 'Javascript', items: [
          //連接到Array資料夾的第一個文件
          { text: 'Array', link: 'Javascript/Array/array-method' },
          //連接到OOP物件導向資料夾的第一個文件
          { text: 'OOP', link: 'Javascript/OOP/new' },
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
        collapsed: true, // 預設折疊狀態
        items: [
          { text: 'Array常用方法', link: 'Javascript/array-method' },
          { text: 'Array常用方法', link: 'Javascript/array-method' },

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
