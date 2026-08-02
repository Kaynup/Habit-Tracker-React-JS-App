import { useState, memo, useEffect } from "react";

const HeavyComponent = memo(function HeavyComponent({ data }) {
    useEffect(() => {
        console.log("HeavyComponent rendered with data:", data);
    });
    return (
        <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
            <p><strong>HeavyComponent</strong></p>
            <p>{data}</p>
        </div>
    );
});

function MemoDemo() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Parent Count: {count}
            </button>
            <p style={{ fontSize: "0.8em", color: "gray" }}>
                (Check console: HeavyComponent only logs on first render, avoiding re-renders when count changes!)
            </p>
            <HeavyComponent data="I only render when my props change!" />
        </div>
    );
}

export { MemoDemo, HeavyComponent };
