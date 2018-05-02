import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/header/header';
import HomePage from 'components/home/homepage';
import ExplorerContainer from 'containers/explorerContainer';
import TabsContainer from 'containers/tabsContainer';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        exact
                        path="/explore"
                        component={ExplorerContainer}
                    />
                    <Route exact path="/tab/:id" component={TabsContainer} />
                </Switch>
            </Fragment>
        );
    }
}
