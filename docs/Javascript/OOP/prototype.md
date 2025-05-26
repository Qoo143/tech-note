# prototype

## 功能(解釋)

### Prototype = 物件的共享方法庫

### 被繼承物件的\_\_proto\_\_，會指向繼承物件的 Prototype 物件

1. 每個物件可以有自己的屬性（brand、color）
2. 共同的方法（repair、wash）放在 prototype 裡共享(節省記憶體)
3. 調用物件方法卻找不到時，會沿著\_\_proto\_\_指向的物件繼續查找，不斷循環，直到\_\_proto\_\_指向 null 為止

## 示範

**原型鏈查找機制**

```jsx
// 建立共享的方法庫
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

function userCreator(name, score) {
  // 使用 Object.create() 建立原型鏈連結
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user1 = userCreator("Will", 3);
user1.increment(); // 會向上查找到 userFunctionStore 中的方法
```

當呼叫 user1.increment() 時

JavaScript 先在 user1 物件本身找 increment 方法

找不到時，透過 \_\_proto\_\_向上查找到 userFunctionStore

在 userFunctionStore 中找到 increment 方法並執行

## 注意事項

1.ES2015 有提供 class 關鍵字，但那只是個語法糖

2.\_\_proto\_\_是非標準屬性(隱藏的)，正式應該用 Object.getPrototypeOf()

3.只有函數有 .prototype 屬性，一般物件只有 \_\_proto\_\_
一般 function 再創時步驟如下 :

1. global memory 創建變數名稱，並指定其唯一函式

2. 背後建立的是一物件(並包含 prototype 屬性，初始為空物件)

```jsx
{
  prototype: {
  }
}
```
