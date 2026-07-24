# ES6+
- The 6th major edition of the ECMAScript language specification standard, officially known as ECMAScript 2015

1. `Arrow Functions`:
- shorter way to write functions

```js
function greet(name) {
    return "Hello " + name;
}

const greet = (name) => {
    return "Hello " + name;
};
```

- can be written in one line

```js
const greet = (name) => "Hello " + name;
```

2. `Destructuring`:
- extracting values from arrays or objects easily

```js
const user = { name: "Punyak", age: 20 };
const { name, age } = user;

console.log(name); // Punyak
console.log(age); // 20
```

```js
const numbers = [10, 20, 30];
const [a, b] = numbers;

console.log(a); // 10
console.log(b); // 20
```

3. `Spread / Rest`:
- `...` is used for spreading values
- `...` is also used for collecting values into a single parameter

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]
```

```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
```

4. `Template Literals`:
- use backticks to write strings in a cleaner way

```js
const name = "Aman";
console.log(`Hello ${name}`);
```

- easier than string concatenation

```js
console.log("Hello " + name);
```

5. `Array Methods`:

- `map()` - transforms each item in an array

```js
const nums = [1, 2, 3];
const doubled = nums.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]
```

- `filter()` - keeps only items that match a condition

```js
const nums = [1, 2, 3, 4];
const even = nums.filter((num) => num % 2 === 0);

console.log(even); // [2, 4]
```

- `reduce()` - combines array items into one value

```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total); // 10
```

- `find()` - finds the first matching item

```js
const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Riya" }
];

const found = users.find((user) => user.name === "Riya");
console.log(found); // { id: 2, name: "Riya" }
```

6. `Modules`:
- `import` and `export` are used to split code into multiple files

```js
// math.js
export const add = (a, b) => a + b;
```

```js
// app.js
import { add } from "./math.js";

console.log(add(2, 3)); // 5
```

- helps in keeping code organized
- React projects use this pattern heavily

## Summary
- ES6+ gives newer, cleaner JavaScript syntax
- Arrow functions make code shorter
- Destructuring helps unpack values faster
- Spread and rest make array/object handling easier
- Template literals simplify strings
- Array methods like map, filter, reduce and find are used a lot in React
- Modules help maintain readability and structure in bigger projects
