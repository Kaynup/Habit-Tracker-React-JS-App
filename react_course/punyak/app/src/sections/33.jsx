import { useState } from "react";

function ConditionalButton() {
    const [isPrimary, setIsPrimary] = useState(true);

    const buttonStyle = {
        padding: "8px 16px",
        backgroundColor: isPrimary ? "blue" : "gray",
        color: "white",
        border: "none",
        borderRadius: 4,
        cursor: "pointer"
    };

    return (
        <div>
            <button
                style={buttonStyle}
                onClick={() => setIsPrimary(!isPrimary)}
            >
                {isPrimary ? "Primary Style (Click to Toggle)" : "Secondary Style"}
            </button>
        </div>
    );
}

export { ConditionalButton };
