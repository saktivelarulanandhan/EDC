import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import reportWebVitals from "./reportWebVitals";
import { IRoute, ROUTING_PATH } from "./routing/RoutingConstant";
import "./index.css";
import { AppProvider } from "./contexts/application.context";
import { CssBaseline } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#0c3d67",
    },
  },
});

root.render(
  <>
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppProvider>
          <Routes>
            {ROUTING_PATH.map((route: IRoute) => {
              return (
                <Route key={route.path} path={route.path} Component={route.component}>
                  {route.children &&
                    route.children.length > 0 &&
                    route.children.map((childRoute: IRoute) => {
                      return <Route path={childRoute.path} Component={childRoute.component} />;
                    })}
                </Route>
              );
            })}
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </ThemeProvider>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
