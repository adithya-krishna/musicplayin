import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import classnames from 'classnames';

import theme from './slider.scss';

const ANIMATION_INTERVAL = 8000;

export default class Slider extends Component {
    state = {
        imgIndex: 0,
        imgUrl: this.props.images[0]
    };

    componentDidMount() {
        this.interval = setInterval(this.setCurrentImage, ANIMATION_INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setCurrentImage = () => {
        const { images } = this.props;
        const { imgIndex } = this.state;
        if (isEmpty(images)) {
            throw new Error('Images array not present!');
        }

        const imgCount = images.length - 1;
        if (imgIndex === imgCount) {
            this.setState({
                imgIndex: 0,
                imgUrl: images[0]
            });
        } else {
            this.setState({
                imgIndex: imgIndex + 1,
                imgUrl: images[imgIndex + 1]
            });
        }
    };

    renderImages = () => {
        const { images } = this.props;
        const { imgIndex } = this.state;

        return map(images, (img, index) => {
            const showImage = imgIndex === index;
            const imageClasses = classnames(theme.image, {
                [theme.hide]: !showImage,
                [theme.show]: showImage
            });
            return (
                <div
                    key={`${img}-${index}`}
                    className={imageClasses}
                    style={{ backgroundImage: `url(${img})` }}
                    alt={`slide-${index}`}
                />
            );
        });
    };

    render() {
        return <div className={theme.segment}>{this.renderImages()}</div>;
    }
}
