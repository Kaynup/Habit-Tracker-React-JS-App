let tickets = [
    {
        id: 1,
        title: "Test1",
        status: "Todo"
    }, {
        id: 2,
        title: "Test2",
        status: "Todo"
    }, {
        id: 3,
        title: "Test3",
        status: "Todo"
    }, {
        id: 4,
        title: "Test4",
        status: "In Progress"
    }, {
        id: 5,
        title: "Test5",
        status: "Done"
    }]

export async function fetchTickets() {
    return new Promise((resolve) => {
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