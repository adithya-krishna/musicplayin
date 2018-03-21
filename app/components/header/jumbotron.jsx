import React, { Component } from 'react';

import theme from './jumbotron.scss';
import Slider from 'components/header/slider';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className={theme.bannerWrapper}>
                <Slider />
            </div>
        );
    }
}
