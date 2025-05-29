# ⚙️ SCSS 預處理器

SCSS (Sassy CSS) 是 CSS 的延伸，提供變數、嵌套、混合、函式等功能，讓 CSS 開發更有效率和可維護性。

## 🎯 為什麼選擇 SCSS？

- **變數系統**：統一管理顏色、字體、間距
- **嵌套語法**：更清晰的結構層次
- **混合功能**：可重用的樣式片段
- **模組化**：更好的檔案組織
- **強大的函式**：動態計算樣式值

## 📚 學習內容

### 🔧 基礎語法
- [變數 Variables](./variables)：`$primary-color: #3498db;`
- [嵌套 Nesting](./nesting)：結構化的樣式組織
- [父選擇器 &](./parent-selector)：`&:hover`, `&.active`
- [註解](./comments)：`/* */` 和 `//` 註解

### 🎨 進階功能
- [混合 Mixins](./mixins)：可重用的樣式片段
- [繼承 Extend](./extend)：`@extend` 樣式繼承
- [函式 Functions](./functions)：內建和自訂函式
- [條件語句](./conditionals)：`@if`, `@else`, `@else if`
- [迴圈](./loops)：`@for`, `@each`, `@while`

### 📦 模組系統
- [@import](./import)：匯入其他 SCSS 檔案
- [@use](./use)：現代模組系統
- [@forward](./forward)：轉發模組
- [Partials](./partials)：模塊化檔案組織

### 🔧 實用技巧
- [色彩函式](./color-functions)：`lighten()`, `darken()`, `mix()`
- [數學運算](./math)：加減乘除運算
- [字串處理](./strings)：字串操作函式
- [映射 Maps](./maps)：鍵值對資料結構

## 🛠️ 開發環境設置

### VS Code 擴展
```json
{
  "recommendations": [
    "syler.sass-indented",
    "glenn2223.live-sass",
    "ritwickdey.live-sass"
  ]
}
```

### Vite 中使用 SCSS
```bash
npm install -D sass
```

```javascript
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
}
```

## 📁 專案結構建議

```
styles/
├── abstracts/
│   ├── _variables.scss    # 變數定義
│   ├── _mixins.scss      # 混合功能
│   └── _functions.scss   # 自訂函式
├── base/
│   ├── _reset.scss       # CSS 重置
│   ├── _typography.scss  # 字體設定
│   └── _base.scss        # 基礎樣式
├── components/
│   ├── _buttons.scss     # 按鈕元件
│   ├── _cards.scss       # 卡片元件
│   └── _forms.scss       # 表單元件
├── layout/
│   ├── _header.scss      # 頁首
│   ├── _footer.scss      # 頁尾
│   └── _sidebar.scss     # 側邊欄
├── pages/
│   ├── _home.scss        # 首頁樣式
│   └── _about.scss       # 關於頁面
└── main.scss             # 主要匯入檔案
```

## 🎨 實戰範例

### 變數系統
```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Helvetica Neue', Arial, sans-serif;
$font-size-base: 16px;

// 色彩調色盤
$colors: (
  primary: $primary-color,
  secondary: $secondary-color,
  success: #27ae60,
  warning: #f39c12,
  danger: #e74c3c
);
```

### 混合功能
```scss
// _mixins.scss
@mixin button-style($bg-color, $text-color: white) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

// 使用混合
.btn-primary {
  @include button-style($primary-color);
}
```

### 嵌套與父選擇器
```scss
.navigation {
  background-color: #333;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      
      a {
        display: block;
        padding: 15px 20px;
        color: white;
        text-decoration: none;
        
        &:hover {
          background-color: #555;
        }
        
        &.active {
          background-color: $primary-color;
        }
      }
    }
  }
}
```

## 📈 最佳實踐

### ✅ 好的做法
- 使用有意義的變數名稱
- 適度使用嵌套（不超過 3-4 層）
- 建立可重用的混合
- 組織化的檔案結構
- 使用 @use 而非 @import

### ❌ 避免的錯誤
- 過度嵌套導致特異性問題
- 濫用 `!important`
- 變數命名不規範
- 忽視編譯後的 CSS 大小
- 不考慮瀏覽器兼容性

## 🔗 延伸閱讀

- 📚 [Sass 官方文檔](https://sass-lang.com/documentation)
- 🎯 [SCSS 最佳實踐指南](https://sass-guidelin.es/)
- 🛠️ [Sass 工具與資源](https://github.com/Famolus/awesome-sass)

---

*掌握 SCSS，讓你的 CSS 開發更有效率！* ⚡