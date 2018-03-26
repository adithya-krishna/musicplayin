import React, { PureComponent } from 'react';
import classnames from 'classnames';

import Container from 'components/grid/container';
import MusicCard from './musicCard';
import theme from './explorer.scss';

class Explorer extends PureComponent {
    renderCard = () => {
        return <MusicCard />;
    };

    render() {
        const oneOfFour = classnames(
            theme.grid__col,
            theme['grid__col--1-of-4']
        );
        return (
            <Container className={theme.exploreArea}>
                <div className={theme.grid}>
                    <div className={oneOfFour}>{this.renderCard()}</div>
                    <div className={oneOfFour}>{this.renderCard()}</div>
                    <div className={oneOfFour}>{this.renderCard()}</div>
                    <div className={oneOfFour}>{this.renderCard()}</div>
                </div>
            </Container>
        );
    }
}

export default Explorer;
