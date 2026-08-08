import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import useAuthStore from "./store/authStore";
import CreateTicket from "./pages/CreateTicket";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const user = useAuthStore((state) => state.user);
    if (user === null) {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    } else {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/create" element={<CreateTicket />} />
            </Routes>
        </BrowserRouter>
    }
}

export default App;