import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTicket } from "../api/mockApi";

export default function CreateTicket() {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Todo");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !status.trim()) return;

        const newTicket = {
            id: Math.floor(Math.random() * 10000), // [0, 1) * 10000
            title: title,
            status: status
        };

        await createTicket(newTicket);
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20">
            <div className="bg-white border rounded-lg shadow-md p-8 w-96 flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Create New Ticket</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Ticket Title</label>
                        <input
                            type="text"
                            placeholder="E.g., Fix login bug"
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Status</label>
                        <select
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                        >
                            <option value="Todo">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="text-gray-500 hover:text-gray-800 font-medium transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-600 text-white font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition"
                        >
                            Create Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}