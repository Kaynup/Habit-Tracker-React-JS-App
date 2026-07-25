## React
> Component based UI library
- helps devs build UI by breaking the page into small reusable pieces called components

> A component is a small independent piece of user interface:
- nav bar
- buttons
- cards
- todo items
- profile sections

> Benefits:
- managable
- reusable
- maintainable
- debuggable

### Virtual DOM (Document Object Model)

- DOM is a browser's internal representation of HTML page
- VDOM is a lightweight copy of the real DOM
- React compares the old VDOM with the new one and updates only changed parts
- Example:
> If you click a button and only small part of the page changes, React does not rebuild the whole page. It updates only the necessary part.

### JSX (JavaScript XML)
> Let's you write HTML-like code in JavaScript

```js
const element = <h1>Hello React</h1>;
```
> Important:
- Only one parent element is returned
- JS expressions can be written inside `{}`

```js
const name = "Punyak"
function greet() {
    return <h1>Hello, {name}</h1>;
}
```
- **React components are written as functions usually**
- A functional component is a JS function, receives data through props

### Props
> Props are used to pass data from one component to another

```js
function greet(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return <greet name="Punyak"/>;
}
```
> `Punyak` is passed into greeting component, inside it, `props.name` receives that value

### Rendering Lists
> React often renders lists of items using `map()`

```js
const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
    return (
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
    );
}
```

> Each item in the list should have a unique `key`
> The `key` helps React identify which item changed, was added, or removed

### Conditional Rendering
> React can show different content depending on a condition

```js
function Message({ isLoggedIn }) {
    return isLoggedIn ? <h1>Welcome back</h1> : <h1>Please login</h1>;
}
```

```js
function Notification({ hasMessage }) {
    return hasMessage && <p>You have new messages</p>;
}
```