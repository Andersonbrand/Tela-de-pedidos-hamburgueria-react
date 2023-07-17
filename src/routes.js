import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Orders from './pages/Orders';

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact pacth="/" component={Home} />
                <Route exact pacth="/Pedidos" component={Orders} />
            </Switch>
        </Router>
    );
}

export default Routes