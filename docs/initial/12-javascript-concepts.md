# 11. JavaScript Concepts

## Variables & Loops

```js
const habits = ["Drink Water","Read","Workout"];

for (const habit of habits) {
  console.log(habit);
}
```

---

## Functions

```js
function greet(name){
  return `Hello ${name}`;
}
```

React component:

```jsx
function Greeting(){
  return <h1>Hello</h1>;
}
```

---

## Objects

```js
const habit = {
  name:"Workout",
  streak:5,
  completed:false
};
```

---

## map()

```js
habits.map(h => h.toUpperCase());
```

React:

```jsx
habits.map(habit => <HabitCard name={habit} />)
```

---

## State

JavaScript

```js
let count = 0;
count++;
```

React

```jsx
const [count,setCount]=useState(0);
setCount(count+1);
```

---

## filter()

```js
const completed = habits.filter(h=>h.completed);
```

---

## find()

```js
const workout = habits.find(h=>h.name==="Workout");
```

---

## Spread Operator

```js
const updated={
  ...habit,
  completed:true
};
```

---

## Destructuring

```js
const {name,streak}=habit;
```

---

## Async/Await

```js
async function load(){
  const response = await fetch(url);
  const data = await response.json();
}
```

React:

```jsx
useEffect(()=>{
  load();
},[]);
```

---
