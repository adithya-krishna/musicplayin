import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/header/header';
import Container from 'components/grid/container';
import Explorer from 'components/explorer/explorer';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Container} />
                    <Route exact path="/explore" component={Explorer} />
                </Switch>
            </Fragment>
        );
    }
}
