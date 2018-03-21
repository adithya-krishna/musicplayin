import React, { Component } from 'react';
import Routes from 'routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css';

export default class Root extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Routes />
            </MuiThemeProvider>
        );
    }
}
