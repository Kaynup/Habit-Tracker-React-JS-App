function UiButton({ children, onClick }) {
    return (
        <button 
            onClick={onClick} 
            style={{ padding: "10px 20px", borderRadius: "5px", background: "#eee", border: "1px solid #ccc", cursor: "pointer" }}
        >
            {children}
        </button>
    );
}

function ConfigDemo() {
    // Demonstrating environment variables usage conceptually
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
    return <p>API URL config: {apiUrl}</p>;
}

export { UiButton, ConfigDemo };
