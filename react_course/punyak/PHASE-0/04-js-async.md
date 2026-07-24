## Asynchronous JavaScript
- JavaScript code that does not always run instantly
- used when waiting for data, API responses, or time-based tasks

1. `Callbacks`:
- a callback is a function passed into another function and called later

```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((result) => {
    console.log(result);
});
```

- callback functions are one of the earliest ways to handle async code

2. `Promises`:
- a promise represents a future result
- can be in `pending`, `fulfilled`, or `rejected` state

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 1000);
});

promise.then((result) => {
    console.log(result);
});
```

- `.then()` means: run this function after the promise is successfully resolved
- better than callbacks because code is easier to read and manage

3. `async / await`:
- modern way to write asynchronous JavaScript
- `async` makes a function asynchronous
- `await` waits for a promise to finish

```js
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}

getData();
```

- `await` means: pause here until the previous async task is done
- this makes async code look more like regular JavaScript code

4. `fetch()` API:
- used to request data from a server or public API

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
```

- `fetch()` returns a promise
- `.json()` means: convert the API response body into a JavaScript object

5. `JSON`:
- JavaScript Object Notation
- common format for sending and receiving data from APIs

```json
{
  "id": 1,
  "title": "Learn React",
  "completed": false
}
```

- in JavaScript, JSON data can be converted into an object and used easily

## Summary
- asynchronous JavaScript is used when code has to wait for something
- `callbacks` were the older way
- `promises` make async code cleaner
- `async / await` is the modern and most readable style
- `fetch()` is used to get data from APIs
- `JSON` is the format used to represent that data
