import useAuthStore from "../store/authStore";
import { useQuery } from "@tanstack/react-query";
import { fetchTickets } from "../api/mockApi";
import { Link } from "react-router-dom";

function Dashboard() {
    const user = useAuthStore((state) => state.user);
    const logoutAction = useAuthStore((state) => state.logout);

    const { isPending, error, data } = useQuery(
        { queryKey: ["tickets"], queryFn: fetchTickets });

    if (isPending) return <p>Loading tickets</p>
    const todos = data.filter(t => t.status === "Todo");
    const inProgress = data.filter(t => t.status === "In Progress");
    const done = data.filter(t => t.status === "Done");

    return <div>
        <header className="flex justify-between items-center p-4 bg-blue-700 text-white">
            <div className="bg-blue-200 text-black rounded shadow flex px-4 py-2">
                <p>Welcome, {user}</p>
            </div>
            <p className="text-white text-2xl">
                Lite Jira Application Service
            </p>
            <div className="bg-blue-900 text-white rounded shadow flex px-4 py-2">
                <button onClick={logoutAction}>Logout</button>
            </div>
        </header>
        <div className="p-4 bg-gray-50 flex justify-end pb-0">
            <Link to="/create" className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">
                Create New Ticket
            </Link>
        </div>
        <main className="flex-1 p-4 bg-gray-50 overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[700px]">
                <div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-3">
                    <h2 className="font-semibold text-gray-700 border-b-2 border-gray-300 pb-2">To Do ({todos.length})</h2>
                    {todos.map(ticket => (
                        <div key={ticket.id} className="bg-white p-3 rounded shadow-sm border border-gray-200 hover:shadow-md cursor-pointer transition-shadow">
                            <p className="font-medium text-gray-800">{ticket.title}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-3">
                    <h2 className="font-semibold text-gray-700 border-b-2 border-gray-300 pb-2">In Progress ({inProgress.length})</h2>
                    {inProgress.map(ticket => (
                        <div key={ticket.id} className="bg-white p-3 rounded shadow-sm border border-gray-200 hover:shadow-md cursor-pointer transition-shadow">
                            <p className="font-medium text-gray-800">{ticket.title}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-3">
                    <h2 className="font-semibold text-gray-700 border-b-2 border-gray-300 pb-2">Done ({done.length})</h2>
                    {done.map(ticket => (
                        <div key={ticket.id} className="bg-white p-3 rounded shadow-sm border border-gray-200 hover:shadow-md cursor-pointer transition-shadow">
                            <p className="font-medium text-gray-800">{ticket.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </div>
}

export default Dashboard;