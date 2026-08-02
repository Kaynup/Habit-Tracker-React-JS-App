> `Client State vs Server State`

- client state: UI state, form inputs, local toggles (owned by the browser)
- server state: data from an API, shared with others, can become out of date (owned by the server)

managing server state manually with `useEffect` and `useState` leads to boilerplate, race conditions, and missing features (caching, retries).

---

> `React Query (TanStack Query)`

a library for fetching, caching, synchronizing and updating server state.

```bash
npm install @tanstack/react-query
```

setup the provider:
```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    );
}
```

---

> `Fetching Data with useQuery`

replaces manual `useEffect` + `useState` fetching boilerplate.

```jsx
import { useQuery } from "@tanstack/react-query";

function Todos() {
    const { isPending, error, data } = useQuery({
        queryKey: ["todos"],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
                res.json()
            ),
    });

    if (isPending) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <ul>
            {data.slice(0, 5).map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}
```

- `queryKey` uniquely identifies the cache
- `queryFn` is the function that fetches data
- handles caching, refetching, and loading states automatically

---

> `Updating Data with useMutation`

use mutations to create, update, or delete data, and invalidate the cache.

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AddTodo() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newTodo) => {
            return fetch("/api/todos", {
                method: "POST",
                body: JSON.stringify(newTodo)
            });
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    return (
        <button onClick={() => mutation.mutate({ title: "New Todo" })}>
            Add Todo
        </button>
    );
}
```
