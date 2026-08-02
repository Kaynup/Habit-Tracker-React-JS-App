import React, { useState } from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "10px", border: "2px solid red", background: "#fee" }}>
                    <p style={{ color: "red", fontWeight: "bold" }}>Something went wrong!</p>
                    <pre style={{ color: "red" }}>{this.state.error.message}</pre>
                    <button onClick={() => this.setState({ hasError: false, error: null })}>
                        Clear Error
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

function BuggyComponent() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("I crashed deliberately!");
    }

    return <button onClick={() => setCrash(true)}>Crash Component</button>;
}

function AccessibleForm() {
    return (
        <form style={{ marginTop: "20px" }}>
            <label htmlFor="email-input" style={{ display: "block", marginBottom: "5px" }}>
                Email Address (Accessible Label)
            </label>
            <input 
                id="email-input" 
                type="email" 
                aria-required="true" 
                placeholder="hello@example.com"
                style={{ padding: "5px", marginBottom: "10px" }}
            />
            <br />
            <button type="submit" aria-label="Submit Email Form">Submit</button>
        </form>
    );
}

export { ErrorBoundary, BuggyComponent, AccessibleForm };
