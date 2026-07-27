import { useState, useEffect } from "react";

function TodosFetcher() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => {
                setTodos(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading todos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {todos.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export { TodosFetcher };
