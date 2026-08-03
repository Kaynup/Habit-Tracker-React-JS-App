import useAuthStore from "../store/authStore";
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [userpass, setUserpass] = useState("");
    const [error, setError] = useState("");
    const loginAction = useAuthStore((state) => state.login);

    function handleSubmit(e) {
        e.preventDefault();
        if ((username.trim() === "" || userpass === "")) {
            setError("Enter username and password");
            return;
        }
        loginAction(username);
    }

    return <div className="min-h-screen flex items-center justify-center">
        <div className="border-2 rounded-lg shadow-md p-6 w-80 bg-grey-50">
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="border rounded p-2" />
                <input
                    type="password"
                    placeholder="********"
                    onChange={(e) => setUserpass(e.target.value)}
                    className="border rounded p-2" />
                {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white rounded p-2">
                    Login
                </button>
            </form>
        </div>
    </div>
}

export default Login