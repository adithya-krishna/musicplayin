import React, { PureComponent } from 'react';
import classnames from 'classnames';
import map from 'lodash/map';

import Container from 'components/grid/container';
import MusicCard from './musicCard';
import theme from './explorer.scss';

class Explorer extends PureComponent {
    renderCards = () => {
        const { tabs } = this.props;
        const oneOfThree = classnames(
            theme.grid__col,
            theme['grid__col--1-of-3'],
            theme.tabCard
        );

        return map(tabs, tab => {
            const {
                tabInfo: { songName, artist, ...chips },
                text,
                lyric,
                _id
            } = tab;
            return (
                <div key={`${_id}`} className={oneOfThree}>
                    <MusicCard
                        id={_id}
                        title={songName}
                        subtitle={artist}
                        cardText={text}
                        lyric={lyric}
                        chips={chips}
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
