import { Children } from "react";
import FormBuilder from "../Components/FormBuilder/FormBuilder";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import ClinicalApp from "../ClinicalApp";
import Error from "../Error/Error";
import FormReviewer from "../Components/FormBuilder/FormReviewer";

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
        path:'formReviewer',
        component: <FormReviewer />
    }, {
        path: '*',
        component: <Error />
    }]
}, {
    path: '*',
    component: <Error />
}];