import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Link
} from "react-router-dom";
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Home.css';
import Seguridad from "./seguridad/Seguridad";
import RoutePrivate from "../../util/routePrivate/RoutePrivate";

export default function App() {

  let match = useRouteMatch();

    return (
      <Router>

          <Navbar bg="dark" variant="dark">
              <Container>
              <Link  className="text-white m-2" to={`${match.path}`}>Pets&Cats</Link>
              <Nav className="me-auto">
                <Link  className="text-white m-2" to={`${match.path}`}>Home</Link>
                <Link className="text-white m-2"  to={`${match.path}/seguridad`}>Seguridad</Link>
                <Link className="text-white m-2"  to={`${match.path}/clientes`}>Clientes</Link>
              </Nav>
              </Container>
          </Navbar>
          
          <Switch>
              <RoutePrivate exact path={`${match.path}`} component={Seguridad}></RoutePrivate>
              <RoutePrivate exact path={`${match.path}/seguridad`} component={Seguridad}></RoutePrivate>
              <RoutePrivate exact path={`${match.path}/clientes`} component={Seguridad}></RoutePrivate>
           </Switch>

      </Router>
    );
}