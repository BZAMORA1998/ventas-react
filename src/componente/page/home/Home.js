import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Link
} from "react-router-dom";
import Citas from "./Citas/Citas";
import Clientes from "./Clientes/Clientes";
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Home.css';

export default function App() {

  let match = useRouteMatch();

    return (
      <Router>

          <Navbar bg="dark" variant="dark">
              <Container>
              <Link  className="text-white m-2" to={`${match.path}`}>Pets&Cats</Link>
              <Nav className="me-auto">
                <Link  className="text-white m-2" activeClassName="selected" to={`${match.path}`}>Home</Link>
                <Link className="text-white m-2" activeClassName="selected" to={`${match.path}/citas`}>Citas</Link>
                <Link className="text-white m-2" activeClassName="selected" to={`${match.path}/clientes`}>Clientes</Link>
              </Nav>
              </Container>
          </Navbar>
          <Switch>
              <Router exact path={`${match.path}/citas`}>
                <Citas />
              </Router>
              <Router exact path={`${match.path}/clientes`}>
                <Clientes/>
              </Router>
              <Router exact path={`${match.path}`}>
                <Citas />
              </Router>
           </Switch>

      </Router>
    );
}