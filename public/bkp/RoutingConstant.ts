import React, { Children } from "react";
import Login from "../components/pages/Login/Login";
export interface IRoute{
    path: string;
    component: any;
    children?: IRoute[]    
}
export const ROUTING_PATH = [{
    path: '/',
    component: Login
}];