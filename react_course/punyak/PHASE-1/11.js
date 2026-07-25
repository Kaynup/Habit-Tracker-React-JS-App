// Destructuring

const user = {name: "Punyak", age: 20}
const {name, age} = user;
console.log(name);
console.log(age);

// Arrow function

const greet = (name) => `Hello ${name}`;
console.log(greet("Punyak"));

// Spread

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

// Rest

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5, 5, 4, 3, 2, 1));

// Array methods

const doubled = arr2.map((n) => n * 2);
const evens = arr2.filter((n) => n % 2 === 0);
const total = arr2.reduce((sum, n) => sum + n, 0);
console.log(doubled);
console.log(evens);
console.log(total);
