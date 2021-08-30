import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from "./componente/page/Login/Login";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
