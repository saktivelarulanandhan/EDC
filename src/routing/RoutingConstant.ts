import TableList from "../components/organisms/TableList/TableList";
import ClinicalApp from "../components/pages/ClinicalApp/ClinicalApp";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import Error from "../components/pages/Error/Error";
import FormBuilder from "../components/pages/FormBuilder/FormBuilder";
import FormsList from "../components/pages/FormsList/FormsList";
import FormViewer from "../components/pages/FormViewer/FormViewer";
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
    path: "/clinicalApp",
    component: ClinicalApp,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "forms/form/:formId",
        component: FormViewer,
      },
      {
        path: "forms/list",
        component: FormsList,
      },
      {
        path: "forms/builder/new",
        component: FormBuilder,
      },
    ],
  },
];
