import { useRef, useState, useMemo, createContext, useContext } from "react";

function TextInputRef() {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Click button to focus" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

function ExpensiveCalc({ numbers = [1, 2, 3, 4, 5] }) {
    const [count, setCount] = useState(0);

    const total = useMemo(() => {
        return numbers.reduce((acc, n) => acc + n, 0);
    }, [numbers]);

    return (
        <div>
            <p>Total: {total}</p>
            <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
        </div>
    );
}

const UserContext = createContext();

function ContextDemo() {
    const [user] = useState("Punyak");

    return (
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
    );
}

function Dashboard() {
    const user = useContext(UserContext);
    return <p>User from context: {user}</p>;
}

export { TextInputRef, ExpensiveCalc, ContextDemo };
