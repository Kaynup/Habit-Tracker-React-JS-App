> `React Router` lets you add navigation and multiple pages to your React app

```bash
npm install react-router-dom
```

> `Setting up Routes`

wrap your app in `<BrowserRouter>` and define `<Routes>` with `<Route>` components.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
```

- `path="/"` is the home page
- `path="*"` catches all unknown URLs (404 page)

---

> `Link vs Navigate`

use `<Link>` instead of `<a href>` so the page does not reload.

```jsx
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}
```

use `useNavigate` for programmatic navigation (like redirecting after login).

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // login logic...
        navigate("/dashboard");
    };

    return <button onClick={handleLogin}>Login</button>;
}
```

---

> `Route Params and Query Params`

route params are parts of the URL path (like `/users/123`).

```jsx
// Route definition
<Route path="/users/:id" element={<UserProfile />} />
```

reading route params:
```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
    const { id } = useParams();
    return <h1>User ID: {id}</h1>;
}
```

query params are key-value pairs at the end of the URL (like `/search?q=react`).

reading query params:
```jsx
import { useSearchParams } from "react-router-dom";

function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    return <h1>Searching for: {query}</h1>;
}
```

---

> `Nested Routes`

routes inside other routes, often used for shared layouts.

```jsx
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <div>
            <Sidebar />
            <main>
                <Outlet /> {/* Child routes render here */}
            </main>
        </div>
    );
}
```

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />
    <Route path="settings" element={<Settings />} />
</Route>
```

- `index` route renders at `/dashboard`
- `settings` renders at `/dashboard/settings`

---

> `Protected Routes`

restrict access to certain pages based on auth state.

```jsx
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuthenticated }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
```

using it in routing:
```jsx
<Route element={<ProtectedRoute isAuthenticated={userLoggedIn} />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
</Route>
```
