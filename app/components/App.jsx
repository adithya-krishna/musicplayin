import React, { Component, Fragment } from 'react';

import Header from 'components/header/header';
import Jumbotron from 'components/header/jumbotron';
import Container from 'components/grid/container';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Jumbotron />
                <Container />
            </Fragment>
        );
    }
}
