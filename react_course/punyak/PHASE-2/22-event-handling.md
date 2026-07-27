> `Events` are things that happen in your app when you click, type, submit forms, hover on elements

> In React, you handle events by passing a function to JSX attributes

HTML:
```html
<button onclick="handleClick()">Click me</button>
```

React:
```jsx
<button onClick={handleClick}>Click me</button>
```

key differences:
- React uses camelCase (`onClick`, not `onclick`)
- you pass a function reference, not a string
- the handler is called with the event object

---

> `Simple Click Handler`

```jsx
import { useState } from "react";

function Button() {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div>
            <p>Clicks: {clicks}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
```

1. when button is clicked, `handleClick` is called
2. `setClicks` updates the state
3. React re-renders the component
4. the display updates

---

> `Arrow Functions in Handlers`

```jsx
<button onClick={() => setCount(count + 1)}>
    Increment
</button>
```

pros:
- quick and simple for small logic
- you can pass arguments

cons:
- creates a new function on every render
- can be hard to read if logic is complex

---

> `Event Object`

contains information about what happened.

```jsx
function Input() {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return <input onChange={handleChange} />;
}
```

common event properties:
- `event.target.value` -> current value of an input
- `event.target.name` -> name of the input
- `event.key` -> which key was pressed
- `event.type` -> type of event (like "click", "change")

---

> `Controlled Components (onChange)`

a controlled component is one where React manages the value.

```jsx
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
        </div>
    );
}
```

why use controlled components:
- React always knows the current value
- you can validate, transform, or restrict input
- you can clear the input programmatically

---

> `Form Submission`

use `onSubmit` to handle form submissions.

```jsx
function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Logging in:", username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
}
```

- `event.preventDefault()` stops default page reload
- `type="submit"` makes button submit the form

---

> `Multiple Input Handlers`

instead of a handler for each input, use one handler with `name` attribute.

```jsx
function MultiInput() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <form>
            <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />
        </form>
    );
}
```

1. each input has a `name` matching the state key
2. `handleChange` reads name and updates correct property
3. spread operator `...form` copies existing properties

---

> `Keyboard Events`

```jsx
function SearchWithEnter() {
    const [search, setSearch] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log("Searching for:", search);
        }
    };

    return (
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Press Enter to search"
        />
    );
}
```

---

> `Event Handler Best Practices`

define handlers outside JSX:

```jsx
function Button() {
    const handleClick = () => {
        console.log("Clicked");
    };

    return <button onClick={handleClick}>Click</button>;
}
```

instead of:
```jsx
<button onClick={() => console.log("Clicked")}>Click</button>
```

reasons:
- easier to read and test
- better performance (no new function every render)
- easier to add logic later

---

> `Preventing Default Behavior`

```jsx
function Link() {
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Link clicked but didn't navigate");
    };

    return (
        <a href="https://google.com" onClick={handleClick}>
            Don't go to Google
        </a>
    );
}
```

---

> `Passing Arguments to Handlers`

```jsx
function TodoList() {
    const deleteTodo = (id) => {
        console.log("Deleting todo:", id);
    };

    return (
        <ul>
            <li>
                Learn React
                <button onClick={() => deleteTodo(1)}>Delete</button>
            </li>
            <li>
                Build a project
                <button onClick={() => deleteTodo(2)}>Delete</button>
            </li>
        </ul>
    );
}
```

use arrow functions to pass arguments to event handlers.
