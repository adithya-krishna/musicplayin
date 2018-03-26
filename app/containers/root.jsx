import React, { Component } from 'react';
import Routes from 'routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import 'normalize.css';

import configureStore from 'store/configureStore';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </MuiThemeProvider>
        );
    }
}
