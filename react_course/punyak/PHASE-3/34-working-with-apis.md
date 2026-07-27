> `Fetching Data with fetch inside useEffect`

always fetch data inside a `useEffect` hook with a dependency array so it does not loop infinitely.

```jsx
import { useState, useEffect } from "react";

function HabitList() {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        fetch("/api/habits")
            .then((res) => res.json())
            .then((data) => setHabits(data));
    }, []);

    return (
        <ul>
            {habits.map((h) => (
                <li key={h.id}>{h.name}</li>
            ))}
        </ul>
    );
}
```

1. empty dependency `[]` ensures fetch runs once on mount
2. `setHabits(data)` stores API response in component state

---

> `Loading and Error States`

tracking `loading` and `error` gives users clear feedback while network requests complete.

```jsx
function HabitTracker() {
    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load");
                return res.json();
            })
            .then((data) => {
                setHabits(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading habits...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {habits.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}
```

- `loading` starts as `true` and turns `false` in `finally`
- any network or HTTP error sets `error` message

---

> `Connecting to Flask / REST APIs`

when connecting React to a Flask backend from earlier training:
- use `/api/...` endpoints or full CORS-enabled URLs like `http://127.0.0.1:5000/api/habits`
- send `Content-Type: application/json` for `POST` requests

```jsx
async function createHabit(name) {
    const response = await fetch("http://127.0.0.1:5000/api/habits", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    });
    const newHabit = await response.json();
    return newHabit;
}
```
