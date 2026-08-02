import { useReducer } from "react";
import { create } from "zustand";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

function ReducerCounter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    );
}

const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));

function BearCounter() {
    const bears = useStore((state) => state.bears);
    return <h3>{bears} bears around here</h3>;
}

function BearControls() {
    const increasePopulation = useStore((state) => state.increasePopulation);
    const removeAllBears = useStore((state) => state.removeAllBears);
    return (
        <div>
            <button onClick={increasePopulation}>Add bear</button>
            <button onClick={removeAllBears}>Remove all</button>
        </div>
    );
}

export { ReducerCounter, BearCounter, BearControls };
