import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth'

export const PrivateRoute = ({ component: component, ...rest }) => {
    return (

        <Route {...rest} render={
            (props) => {
                return auth.isAuthenticated()
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            }
        } />
    );
}