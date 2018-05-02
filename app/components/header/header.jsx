import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { darkBlack, white } from 'material-ui/styles/colors';

const appBarStyles = {
    backgroundColor: darkBlack
};

const iconRightStyle = {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const whiteText = { color: white };

class Header extends PureComponent {
    renderRightIcons = () => {
        return (
            <Fragment>
                <Link to={'/explore'}>
                    <FlatButton label="Explore" style={whiteText} />
                </Link>
                <FlatButton label="login" style={whiteText} />
                <FlatButton label="signup" style={whiteText} />
            </Fragment>
        );
    };

    render() {
        const title = (
            <Link
                to={'/'}
                style={{ textDecoration: 'none', ...whiteText }}
            >{`Music Playin'`}</Link>
        );
        return (
            <AppBar
                style={appBarStyles}
                showMenuIconButton={false}
                title={title}
                iconElementRight={this.renderRightIcons()}
                iconStyleRight={iconRightStyle}
            />
        );
    }
}

export default Header;
