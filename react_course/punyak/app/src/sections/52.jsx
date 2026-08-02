import { useQuery } from "@tanstack/react-query";

function ReactQueryTodos() {
    const { isPending, error, data } = useQuery({
        queryKey: ["todos"],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/todos?_limit=4").then((res) =>
                res.json()
            ),
    });

    if (isPending) return <p>Loading react-query todos...</p>;
    if (error) return <p>An error has occurred: {error.message}</p>;

    return (
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export { ReactQueryTodos };
