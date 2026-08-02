> `ESLint and Prettier`

- ESLint: finds bugs and enforces code rules (e.g. "no unused variables")
- Prettier: strictly formats your code (spacing, quotes, semicolons)

```bash
npm install -D eslint prettier eslint-config-prettier eslint-plugin-react
```

- run `npx eslint .` to check for errors
- run `npx prettier --write .` to auto-format everything

---

> `Component Design Principles`

1. **Single Responsibility:** a component should ideally do one thing. If it gets too large, break it into smaller components.
2. **Avoid Prop Bloat:** if a component takes 10+ props, you should probably pass an object, use Context, or use composition (`children`).

bad:
```jsx
<UserProfile 
    name={user.name} 
    age={user.age} 
    email={user.email} 
    onSave={handleSave} 
    onDelete={handleDelete} 
/>
```

good:
```jsx
<UserProfile user={user} actions={{ save: handleSave, delete: handleDelete }} />
```

---

> `Performance Basics: React.memo`

React re-renders all child components when a parent re-renders, even if their props did not change.

wrap a component in `React.memo` to skip re-rendering if its props are identical.

```jsx
import { useState, memo } from "react";

const HeavyComponent = memo(function HeavyComponent({ data }) {
    console.log("HeavyComponent rendered");
    return <div>{data}</div>;
});

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <HeavyComponent data="I only render once!" />
        </div>
    );
}
```

- `HeavyComponent` will not re-render when `count` changes
- only use `memo` for expensive components, as the prop comparison itself takes a small amount of performance
