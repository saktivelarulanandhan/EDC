import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";

export const ROUTING_PATH = [{
    path: '/login',
    component: <Login />
}, {
    path: '/dashboard',
    component: <Dashboard />
},{
    path: '/',
    component: <>NO Route available</>
}];