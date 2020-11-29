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
        path :'/login',
        component: Login
    },
    {
        path :'/register',
        component: Register
    },
    {
        path :'/dashboard',
        component: Dashboard
    }
]
