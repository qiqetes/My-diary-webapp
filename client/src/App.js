import React, { Component } from "react";
import Calendar from "./Calendar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import LoginPage from "./components/LoginPage";
import auth from "./auth";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: undefined,
    };
  }

  render() {
    return (
      <div>
        <Router>
          {/* <Route exact path="/" component={Calendar} /> */}
          <PrivateRoute path="/">
            <Calendar />
          </PrivateRoute>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Router>
      </div>
    );
  }
}
