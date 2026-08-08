import { useState } from "react";
import useAuthStore from "../store/authStore";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTickets, updateBulkTickets, deleteBulkTickets } from "../api/ticketsApi";
import { Link } from "react-router-dom";

function Dashboard() {
    const user = useAuthStore((state) => state.user);
    const logoutAction = useAuthStore((state) => state.logout);
    const queryClient = useQueryClient();

    const [selectionColumn, setSelectionColumn] = useState(null);
    const [selectedTicketIds, setSelectedTicketIds] = useState([]);

    const { isPending, error, data } = useQuery({
        queryKey: ["tickets"], 
        queryFn: fetchTickets,
        retry: false
    });

    const updateMutation = useMutation({
        mutationFn: ({ ids, status }) => updateBulkTickets(ids, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tickets"] });
            setSelectionColumn(null);
            setSelectedTicketIds([]);
        }
    });

    const deleteMutation = useMutation({
        mutationFn: (ids) => deleteBulkTickets(ids),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tickets"] });
            setSelectionColumn(null);
            setSelectedTicketIds([]);
        }
    });

    const toggleSelectionMode = (colName) => {
        if (selectionColumn === colName) {
            setSelectionColumn(null);
            setSelectedTicketIds([]);
        } else {
            setSelectionColumn(colName);
            setSelectedTicketIds([]);
        }
    };

    const toggleTicket = (id) => {
        setSelectedTicketIds(prev => 
            prev.includes(id) ? prev.filter(tid => tid !== id) : [...prev, id]
        );
    };

    const handleAction = (colName) => {
        if (selectedTicketIds.length === 0) return;
        if (colName === "Todo") {
            updateMutation.mutate({ ids: selectedTicketIds, status: "In Progress" });
        } else if (colName === "In Progress") {
            updateMutation.mutate({ ids: selectedTicketIds, status: "Done" });
        } else if (colName === "Done") {
            deleteMutation.mutate(selectedTicketIds);
        }
    };

    if (isPending) return <p>Loading tickets...</p>;
    if (error) return <p>Error loading tickets</p>;
    
    const todos = data.filter(t => t.status === "Todo");
    const inProgress = data.filter(t => t.status === "In Progress");
    const done = data.filter(t => t.status === "Done");

    const renderColumn = (title, statusName, tickets, actionLabel) => {
        const isSelecting = selectionColumn === statusName;
        return (
            <div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
                    <h2 className="font-semibold text-gray-700">{title} ({tickets.length})</h2>
                    {isSelecting ? (
                        <div className="flex gap-2">
                            <button onClick={() => toggleSelectionMode(null)} className="text-xs text-gray-500 hover:underline">Cancel</button>
                            <button onClick={() => handleAction(statusName)} className="bg-blue-600 text-white text-xs px-2 py-1 rounded shadow hover:bg-blue-700">
                                {actionLabel}
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => toggleSelectionMode(statusName)} className="text-xs text-blue-600 hover:underline bg-blue-100 px-2 py-1 rounded">Select</button>
                    )}
                </div>
                {tickets.map(ticket => (
                    <div key={ticket.id} onClick={() => isSelecting && toggleTicket(ticket.id)} className={`bg-white p-3 rounded shadow-sm border ${isSelecting && selectedTicketIds.includes(ticket.id) ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'} hover:shadow-md cursor-pointer transition flex justify-between items-center`}>
                        <p className="font-medium text-gray-800">{ticket.title}</p>
                        {isSelecting && (
                            <input 
                                type="checkbox" 
                                checked={selectedTicketIds.includes(ticket.id)}
                                readOnly
                                className="h-4 w-4 text-blue-600"
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return <div>
        <header className="flex justify-between items-center p-4 bg-blue-700 text-white shadow">
            <div className="bg-blue-200 text-black rounded shadow flex px-4 py-2 font-medium">
                <p>Welcome, {user}</p>
            </div>
            <p className="text-white text-2xl font-bold tracking-wide">
                Lite Jira Application Service
            </p>
            <div className="bg-blue-900 text-white rounded shadow flex px-4 py-2 hover:bg-blue-800 transition">
                <button onClick={logoutAction} className="font-medium">Logout</button>
            </div>
        </header>
        <div className="flex justify-between items-center p-4 bg-gray-50 pb-0">
            <h2 className="text-xl font-bold text-gray-800">Test Project</h2>
            <Link to="/create" className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition font-medium">
                + Create New Ticket
            </Link>
        </div>
        <main className="flex-1 p-4 bg-gray-50 overflow-x-auto min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[700px]">
                {renderColumn("To Do", "Todo", todos, "Start Tickets")}
                {renderColumn("In Progress", "In Progress", inProgress, "Close Tickets")}
                {renderColumn("Done", "Done", done, "Delete Tickets")}
            </div>
        </main>
    </div>
}

export default Dashboard;