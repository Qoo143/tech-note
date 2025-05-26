# new 關鍵字

## 功能

**當函式前面加上 new 時，會自動執行兩件事：**

1. 建立一個新的物件

2. 回傳這個新物件

:::tip 補充說明

**new 關鍵字會自動執行以下動作：**

1. 建立新物件：this = {}

   他會在調用 function 時，內部執行上下文時的 local memory 創建空物件 <br>
   並且賦值到該函式的 this 屬性上，<br>
   最後在 return this 物件出去

2. 設定原型鏈連結：this.\_\_proto\_\_ = UserCreator.prototype
3. 執行函數內容：設定屬性
4. 回傳物件：return this（如果函數沒有明確回傳其他物件）

   :::

## 示範

```jsx
// 建立建構函數（Constructor Function）
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

// 在建構函數的 prototype 上新增共用方法
UserCreator.prototype.increment = function () {
  this.score++;
};

// 使用 new 關鍵字創建物件實例
const user1 = new UserCreator("John", 5);

// user1 透過原型鏈找到 increment 方法
user1.increment(); // this.score++ -> user1.score 變成 6
console.log(user1.score); // 6
```

## 注意事項

1. 建構函式（function constructor）只是普通的 function，但使用了 new 關鍵字呼叫他

2. Functions 既是函數也是物件

```jsx
function myFunction() {
  return "Hello";
}

// 函數部分：用 () 呼叫
myFunction(); // "Hello"

// 物件部分：用 . 存取屬性
myFunction.someProperty = "I'm a property";
console.log(myFunction.someProperty); // "I'm a property"

// 每個函數都自動有 prototype 屬性
console.log(myFunction.prototype); // 空物件 {}
```

3. 驗證原型鏈連結

```jsx
console.log(user1.__proto__ === UserCreator.prototype); // true
console.log(user1.constructor === UserCreator); // true
```
