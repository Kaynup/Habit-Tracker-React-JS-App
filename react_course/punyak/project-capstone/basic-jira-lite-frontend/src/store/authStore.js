import { create } from "zustand";
import { loginUser, logoutUser, registerUser } from "../api/authApi";

const useAuthStore = create((set) => ({
    user: null,
    register: async (name, email, password) => {
        try {
            const data = await registerUser(name, email, password);
            set({ user: data.user.name });
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    login: async (email, password) => {
        try {
            const data = await loginUser(email, password);
            set({ user: data.user.name });
        } catch (e) {
            console.error(e);
        }
    },
    logout: async () => { 
        await logoutUser();
        set({ user: null }); 
    }
}));

export default useAuthStore;