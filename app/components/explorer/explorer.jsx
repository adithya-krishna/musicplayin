import React, { PureComponent } from 'react';
import classnames from 'classnames';
import map from 'lodash/map';

import Container from 'components/grid/container';
import MusicCard from './musicCard';
import theme from './explorer.scss';

class Explorer extends PureComponent {
    onViewHandler = () => {
        console.log('viewing');
    };

    renderCards = () => {
        const { tabs } = this.props;
        const oneOfThree = classnames(
            theme.grid__col,
            theme['grid__col--1-of-3']
        );

        return map(tabs, tab => {
            const { tabInfo: { songName, artist, ...chips }, lyric } = tab;
            return (
                <div key={`${tab._id}`} className={oneOfThree}>
                    <MusicCard
                        title={songName}
                        subtitle={artist}
                        cardText={lyric}
                        chips={chips}
                        onView={this.onViewHandler}
                    />
                </div>
            );
        });
    };

    render() {
        return (
            <Container className={theme.exploreArea}>
                <div className={theme.grid}>{this.renderCards()}</div>
            </Container>
        );
    }
}

export default Explorer;
