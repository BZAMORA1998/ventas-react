import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Link
} from "react-router-dom";
import Citas from "./Citas/Citas";
import Clientes from "./Clientes/Clientes";

export default function App() {

  let match = useRouteMatch();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`${match.path}`}>Home</Link>
            </li>
            <li>
              <Link to={`${match.path}/citas`}>About</Link>
            </li>
            <li>
              <Link to={`${match.path}/clientes`}>Users</Link>
            </li>
          </ul>
        </nav>

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

      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
