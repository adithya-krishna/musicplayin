import React, { PureComponent } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import forEach from 'lodash/forEach';
import isEmpty from 'lodash/isEmpty';

const actionStyles = { textAlign: 'right', padding: '1rem 0' };

class MusicCard extends PureComponent {
    renderChips = () => {
        const { chips } = this.props;
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
    render() {
        const { title, subtitle, cardText, lyric, id } = this.props;
        return (
            <Card>
                <CardTitle title={title} subtitle={subtitle} />
                <CardText>
                    <p>{cardText}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {this.renderChips()}
                    </div>
                </CardText>
                <CardActions style={actionStyles}>
                    <Link to={`/tab/${id}`}>
                        <FlatButton label="View" />
                    </Link>
                </CardActions>
            </Card>
        );
    }
}

export default MusicCard;
