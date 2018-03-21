import React, { Component } from 'react';

import theme from './slider.scss';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className={theme.slideshow}>
                <div className={theme.segment}>
                    <div className={theme.image} />
                    <div className={theme.text}>
                        <h3>Test</h3>
                    </div>
                </div>

                <div className={theme.segment}>
                    <div className={theme.image} />
                    <div className={theme.text}>
                        <h3>Test</h3>
                    </div>
                </div>

                <div className={theme.segment}>
                    <div className={theme.image} />
                    <div className={theme.text}>
                        <h3>Test</h3>
                    </div>
                </div>

                <div className={theme.segment}>
                    <div className={theme.image} />
                    <div className={theme.text}>
                        <h3>Test</h3>
                    </div>
                </div>
            </div>
        );
    }
}
