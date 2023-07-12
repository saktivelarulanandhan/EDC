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
}// , {
//     path: '/clinicalApp',
//     component: <ClinicalApp />,
//     children:[{
//         path:'dashboard',
//         component: <Dashboard />
//     }, {
//         path:'formbuilder',
//         component: <FormBuilder />
//     }, {
//         path:'formReviewer',
//         component: <ReviewForm />
//     }, {
//         path:'reviewGrid',
//         component: <ReviewGrid />
//     }, {
//         path:'dataEntry',
//         component: <DataEntryOperator />,
//     },{
//         path:'dataEntry/form',
//         component: <DataEntryForm />
//     },{
//         path:'dataEntryReviewer',
//         component: <DataEntryReviewerGrid />
//     },{
//         path:'dataEntryReviewer/form',
//         component: <DataEntryReviewerForm />
//     },{
//         path: '*',
//         component: <Error />
//     }]
// }, {
//     path: '*',
//     component: <Error />
// }
];