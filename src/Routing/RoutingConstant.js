import { Children } from "react";
import FormBuilder from "../Components/FormBuilder/FormBuilder";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import ClinicalApp from "../ClinicalApp";
import Error from "../Error/Error";

export const ROUTING_PATH = [{
    path: '/',
    component: <Login />
}, {
    path: '/clinicalApp',
    component: <ClinicalApp />,
    children:[{
        path:'dashboard',
        component: <Dashboard />
    }, {
        path:'formbuilder',
        component: <FormBuilder />
    }, {
        path: '*',
        component: <Error />
    }]
}, {
    path: '*',
    component: <Error />
}];