> `When Context isn't enough`

React Context is great for passing data deeply, but it has downsides for high-frequency state updates:
- every component that consumes the context re-renders when the value changes
- complex state logic inside a provider can become hard to manage

---

> `useReducer` for complex local state

an alternative to `useState` that handles complex state logic using a reducer function (similar to Redux).

```jsx
import { useReducer } from "react";

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    );
}
```

1. `useReducer` takes a reducer function and initial state
2. `dispatch` sends an action object to the reducer
3. the reducer returns the new state based on the action type

---

> `State Libraries (Zustand)`

for global state management, external libraries like Zustand are simpler and more performant than Context.

```bash
npm install zustand
```

creating a store:
```js
import { create } from "zustand";

const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));
```

using the store in components:
```jsx
function BearCounter() {
    const bears = useStore((state) => state.bears);
    return <h1>{bears} around here ...</h1>;
}

function Controls() {
    const increasePopulation = useStore((state) => state.increasePopulation);
    return <button onClick={increasePopulation}>One up</button>;
}
```

- components only re-render if the specific state they select changes
- no provider wrappers needed
