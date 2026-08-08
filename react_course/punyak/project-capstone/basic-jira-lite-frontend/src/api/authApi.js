export async function registerUser(name, email, password) {
    const res = await fetch("http://127.0.0.1:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
        credentials: "include"
    });
    if (!res.ok) throw new Error("Registration failed");
    return res.json();
}

export async function loginUser(email, password) {
    const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    }
    );
    if (!res.ok) throw new Error("Login failed");
    return res.json();
}

export async function logoutUser() {
    await fetch("http://127.0.0.1:5000/api/auth/logout", {
        method: "POST",
        credentials: "include"
    });
}