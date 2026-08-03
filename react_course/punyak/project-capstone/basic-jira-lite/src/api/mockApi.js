let tickets = [
    {
        id: 1,
        title: "Test1",
        status: "Todo"
    }, {
        id: 2,
        title: "Test2",
        status: "Done"
    }]

export async function fetchTickets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(tickets); }, 1000);
    });
}

export async function createTicket(newTicket) {
    return new Promise((resolve) => {
        setTimeout(() => {
            tickets.push(newTicket);
            resolve(newTicket);
        }, 500);
    });
}