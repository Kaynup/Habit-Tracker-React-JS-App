> `CSS Modules` let you write traditional CSS scoped locally by default

file: `Button.module.css`
```css
.button {
    background-color: blue;
    color: white;
}
```

using it in React:
```jsx
import styles from "./Button.module.css";

function Button() {
    return <button className={styles.button}>Click</button>;
}
```

- class names are hashed automatically so styles do not leak to other components

---

> `Tailwind CSS (Utility-First Styling)`

standardizing on Tailwind for utility-first class styling directly in JSX.

```jsx
function Card() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Punyak</h2>
            <p className="text-gray-600">Learning React</p>
        </div>
    );
}
```

- styles are applied inline via pre-existing utility classes
- fast prototyping and consistent design tokens

---

> `Conditional Class Names`

applying classes dynamically based on component state or props.

using template literals:
```jsx
function Button({ isPrimary }) {
    return (
        <button className={`btn ${isPrimary ? "btn-primary" : "btn-secondary"}`}>
            Click
        </button>
    );
}
```

using array join:
```jsx
function Tab({ active }) {
    const classes = ["tab", active && "active"].filter(Boolean).join(" ");
    return <div className={classes}>Tab content</div>;
}
```

- `filter(Boolean)` removes falsey values before joining
