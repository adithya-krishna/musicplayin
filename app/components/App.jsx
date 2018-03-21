import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/action/home';

export default class App extends Component {
    render() {
        const rigthIcons = (
            <IconButton className="material-icons">
                <NavigationClose />
            </IconButton>
        );
        return (
            <AppBar
                showMenuIconButton={false}
                title={"Music Playin'"}
                iconElementRight={rigthIcons}
            />
        );
    }
}
