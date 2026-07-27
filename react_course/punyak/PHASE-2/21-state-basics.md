> `State` is data that a component can change. Unlike props (which come from the parent and cannot change), state is internal to the component and can be updated

like:
- a counter that goes from 0 to 1 to 2
- forms
- toggle button

When state changes, React re-renders the component with the new data. And only the part where data has changed

> `useState` let's a functional component have a state

```js
const [count, setCount] = useState(0);
```
- `useState(0)` creates a state variable, starting with value `0`
- `count` marks current value of variable
- `setCount` updates the state
- the `0` is the initial value

> Example:

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

```

1. when component first loads, `count` is `0`
2. when button is clicked, `setCount(count + 1)` updates the state
3. React re-renders the component with the new count value
4. the `<p>` tag now shows the new count


> `Multiple State Variables`

A component can have multiple pieces of state.

```jsx
function UserForm() {
    const [name, setName] = setState("");
    const [email, setEmail] = setState("");
    const [age, setAge] = setState(20);

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Name: {name}, Email: {email}, Age: {age}</p>
        </div>
    );
}
```

Each `useState` is independent.

---

> `Functional Updates (setState with prev)`
update state based on the previous value.


```js
const [count, setCount] = useState(0);

setCount(count + 1);
```

- OR

```js
const [count, setCount] = useState(0);

setCount(prev => prev + 1);
```

- Comparison:

If you click the button twice very quickly, the first way might not work as expected because `count` may not have updated yet.

With functional updates:
- `prev` is always the most recent state value
- React guarantees it will use the latest value


> `State Immutability`
State should not be mutated directly.

> Example of what not to do

```js
const [user, setUser] = useState({ name: "Punyak", age: 20 });

// WRONG - mutating directly
user.age = 21;

// React won't detect this change
```

> Correct way

```js
const [user, setUser] = useState({ name: "Punyak", age: 20 });

// Create a new object
setUser({ ...user, age: 21 });
```

- Why immutability matters

    - React uses immutability to detect changes
    - if you mutate directly, React thinks nothing changed
    - the UI won't update
    - it's harder to debug

> Immutability with arrays

```js
const [items, setItems] = useState(["apple", "banana"]);

// WRONG
items.push("orange");

// CORRECT - create a new array
setItems([...items, "orange"]);

// Or use .map() to update
setItems(items.map(item => item === "banana" ? "orange" : item));
```

---

> `State immutability with objects`

When updating an object in state:

```js
const [person, setPerson] = useState({
    name: "Punyak",
    address: {
        city: "Delhi",
        country: "India"
    }
});

// Update a simple property
setPerson({ ...person, name: "Aman" });

// Update nested property
setPerson({
    ...person,
    address: {
        ...person.address,
        city: "Mumbai"
    }
});
```

The spread operator `...` creates a shallow copy so React detects the change.

> `State and re-renders`

Every time state changes:
1. React calls the component function again
2. the component returns new JSX
3. React updates the DOM
