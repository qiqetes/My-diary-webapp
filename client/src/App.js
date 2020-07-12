import React, { Component } from 'react'
import Calendar from './Calendar'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute'
import LoginPage from './components/LoginPage'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 300);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 200);
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: undefined
        }
    }

    render() {
        return (
            <div>
                <Router>
                    {/* <Route exact path="/" component={Calendar} /> */}
                    <PrivateRoute exact path="/" component={Calendar} fakeAuth={fakeAuth} />
                    <Route exact path="/login" component={
                        LoginPage
                    } />
                </Router>
            </div>
        )
    }
}
