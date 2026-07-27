import { useState } from "react";

function Card({ children }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: 10, borderRadius: 6 }}>
            {children}
        </div>
    );
}

function WelcomeCard() {
    return (
        <Card>
            <h3>Composition Card</h3>
            <p>This content is passed as children.</p>
        </Card>
    );
}

function useToggle(initial = false) {
    const [state, setState] = useState(initial);
    const toggle = () => setState((prev) => !prev);
    return [state, toggle];
}

function ToggleDemo() {
    const [isOn, toggleIsOn] = useToggle(false);

    return (
        <div>
            <p>Status: {isOn ? "ON" : "OFF"}</p>
            <button onClick={toggleIsOn}>Toggle Status</button>
        </div>
    );
}

export { WelcomeCard, ToggleDemo, useToggle };
