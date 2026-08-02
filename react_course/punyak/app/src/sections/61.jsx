import { useState } from "react";

function HabitList({ habits = [] }) {
    if (habits.length === 0) return <p>No habits yet.</p>;
    return (
        <ul>
            {habits.map(h => <li key={h.id}>{h.name}</li>)}
        </ul>
    );
}

function HabitForm({ onSubmit }) {
    const [name, setName] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(name);
            setName("");
        }}>
            <input 
                placeholder="Enter habit" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button type="submit">Add</button>
        </form>
    );
}

export { HabitList, HabitForm };
