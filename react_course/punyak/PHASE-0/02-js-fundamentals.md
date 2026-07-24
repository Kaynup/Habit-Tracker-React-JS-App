# Javascript
- Logical part that makes the page do things

1. `Variables`:
- `let` - changable later

```js
let name = "Aman"
name = "Punyak"
```

- `const` - cannot be changed later

```js
const name = "Aman"
name = "Punyak" // TypeError
```

2. `Data types`:

- String: "hello"
- Number: 10
- Boolean: true or false
- Array: [1, 2, 3]
- Object: { name: "Aman", age: 20 }

3. `Operators`:

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `===` comparison

* Loose equality (==) checks if values are equal like `"5" == 5`
* Strict equality (===) checks if data types are also same

4. `Functions`:
- reusable block of code

```js
function greet() {
    console.log("Hello");
}

greet(); // prints Hello
```

5. `Scope`:
- where variable can be used

```js
let x = 10;
function demo() {
    let y = 5;
    console.log(x+y);
}
demo();
```

6. `this`:
- refers to object using the method

```js
const person = {
    name: "Punyak",
    showName() {
        console.log(this.name);
    }
};
person.showName(); // Outputs Punyak
```

7. `Arrays & Objects`:
- list of values
```js
const numbers = [1, 2, 3, 4];
console.log(numbers[0]); // 1
```

- collection of key-value pairs
```js
const student = { name: "Punyak", age: 20, course: "React" };
console.log(student.name); // Punyak
```

8. `Loops`:

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0
// 1
// 2
```

9. `DOM`: Document Object Model

- selecting an html element:
```js
document.querySelector("h1");
```
```js
document.querySelector("h1").textContent = "Updated Title";
// Change content
```

```js
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!");
});
// Event listeners
```