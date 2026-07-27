> `useRef` lets you reference a value that is not needed for rendering, or directly access a DOM element

```js
const ref = useRef(initialValue);
```

- changing `ref.current` does not trigger a re-render
- useful for storing timers, previous state, or DOM nodes

> Example: DOM access

```jsx
import { useRef } from "react";

function TextInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
```

1. `useRef(null)` creates a ref object
2. `<input ref={inputRef} />` attaches the ref to the DOM node
3. `inputRef.current.focus()` focuses the actual input element

---

> `useRef` for persisting values without re-render

```jsx
function Timer() {
    const timerId = useRef(null);

    const startTimer = () => {
        timerId.current = setInterval(() => {
            console.log("Tick");
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerId.current);
    };

    return (
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}
```

- mutating `timerId.current` keeps the value across renders without causing a re-render

---

> `useMemo` memoizes an expensive calculation so it only re-runs when dependencies change

```js
const cachedValue = useMemo(() => calculateValue(a, b), [a, b]);
```

> Example:

```jsx
import { useState, useMemo } from "react";

function ExpensiveCalculation({ numbers }) {
    const [count, setCount] = useState(0);

    const total = useMemo(() => {
        console.log("Calculating total...");
        return numbers.reduce((acc, n) => acc + n, 0);
    }, [numbers]);

    return (
        <div>
            <p>Total: {total}</p>
            <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
        </div>
    );
}
```

- clicking button updates `count` and causes re-render
- because `numbers` did not change, `useMemo` skips calculation and returns cached total

---

> `useCallback` memoizes a function reference so it does not change on every render

```js
const cachedFn = useCallback(() => {
    doSomething(a, b);
}, [a, b]);
```

> Example:

```jsx
import { useState, useCallback, memo } from "react";

function Parent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <ChildButton onClick={handleClick} />
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    );
}

const ChildButton = memo(({ onClick }) => {
    console.log("ChildButton rendered");
    return <button onClick={onClick}>Click me</button>;
});
```

- without `useCallback`, `handleClick` is a new function every render, causing `ChildButton` to re-render
- with `useCallback([])`, `handleClick` stays the same reference

---

> `useContext` lets you read and subscribe to context from your component, avoiding prop drilling

```jsx
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function App() {
    const [user, setUser] = useState("Punyak");

    return (
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
    );
}

function Dashboard() {
    return <Sidebar />;
}

function Sidebar() {
    const user = useContext(UserContext);
    return <p>Welcome, {user}</p>;
}
```

1. `createContext()` creates the context
2. `<UserContext.Provider value={user}>` wraps tree and provides value
3. `useContext(UserContext)` reads the value in any child without passing props through `Dashboard`
