import { Children } from "react";
import FormBuilder from "../Components/FormBuilder/FormBuilder";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import ClinicalApp from "../ClinicalApp";
import Error from "../Error/Error";
import FormReviewer from "../Components/FormBuilder/FormReviewer";
import ReviewForm from "../Components/FormReviewer/ReviewForm";
import ReviewGrid from "../Components/FormReviewer/ReviewGrid";
import DataEntryOperator from "../Components/DataEntryOperator/DataEntryOperator";
import DataEntryForm from "../Components/DataEntryOperator/DataEntryForm";

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
        component: <ReviewForm />
    }, {
        path:'reviewGrid',
        component: <ReviewGrid />
    }, {
        path:'dataEntry',
        component: <DataEntryOperator />,
    },{
        path:'dataEntry/form',
        component: <DataEntryForm />
    },{
        path: '*',
        component: <Error />
    }]
}, {
    path: '*',
    component: <Error />
}];