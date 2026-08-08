export async function registerUser(name, email, password) {
    const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
        credentials: "include"
    });
    if (!res.ok) {
        let errStr = "Registration failed";
        try { const data = await res.json(); errStr = data.error || errStr; } catch(e) {}
        throw new Error(errStr);
    }
    return res.json();
}

export async function loginUser(email, password) {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    }
    );
    if (!res.ok) {
        let errStr = "Login failed";
        try { const data = await res.json(); errStr = data.error || errStr; } catch(e) {}
        throw new Error(errStr);
    }
    return res.json();
}

export async function logoutUser() {
    await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include"
    });
}