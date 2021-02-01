import React, { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import auth from "../auth";

export default class Login extends Component {
  render() {
    if (auth.isAuthenticated())return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="col">
          <div className="row">
            <h1>Login here</h1>
          </div>
          <div className="row">
            <button
              onClick={() => {
                //Auth here
                console.log("Authenticating");
                auth.loging();
                this.setState({});
              }}
            >
              Login with google
            </button>
          </div>
        </div>
      </div>
    );
  }
}
