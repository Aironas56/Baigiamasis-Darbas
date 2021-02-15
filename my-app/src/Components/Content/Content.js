import React from "react";

import {Switch, Route} from "react-router-dom";
import AdForm from "../../Pages/Ads/AdCreate";
import Ads from "../../Pages/Ads/Ads";
import SingleJobAd from "../../Pages/Ads/AdJobSingle";
import Login from "../../Pages/Login/Login"
import Register from "../../Pages/Register/register";
import PrivateRoute from "./PrivateRoute";


export default () => (

    <main className="container">
        <Switch>
            <Route exact path="/">
                <Ads/>
            </Route>
            <PrivateRoute path="/createAD" roles={['ADMIN']}>
                <AdForm/>
            </PrivateRoute>
            <Route path="/ad/:id">
                <SingleJobAd/>
            </Route>
            <Route path="/login">
               <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
        </Switch>
    </main>
)