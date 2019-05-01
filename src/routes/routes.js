import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Portfolio from '../pages/portfolio.jsx';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
    </Switch>
  </BrowserRouter>
);
export default Routes;


