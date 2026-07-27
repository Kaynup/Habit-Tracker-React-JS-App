> `Props One Way`

in React, data flows downward through props. a parent passes data to a child via props, but a child cannot directly pass data to a parent.

```jsx
function Parent() {
    return <Child message="Hello" />;
}

function Child({ message }) {
    return <p>{message}</p>;
}
```

- data flows down: Parent -> Child
- Child -> Parent does not work directly

---

> `Lifting State Up`

when multiple components need to share the same state, move the state to their common parent.

wrong way (each child has its own separate state):
```jsx
function Parent() {
    return (
        <div>
            <Child1 />
            <Child2 />
        </div>
    );
}

function Child1() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

function Child2() {
    const [count, setCount] = useState(0);
    return <p>Count: {count}</p>;
}
```

correct way (state lives in Parent):
```jsx
function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Child1 count={count} setCount={setCount} />
            <Child2 count={count} />
        </div>
    );
}

function Child1({ count, setCount }) {
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

function Child2({ count }) {
    return <p>Count: {count}</p>;
}
```

now both children share the same `count` state.

---

> `Passing Callbacks (Child to Parent)`

to let a child affect the parent's state, pass a function as a prop.

```jsx
function Parent() {
    const [name, setName] = useState("Punyak");

    const updateName = (newName) => {
        setName(newName);
    };

    return (
        <div>
            <h1>{name}</h1>
            <NameChanger onUpdate={updateName} />
        </div>
    );
}

function NameChanger({ onUpdate }) {
    return (
        <div>
            <button onClick={() => onUpdate("Aman")}>Change to Aman</button>
            <button onClick={() => onUpdate("Priya")}>Change to Priya</button>
        </div>
    );
}
```

1. Parent passes `updateName` function to NameChanger
2. NameChanger calls `onUpdate` with a new value
3. parent state updates
4. parent re-renders with new name

---

> `Callback with Form Input`

```jsx
function Parent() {
    const [message, setMessage] = useState("");

    return (
        <div>
            <p>Message: {message}</p>
            <MessageInput onSendMessage={setMessage} />
        </div>
    );
}

function MessageInput({ onSendMessage }) {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
            />
            <button type="submit">Send</button>
        </form>
    );
}
```

---

> `Sibling Communication`

siblings (components at the same level) communicate through their parent.

```jsx
function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ButtonChild onIncrement={() => setCount(count + 1)} />
            <DisplayChild count={count} />
        </div>
    );
}

function ButtonChild({ onIncrement }) {
    return <button onClick={onIncrement}>Increment</button>;
}

function DisplayChild({ count }) {
    return <p>Count: {count}</p>;
}
```

---

> `Parent to Child to Grandchild`

```jsx
function Grandparent() {
    const [data, setData] = useState("Hello");

    return (
        <div>
            <Parent data={data} onUpdate={setData} />
        </div>
    );
}

function Parent({ data, onUpdate }) {
    return (
        <div>
            <Child data={data} onUpdate={onUpdate} />
        </div>
    );
}

function Child({ data, onUpdate }) {
    return (
        <div>
            <p>{data}</p>
            <button onClick={() => onUpdate("Changed")}>Change</button>
        </div>
    );
}
```

---

> `Multiple Callbacks`

a component can accept multiple callback functions:

```jsx
function Parent() {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);

    return (
        <Post
            likes={likes}
            comments={comments}
            onLike={() => setLikes(likes + 1)}
            onComment={() => setComments(comments + 1)}
        />
    );
}

function Post({ likes, comments, onLike, onComment }) {
    return (
        <div>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <button onClick={onLike}>Like</button>
            <button onClick={onComment}>Comment</button>
        </div>
    );
}
```

---

> `Array and List Communication`

```jsx
function GroceryList() {
    const [items, setItems] = useState([
        { id: 1, name: "Apples", bought: false },
        { id: 2, name: "Bananas", bought: false }
    ]);

    const toggleItem = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, bought: !item.bought } : item
        ));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            {items.map(item => (
                <GroceryItem
                    key={item.id}
                    item={item}
                    onToggle={() => toggleItem(item.id)}
                    onRemove={() => removeItem(item.id)}
                />
            ))}
        </div>
    );
}

function GroceryItem({ item, onToggle, onRemove }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={item.bought}
                onChange={onToggle}
            />
            <span style={{ textDecoration: item.bought ? "line-through" : "none" }}>
                {item.name}
            </span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}
```

---

> `Prop Drilling`

passing props through many layers of components even if intermediate components do not use them.

```jsx
function App() {
    const [user, setUser] = useState("Punyak");

    return <Level1 user={user} />;
}

function Level1({ user }) {
    return <Level2 user={user} />;
}

function Level2({ user }) {
    return <Level3 user={user} />;
}

function Level3({ user }) {
    return <p>User: {user}</p>;
}
```

- Level1 and Level2 do not use `user`, but have to pass it through
- keep your component tree shallow
- pass props directly to components that need them

---

> `Best Practices`

keep state as high as needed:
```jsx
function Parent() {
    const [data, setData] = useState("");
    return (
        <div>
            <ChildA data={data} />
            <ChildB onUpdate={setData} />
        </div>
    );
}
```

name callbacks clearly:
```jsx
// good
<Button onSendMessage={sendMessage} />

// bad
<Button onCallback={sendMessage} />
```

pass only what is needed:
```jsx
// instead of passing whole user object
<Profile user={user} />

// pass just what Profile needs
<Profile name={user.name} email={user.email} />
```
