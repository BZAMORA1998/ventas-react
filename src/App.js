import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from "./componente/page/Login/Login";
import Home from "./componente/page/home/Home";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/home" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
