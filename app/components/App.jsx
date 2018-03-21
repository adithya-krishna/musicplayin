import React, { Component } from 'react';

import Header from 'components/header/header';
import Jumbotron from 'components/header/jumbotron';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Jumbotron />
            </div>
        );
    }
}
