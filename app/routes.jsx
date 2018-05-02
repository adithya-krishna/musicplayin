import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import history from 'middleware/history';

import App from 'components/app';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={App} />
            </Router>
        );
    }
}
