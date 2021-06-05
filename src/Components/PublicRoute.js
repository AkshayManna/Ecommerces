import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
            : <Component {...props} />
    )} />
)