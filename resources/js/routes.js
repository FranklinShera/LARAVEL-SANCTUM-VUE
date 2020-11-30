import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

export const routes = [
    {
        path :'/',
        component: Welcome
    },
    {
        path :'/user-login',
        component: Login,
        meta: { requiresGuest: true }
    },
    {
        path :'/register-user',
        component: Register,
        meta: { requiresGuest: true }
    },
    {
        path :'/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }
]
