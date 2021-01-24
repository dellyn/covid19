import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Countries from "./components/CountriesSelect/CountriesSelect";
import Country from "./components/Country/Country";
import Login from "./components/Login/Login";
import ErrorBoundary from "./components/Error/ErrorBoundary";

import "./App.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/covid19/" exact>
            <ErrorBoundary>
              <Login />
            </ErrorBoundary>
          </Route>
          <Route path="/covid19/dashboard">
            <ErrorBoundary>
              <Dashboard />
            </ErrorBoundary>
          </Route>
          <Route path="/covid19/countries">
            <ErrorBoundary>
              <Countries />
            </ErrorBoundary>
          </Route>
          <Route path="/covid19/country/:Country">
            <ErrorBoundary>
              <Country />
            </ErrorBoundary>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
