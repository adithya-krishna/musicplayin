import React from 'react';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import isEmpty from 'lodash/isEmpty';
import replace from 'lodash/replace';
import map from 'lodash/map';
import forEach from 'lodash/forEach';
import ReactHtmlParser from 'react-html-parser';

import Container from 'components/grid/container';
import theme from './explorer.scss';
import { chordsRegex } from 'regex/wordRegex';

class TabView extends React.PureComponent {
    renderChips = chips => {
        let renderedChips = [];
        if (!isEmpty(chips)) {
            forEach(chips, (chip, keyName) => {
                renderedChips = [
                    ...renderedChips,
                    <Chip
                        key={`${keyName}`}
                        style={{ marginBottom: '4px', marginRight: '4px' }}
                        labelStyle={{ fontSize: '11px', lineHeight: '24px' }}
                    >{`${keyName}: ${chip}`}</Chip>
                ];
            });
        }
        return renderedChips;
    };

    renderTabs = () => {
        const { tab: { lyric } } = this.props;
        const tabText = [];

        const demoText = map(lyric, (line, lineIndex) => {
            return replace(
                line,
                chordsRegex,
                val =>
                    `<span href="Javascript:void(0);"class="${
                        theme.chord
                    } ${val}">${val}</span>`
            );
        });

        return map(demoText, t =>
            ReactHtmlParser(`<p class="${theme.line}">${t}</p>`)
        );
    };

    render() {
        const { tab: { tabInfo: { songName, artist, ...chips } } } = this.props;

        return (
            <Container>
                <h3>{`${songName} by ${artist}`}</h3>
                <Divider />
                <div className={theme.chipSection}>
                    {this.renderChips(chips)}
                </div>
                <pre>{this.renderTabs()}</pre>
            </Container>
        );
    }
}

export default TabView;
