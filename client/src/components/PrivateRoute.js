import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth'

export const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route {...rest} render={
            () => {
                return auth.isAuthenticated()
                    ? children
                    : <Redirect to="/login" />
            }
        } />
    );
}