import useAuthStore from "../store/authStore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const registerAction = useAuthStore((state) => state.register);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await registerAction(name, email, password);
            navigate("/"); // This will unmount the unauth routes automatically if user is set
        } catch (err) {
            setError(err.message);
        }
    }

    return <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="border border-gray-200 rounded-lg shadow-md p-8 w-96 bg-white">
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Register</h2>
            <h4 className="text-md mb-6 text-center text-gray-500">Create a Lite Jira account</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
                <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 font-medium transition">
                    Register
                </button>
            </form>
            <div className="mt-4 text-center">
                <Link to="/" className="text-blue-600 text-sm hover:underline">Already have an account? Login</Link>
            </div>
        </div>
    </div>
}

export default Register;
