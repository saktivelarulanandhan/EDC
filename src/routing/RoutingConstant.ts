import Login from "../components/pages/Login/Login";
import Error from "../components/pages/Error/Error";
export interface IRoute{
    path: string;
    component: any;
    children?: IRoute[]    
}
export const ROUTING_PATH = [
    {
        path: '/',
        component: Login
    },
    {
        path: '*',
        component: Error
    }
];