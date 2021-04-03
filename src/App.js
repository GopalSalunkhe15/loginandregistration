import React, { useState } from "react";
import Registration from "./component/registration";
import Login from "./component/login";
import Welcome from "./component/welcomepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          {/* <Route path="/welcome"><Welcome /></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
