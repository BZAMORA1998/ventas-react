import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Link
} from "react-router-dom";
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Home.css';
import Seguridad from "./Seguridad/Seguridad";

export default function App() {

  let match = useRouteMatch();

    return (
      <Router>

          <Navbar bg="dark" variant="dark">
              <Container>
              <Link  className="text-white m-2" to={`${match.path}`}>Pets&Cats</Link>
              <Nav className="me-auto">
                <Link  className="text-white m-2" activeClassName="selected" to={`${match.path}`}>Home</Link>
                <Link className="text-white m-2" activeClassName="selected" to={`${match.path}/seguridad`}>Seguridad</Link>
                <Link className="text-white m-2" activeClassName="selected" to={`${match.path}/clientes`}>Clientes</Link>
              </Nav>
              </Container>
          </Navbar>
          <Switch>
              <Router exact path={`${match.path}/seguridad`}>
                <Seguridad />
              </Router>
              <Router exact path={`${match.path}/clientes`}>
                <h1>Hola soy clientes</h1>
              </Router>
              <Router exact path={`${match.path}`}>
                <h1>Hola soy cliete</h1>
              </Router>
           </Switch>

      </Router>
    );
}