# Array 陣列方法

## Array.prototype.concat()

**return : 一個新的陣列**

**合併兩個或更多的陣列**

::: details concat( arr, arr... )

```jsx
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3); //["a", "b", "c", "d", "e", "f"]
```

:::

## Array.prototype.filter()

**return : 一個新的陣列**

**自訂 function 決定要保留的元素**

::: details filter( callbackFn )

```jsx
const array1 = ["a", "b", "c"];
let newArr = array1.filter((item) => {
  return item == "a";
});

console.log(newArr); //[ 'a' ]
```

:::
