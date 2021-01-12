import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import NewContactform from './components/NewContactForm'
import AboutMe from './components/AboutMe'
import NotFound from './components/NotFound'

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/addcontact" component={NewContactform} exact />
        <Route path="/abouteme" component={AboutMe} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
