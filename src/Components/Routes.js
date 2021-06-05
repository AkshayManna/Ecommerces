import React from 'react';
import {  HashRouter,Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';

import ProductListing from '../Pages/ProductListing';
import ProductComponent from '../Pages/ProductComponent';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import PersonalDetails from '../Pages/PersonalDetails';
import ContactDetails from '../Pages/ContactDetails';
import {PrivateRoute, PublicRoute} from './index';

const Routes = (props) => { 
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/"  render={()=><ProductListing/>} />
                <Route path="/Login" component={Login} />
                <Route path="/ProductDetails" component={ProductComponent} />
                <Route path="/Registration" component={Registration} />
                <Route path="/PersonalDetails" component={PersonalDetails} />
                <Route path="/ContactDetails" component={ContactDetails} />
            </Switch>
        </HashRouter>
    );
};
export  {Routes};