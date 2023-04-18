import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTING_PATH } from './Routing/RoutingConstant';
import { ThemeProvider, createTheme } from '@mui/material';
import ClinicalApp from './ClinicalApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#0c3d67"
    }
  }
});

root.render(
  <>
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
          <Routes>
            {ROUTING_PATH.map((route) => {
              return <Route exact path={route.path} element={route.component}>
                { route.children && route.children.map( (childRoute) => {
                  return <Route exact path={childRoute.path} element={childRoute.component}> </Route>
                })
                }
              </Route>;
            })}
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
