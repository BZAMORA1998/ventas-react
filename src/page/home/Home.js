import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Link
} from "react-router-dom";
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Home.css';
import Seguridad from "./seguridad/Seguridad";

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
              <Route exact path={`${match.path}`} component={Seguridad}></Route>
              <Route exact path={`${match.path}/seguridad`} component={Seguridad}></Route>
              <Route exact path={`${match.path}/clientes`} component={Seguridad}></Route>
           </Switch>

      </Router>
    );
}