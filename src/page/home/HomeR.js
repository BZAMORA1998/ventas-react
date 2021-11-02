import React from "react";
import Seguridad from "./../home/seguridad/Seguridad";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";

function HomeR() {
  let match = useRouteMatch();
  return (
    <Router>
       <Switch>
          <Route exact path={`${match.path}`} component={Seguridad}></Route>
          <Route exact path={`${match.path}/seguridad`} component={Seguridad}></Route>
          <Route exact path={`${match.path}/clientes`} component={Seguridad}></Route>
        </Switch>
    </Router>
  );
}

export default HomeR;
