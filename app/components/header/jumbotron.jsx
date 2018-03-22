import React, { Component } from 'react';

import theme from './jumbotron.scss';
import Slider from 'components/header/slider';

export default class Jumbotron extends Component {
    render() {
        const images = [
            'static/img/1.jpg',
            'static/img/2.jpg',
            'static/img/3.jpg',
            'static/img/4.jpg'
        ];

        return (
            <div className={theme.bannerWrapper}>
                <Slider images={images} />
            </div>
        );
    }
}
