## ES6+
> `Arrow functions`: one line functions

```js
const greet = (name) => `Hello ${name}`
```

> `Destructuring`: pull out values from arrays or objects quickly

```js
const user = {name: "Punyak", age: 20}
const {name, age} = user;
console.log(name);
```

> `Spread`: copy or combine multiple values

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]
```

> `Rest`: collect mutiple values

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

> `Template literals`: can be used to write cleaner strings like `${name}`

> `Array methods`: `map()`, `filter()`, `reduce()`

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);
```

> `Promises`: future result, lets JS handle work without blocking the app

```js
const promise = new Promise((resolve) => {setTimeout(() => resolve(done), 1000)});
```

