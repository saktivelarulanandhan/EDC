import Dashboard from "../components/pages/Dashboard/Dashboard";
import Error from "../components/pages/Error/Error";
import Login from "../components/pages/Login/Login";

export interface IRoute {
  path: string;
  component: any;
  children?: IRoute[];
}
export const ROUTING_PATH: Array<IRoute> = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "*",
    component: Error,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
