import { useState } from "react";

function Child1({ count, setCount }) {
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

function Child2({ count }) {
    return <p>Count: {count}</p>;
}

function LiftingState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Child1 count={count} setCount={setCount} />
            <Child2 count={count} />
        </div>
    );
}

function MessageInput({ onSendMessage }) {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            onSendMessage(input);
            setInput("");
        }
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

function MessageApp() {
    const [messages, setMessages] = useState([]);

    const addMessage = (text) => {
        setMessages([...messages, text]);
    };

    return (
        <div>
            <MessageInput onSendMessage={addMessage} />
            <ul>
                {messages.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}

export { LiftingState, MessageApp };
