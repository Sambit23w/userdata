import React, { Component } from 'react'
import {Route, Switch } from "react-router-dom";
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import Error from './error';
export default class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Pageone} />
                    <Route exact path='/pagetwo' component={Pagetwo} />
                    <Route component={Error} />
                </Switch>
            </div>
        )
    }
}
