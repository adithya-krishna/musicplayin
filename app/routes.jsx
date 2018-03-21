import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'middleware/history';

import App from 'components/app';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </Router>
        );
    }
}