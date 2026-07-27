> `Composition vs Inheritance`

React recommends using composition instead of inheritance to reuse code between components.

```jsx
function Card({ children }) {
    return <div className="card">{children}</div>;
}

function WelcomeCard() {
    return (
        <Card>
            <h1>Welcome!</h1>
            <p>Thank you for visiting.</p>
        </Card>
    );
}
```

- components can accept arbitrary elements as `children`
- you do not extend base component classes

---

> `Container and Presentational Components`

separate how things work (container) from how things look (presentational).

presentational (UI only):
```jsx
function UserListUI({ users, onSelect }) {
    return (
        <ul>
            {users.map((u) => (
                <li key={u.id} onClick={() => onSelect(u.id)}>
                    {u.name}
                </li>
            ))}
        </ul>
    );
}
```

container (logic and state):
```jsx
function UserListContainer() {
    const [users, setUsers] = useState([
        { id: 1, name: "Punyak" },
        { id: 2, name: "Aman" }
    ]);

    const handleSelect = (id) => {
        console.log("Selected user:", id);
    };

    return <UserListUI users={users} onSelect={handleSelect} />;
}
```

---

> `Fragments`

let you group a list of children without adding extra nodes to the DOM.

```jsx
function ListItem() {
    return (
        <>
            <dt>Name</dt>
            <dd>Punyak</dd>
        </>
    );
}
```

- `<>...</>` is shorthand syntax for `<React.Fragment>`
- prevents unwanted wrapper `<div>` tags in HTML output

---

> `Custom Hooks`

extract component logic into reusable functions whose names start with `use`.

> Example: `useToggle`

```js
import { useState } from "react";

function useToggle(initial = false) {
    const [state, setState] = useState(initial);
    const toggle = () => setState((prev) => !prev);
    return [state, toggle];
}
```

using `useToggle` in a component:
```jsx
function Switch() {
    const [isOn, toggleIsOn] = useToggle(false);

    return (
        <button onClick={toggleIsOn}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
}
```

---

> Example: `useFetch`

```js
import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
}
```

using `useFetch`:
```jsx
function UserProfile() {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users/1");

    if (loading) return <p>Loading...</p>;
    return <p>User: {data.name}</p>;
}
```
