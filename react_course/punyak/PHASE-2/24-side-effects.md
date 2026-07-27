> `Side Effects` are anything that happens outside of rendering

like:
- fetching data from an API
- setting up timers
- subscribing to events
- modifying the document
- saving to localStorage

> `useEffect` runs code after a component renders

```js
useEffect(() => {
    // code here runs after component renders
}, [dependencies]);
```

- the function: code to run
- the dependency array: when to run it

---

> `Running After Every Render`

```jsx
import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

1. state updates
2. component renders
3. `useEffect` runs
4. document title updates

---

> `Running Only Once`

use an empty dependency array `[]` to run only on first render.

```jsx
useEffect(() => {
    console.log("Component mounted");
}, []);
```

common use: fetch data on startup
```jsx
function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/api/user")
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    return <div>{user ? user.name : "Loading..."}</div>;
}
```

---

> `Running When Dependencies Change`

```jsx
function SearchResults({ query }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log("Fetching results for:", query);
    }, [query]);

    return <div>{results.length} results found</div>;
}
```

- if `query` is "javascript", runs once
- if `query` changes to "java", runs again

---

> `Cleanup Functions`

a cleanup function is returned from `useEffect`:

```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log("Tick");
    }, 1000);

    return () => clearInterval(timer);
}, []);
```

when cleanup runs:
1. before the next effect runs
2. when component unmounts

why cleanup:
- prevent memory leaks
- stop timers and subscriptions

---

> `Timer Example`

```jsx
function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>Time: {seconds}s</div>;
}
```

---

> `Event Listener Example`

```jsx
function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <p>Window width: {width}px</p>;
}
```

---

> `Multiple useEffects`

you can have multiple `useEffect` hooks in one component:

```jsx
function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Component loaded");
    }, []);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    useEffect(() => {
        console.log("Name changed:", name);
    }, [name]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}
```

---

> `Fetching Data`

```jsx
function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://api.example.com/posts");
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
```

- define an async function inside `useEffect`
- you cannot make `useEffect` itself async

---

> `Fetching with Query Parameter`

```jsx
function UserPosts({ userId }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.example.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
            .finally(() => setLoading(false));
    }, [userId]);

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
```

---

> `Abort Controller (Cleanup for Fetches)`

```jsx
function SearchUsers({ query }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        fetch(`https://api.example.com/search?q=${query}`, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(data => setResults(data))
            .catch(err => {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            });

        return () => controller.abort();
    }, [query]);

    return (
        <ul>
            {results.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
```

---

> `localStorage Example`

```jsx
function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setIsDark(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(isDark));
    }, [isDark]);

    return (
        <button onClick={() => setIsDark(!isDark)}>
            {isDark ? "Dark" : "Light"} mode
        </button>
    );
}
```

---

> `Document Title`

```jsx
function Page({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return <h1>{title}</h1>;
}
```

---

> `Common Mistakes`

forgetting cleanup:
```jsx
// wrong
useEffect(() => {
    window.addEventListener("click", handleClick);
}, []);

// correct
useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
}, []);
```

missing dependencies:
```jsx
// wrong
useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
}, []);

// correct
useEffect(() => {
    const interval = setInterval(() => {
        setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
}, []);
```

running too often:
```jsx
// wrong - fetches every render
useEffect(() => {
    fetch("/api/data").then(res => res.json());
});

// correct - runs once
useEffect(() => {
    fetch("/api/data").then(res => res.json());
}, []);
```

---

> `Dependency Array Rules`

- `[]` -> run once on mount
- no array -> run after every render
- `[count, name]` -> run when count or name changes
