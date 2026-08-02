import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function UserProfile() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>User Profile Page</h2>
            <p>Viewing User ID: {id}</p>
            <button onClick={() => navigate("/phase4")}>Back to Phase 4</button>
        </div>
    );
}

function SearchQuery() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    return (
        <div>
            <p>Search Query: {query}</p>
            <button onClick={() => setSearchParams({ q: "react" })}>
                Search for "react"
            </button>
        </div>
    );
}

export { UserProfile, SearchQuery };
