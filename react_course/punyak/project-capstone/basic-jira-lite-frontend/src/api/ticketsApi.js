const API_URL = "/api/tickets";

export async function fetchTickets() {
    const res = await fetch(API_URL, { credentials: "include" });
    if (!res.ok) {
        let errStr = "Failed to fetch tickets";
        try { const data = await res.json(); errStr = data.error || errStr; } catch(e) {}
        throw new Error(errStr);
    }
    return res.json();
}

export async function createTicket(ticketData) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
        credentials: "include"
    });
    if (!res.ok) throw new Error("Failed to create ticket");
    return res.json();
}

export async function updateBulkTickets(ticketIds, status) {
    const res = await fetch(`${API_URL}/bulk`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketIds, status }),
        credentials: "include"
    });
    if (!res.ok) throw new Error("Failed to update tickets");
    return res.json();
}

export async function deleteBulkTickets(ticketIds) {
    const res = await fetch(`${API_URL}/bulk`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketIds }),
        credentials: "include"
    });
    if (!res.ok) throw new Error("Failed to delete tickets");
    return res.json();
}
