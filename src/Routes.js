import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import Signup from './containers/Signup';
import Services from './containers/Services';
import FAQ from './containers/FAQ';
import About from './containers/About';
import Contact from './containers/Contact';



export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/services" exact component={Services} />
    <Route path="/faq" exact component={FAQ} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />

    { /* Catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);