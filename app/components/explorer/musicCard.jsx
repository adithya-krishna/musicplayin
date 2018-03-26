import React, { PureComponent } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const actionStyles = { textAlign: 'right', padding: '1rem 0' };

class MusicCard extends PureComponent {
    render() {
        return (
            <Card>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla
                    facilisi. Donec vulputate interdum sollicitudin. Nunc
                    lacinia auctor quam sed pellentesque. Aliquam dui mauris,
                    mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions style={actionStyles}>
                    <FlatButton label="View" />
                </CardActions>
            </Card>
        );
    }
}

export default MusicCard;
