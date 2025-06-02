import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tech-note/',
  srcDir: 'docs',
  head: [["link", { rel: 'icon', href: "/tech-note/logo.svg" }]],
  title: "全端開發筆記",
  description: "從前端到後端的完整技術學習筆記",
  ignoreDeadLinks: true, // 暫時忽略死連結檢查，避免建構失敗

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 主頁', link: '/' },
      {
        text: '🎨 前端',
        items: [
          { text: 'HTML', link: '/Frontend/HTML/' },
          { text: 'CSS', link: '/Frontend/CSS/' },
          { text: 'JavaScript', link: '/Frontend/JavaScript/' },
          { text: 'Vue', link: '/Frontend/Vue/' },
          { text: 'TypeScript', link: '/Frontend/TypeScript/' }
        ]
      },
      {
        text: '⚙️ 後端',
        items: [
          { text: 'Node.js', link: '/Backend/NodeJS/' },
          { text: 'PHP', link: '/Backend/PHP/' },
          { text: '資料庫', link: '/Backend/Database/' },
          { text: 'API 設計', link: '/Backend/API/' }
        ]
      },
      {
        text: '🔧 工具與優化',
        items: [
          { text: '建構工具', link: '/Tools/BuildTools/' },
          { text: '狀態管理', link: '/Tools/StateManagement/' },
          { text: '效能優化', link: '/Tools/Performance/' },
          { text: '測試', link: '/Tools/Testing/' }
        ]
      },
      {
        text: '🚀 部署與維運',
        items: [
          { text: '部署', link: '/DevOps/Deployment/' },
          { text: '資安', link: '/DevOps/Security/' },
          { text: '監控', link: '/DevOps/Monitoring/' },
          { text: '版本控制', link: '/DevOps/VersionControl/' }
        ]
      }
    ],

    sidebar: {
      // 前端側邊欄
      '/Frontend/': [
        {
          text: '🌐 HTML',
          collapsed: true,
          items: [
            { text: '概述', link: '/Frontend/HTML/' },
            { text: '語意化標籤', link: '/Frontend/HTML/semantic-html' },
            { text: '表單處理', link: '/Frontend/HTML/forms' },
            { text: '無障礙設計', link: '/Frontend/HTML/accessibility' },
            { text: 'SEO 優化', link: '/Frontend/HTML/seo' }
          ]
        },
        {
          text: '🎨 CSS',
          collapsed: true,
          items: [
            { text: '概述', link: '/Frontend/CSS/' },
            { text: 'CSS 基礎', link: '/Frontend/CSS/Basics/' },
            { text: 'SCSS 預處理器', link: '/Frontend/CSS/SCSS/' },
            { text: 'Tailwind CSS', link: '/Frontend/CSS/Tailwind/' },
            { text: '佈局技術', link: '/Frontend/CSS/Layout/' },
            { text: '動畫效果', link: '/Frontend/CSS/Animation/' }
          ]
        },
        {
          text: '📝 JavaScript',
          collapsed: true,
          items: [
            { text: '概述', link: '/Frontend/JavaScript/' },
            {
              text: '基礎語法', collapsed: true,
              items: [
                { text: '陣列方法', link: '/Frontend/JavaScript/Basics/Array/array-method' },
              ]
            },
            { text: 'ES6+ 特性', link: '/Frontend/JavaScript/es6-plus' },
            {
              text: '物件導向', collapsed: true,
              items: [
                { text: 'new', link: '/Frontend/JavaScript/OOP/new' },
                { text: 'prototype', link: '/Frontend/JavaScript/OOP/prototype' },
              ]
            },
            { text: 'DOM 操作', link: '/Frontend/JavaScript/dom' },
            { text: '非同步處理', link: '/Frontend/JavaScript/async' },
            { text: '模組系統', link: '/Frontend/JavaScript/modules' }
          ]
        },
        {
          text: '💚 Vue',
          collapsed: true,
          items: [
            { text: '概述', link: '/Frontend/Vue/' },
            { text: 'Vue 基礎', link: '/Frontend/Vue/basics' },
            { text: '元件系統', link: '/Frontend/Vue/components' },
            { text: 'Composition API', link: '/Frontend/Vue/composition-api' },
            { text: 'Vue Router', link: '/Frontend/Vue/router' },
            { text: '狀態管理', link: '/Frontend/Vue/state-management' },
            { text: '生命週期', link: '/Frontend/Vue/lifecycle' }
          ]
        },
        {
          text: '🔷 TypeScript',
          collapsed: true,
          items: [
            { text: '概述', link: '/Frontend/TypeScript/' },
            { text: '基礎類型', link: '/Frontend/TypeScript/basics' },
            { text: '介面與類型', link: '/Frontend/TypeScript/interfaces' },
            { text: '泛型', link: '/Frontend/TypeScript/generics' },
            { text: 'Vue 與 TypeScript', link: '/Frontend/TypeScript/vue-with-ts' }
          ]
        }
      ],

      // 後端側邊欄
      '/Backend/': [
        {
          text: '🟢 Node.js',
          collapsed: true,
          items: [
            { text: '概述', link: '/Backend/NodeJS/' },
            { text: 'Node.js 基礎', link: '/Backend/NodeJS/basics' },
            { text: 'Express 框架', link: '/Backend/NodeJS/express' },
            { text: '中介軟體', link: '/Backend/NodeJS/middleware' },
            { text: '檔案操作', link: '/Backend/NodeJS/file-system' },
            { text: 'NPM 套件管理', link: '/Backend/NodeJS/npm' }
          ]
        },
        {
          text: '🐘 PHP',
          collapsed: true,
          items: [
            { text: '概述', link: '/Backend/PHP/' },
            { text: 'PHP 基礎', link: '/Backend/PHP/basics' },
            { text: 'Laravel 框架', link: '/Backend/PHP/laravel' },
            { text: 'Composer', link: '/Backend/PHP/composer' }
          ]
        },
        {
          text: '🗄️ 資料庫',
          collapsed: true,
          items: [
            { text: '概述', link: '/Backend/Database/' },
            { text: 'MySQL', link: '/Backend/Database/mysql' },
            { text: 'MongoDB', link: '/Backend/Database/mongodb' },
            { text: 'Redis', link: '/Backend/Database/redis' },
            { text: '資料庫設計', link: '/Backend/Database/design-patterns' },
            { text: 'ORM 工具', link: '/Backend/Database/orm' }
          ]
        },
        {
          text: '🔌 API 設計',
          collapsed: true,
          items: [
            { text: '概述', link: '/Backend/API/' },
            { text: 'RESTful API', link: '/Backend/API/rest-api' },
            { text: 'GraphQL', link: '/Backend/API/graphql' },
            { text: '身份驗證', link: '/Backend/API/authentication' },
            { text: 'API 文檔', link: '/Backend/API/documentation' }
          ]
        }
      ],

      // 工具與優化側邊欄
      '/Tools/': [
        {
          text: '🔨 建構工具',
          collapsed: true,
          items: [
            { text: '概述', link: '/Tools/BuildTools/' },
            { text: 'Vite', link: '/Tools/BuildTools/vite' },
            { text: 'Webpack', link: '/Tools/BuildTools/webpack' },
            { text: 'Rollup', link: '/Tools/BuildTools/rollup' },
            { text: '打包優化', link: '/Tools/BuildTools/optimization' }
          ]
        },
        {
          text: '📦 狀態管理',
          collapsed: true,
          items: [
            { text: '概述', link: '/Tools/StateManagement/' },
            { text: 'Pinia', link: '/Tools/StateManagement/pinia' },
            { text: 'Vuex', link: '/Tools/StateManagement/vuex' },
            { text: '狀態管理模式', link: '/Tools/StateManagement/patterns' }
          ]
        },
        {
          text: '⚡ 效能優化',
          collapsed: true,
          items: [
            { text: '概述', link: '/Tools/Performance/' },
            { text: '前端優化', link: '/Tools/Performance/frontend' },
            { text: '後端優化', link: '/Tools/Performance/backend' },
            { text: '資料庫優化', link: '/Tools/Performance/database' },
            { text: '快取策略', link: '/Tools/Performance/caching' },
            { text: '效能監控', link: '/Tools/Performance/monitoring' }
          ]
        },
        {
          text: '🧪 測試',
          collapsed: true,
          items: [
            { text: '概述', link: '/Tools/Testing/' },
            { text: '單元測試', link: '/Tools/Testing/unit-testing' },
            { text: '整合測試', link: '/Tools/Testing/integration-testing' },
            { text: 'E2E 測試', link: '/Tools/Testing/e2e-testing' },
            { text: '效能測試', link: '/Tools/Testing/performance-testing' }
          ]
        }
      ],

      // 部署與維運側邊欄
      '/DevOps/': [
        {
          text: '🚀 部署',
          collapsed: true,
          items: [
            { text: '概述', link: '/DevOps/Deployment/' },
            { text: 'Vercel 部署', link: '/DevOps/Deployment/vercel' },
            { text: 'Netlify 部署', link: '/DevOps/Deployment/netlify' },
            { text: 'Docker 容器化', link: '/DevOps/Deployment/docker' },
            { text: 'CI/CD 流程', link: '/DevOps/Deployment/ci-cd' },
            { text: '環境配置', link: '/DevOps/Deployment/environment' }
          ]
        },
        {
          text: '🔒 資安',
          collapsed: true,
          items: [
            { text: '概述', link: '/DevOps/Security/' },
            { text: '前端安全', link: '/DevOps/Security/frontend-security' },
            { text: '後端安全', link: '/DevOps/Security/backend-security' },
            { text: '資料庫安全', link: '/DevOps/Security/database-security' },
            { text: 'HTTPS 配置', link: '/DevOps/Security/https' },
            { text: '安全最佳實踐', link: '/DevOps/Security/best-practices' }
          ]
        },
        {
          text: '📊 監控',
          collapsed: true,
          items: [
            { text: '概述', link: '/DevOps/Monitoring/' },
            { text: '錯誤追蹤', link: '/DevOps/Monitoring/error-tracking' },
            { text: '效能監控', link: '/DevOps/Monitoring/performance-monitoring' },
            { text: '日誌管理', link: '/DevOps/Monitoring/logging' },
            { text: '監控告警', link: '/DevOps/Monitoring/alerting' }
          ]
        },
        {
          text: '📚 版本控制',
          collapsed: true,
          items: [
            { text: '概述', link: '/DevOps/VersionControl/' },
            { text: 'Git 基礎', link: '/DevOps/VersionControl/git-basics' },
            { text: 'Git 進階', link: '/DevOps/VersionControl/git-advanced' },
            { text: 'GitHub Actions', link: '/DevOps/VersionControl/github-actions' },
            { text: '分支策略', link: '/DevOps/VersionControl/branching-strategy' }
          ]
        }
      ],

      // 首頁側邊欄
      '/': [
        {
          text: '🚀 快速開始',
          items: [
            { text: '學習路線圖', link: '/learning-roadmap' },
            { text: '環境建置', link: '/environment-setup' },
            { text: '開發工具推薦', link: '/recommended-tools' }
          ]
        },
        {
          text: '📖 範例',
          items: [
            { text: 'Markdown 語法', link: '/markdown-examples' },
            { text: 'Runtime API', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: "Copyright @ 2025-present Qoo143"
    },

    // 搜尋功能
    search: {
      provider: 'local'
    },

    // 編輯連結
    editLink: {
      pattern: 'https://github.com/yourusername/tech-note/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁'
    },

    // 最後更新時間
    lastUpdated: {
      text: '最後更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    }
  }
})