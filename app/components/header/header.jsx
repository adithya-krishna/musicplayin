import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/action/home';

class Header extends PureComponent {
    renderRightIcons = () => {
        return (
            <IconButton className="material-icons">
                <NavigationClose />
            </IconButton>
        );
    };

    render() {
        return (
            <AppBar
                showMenuIconButton={false}
                title={"Music Playin'"}
                iconElementRight={this.renderRightIcons()}
            />
        );
    }
}

export default Header;
