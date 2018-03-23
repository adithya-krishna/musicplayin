import React, { PureComponent } from 'react';
import classnames from 'classnames';
import map from 'lodash/map';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MusicNote from 'material-ui/svg-icons/image/music-note';
import School from 'material-ui/svg-icons/social/school';
import Store from 'material-ui/svg-icons/action/store';

import Section from 'components/grid/section';
import theme from './container.scss';

const removePadding = { padding: 0 };
const cardStyles = { margin: '0.8rem 0' };
const cardContainrStyles = {};
const headerStyles = { padding: '2rem 1rem' };
const headerTitleStyles = { fontSize: '1.4rem' };
const titleStyles = {};
const textStyles = { ...removePadding };
const actionStyles = { textAlign: 'right', padding: '1rem 0' };

const mainPageData = [
    {
        title: 'LEARN THE TOP 20 SONGS EVERY WEEK',
        img:
            'http://musicplay.in/wp-content/uploads/2017/09/IMG-20121029-WA0003.jpg',
        text: [
            'HINDI TOP 20',
            'KANNADA TOP 20',
            'TAMIL TOP 20',
            'ENGLISH TOP 20'
        ]
    },
    {
        title: 'HINDI TOP 20',
        img:
            'http://musicplay.in/wp-content/uploads/2017/09/Mere-rashke-qamar-1.jpg',
        text: [
            'Chalti Hai Kya 9 Se 12',
            'Mere Raske Qamar',
            'Hawaayien',
            'Nazm Nazm',
            'Oonchi Hai B'
        ]
    },
    {
        title: 'KANNADA TOP 20',
        img: 'http://musicplay.in/wp-content/uploads/2017/09/1280x720-j2L.jpg',
        text: [
            'Sanje Hotthu',
            'Ninna Snehadinda',
            'Birugaliyondhige',
            'Ondu Male Bille',
            'Indu Ninna Eduralli'
        ]
    },
    {
        title: 'TAMIL TOP 20',
        img: 'http://musicplay.in/wp-content/uploads/2017/09/maxresdefault.jpg',
        text: [
            'Adi vaadi Thimira',
            'Aalaporaan Thamizhan',
            'Neethanae',
            'Kadhalaada',
            'Surviva'
        ]
    },
    {
        title: 'ENGLISH TOP 20',
        img: 'http://musicplay.in/wp-content/uploads/2017/09/Look.jpg',
        text: [
            'Sam Smith – Too Good At Goodbyes',
            'Dua Lipa – New Rules',
            'Pink – What about us',
            'Taylor Swift – Look What You Made Me Do',
            'ZAYN Ft. Sia – Dusk Till Dawn'
        ]
    }
];

class Container extends PureComponent {
    renderCards = () => {
        return map(mainPageData, (section, index) => {
            const textList = (
                <List style={removePadding}>
                    {map(section.text, (textItem, textIndex) => (
                        <ListItem key={`${textIndex}`} primaryText={textItem} />
                    ))}
                </List>
            );
            return (
                <Card
                    zDepth={4}
                    key={`${section}${index}`}
                    style={cardStyles}
                    containerStyle={cardContainrStyles}
                >
                    <CardHeader
                        style={headerStyles}
                        titleStyle={headerTitleStyles}
                        title={section.title}
                    />
                    <CardMedia>
                        <img src={section.img} alt="Main Guitar" />
                    </CardMedia>
                    <CardTitle style={titleStyles} title={section.title} />
                    <Divider />
                    <CardText style={textStyles} children={textList} />
                    <Divider />
                    <CardActions style={actionStyles}>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            );
        });
    };

    render() {
        return (
            <div className={classnames(theme.container, theme.hoist)}>
                {this.renderCards()}
                <Section>
                    <h1 style={{ textAlign: 'center' }}>
                        SIGN UP WITH US AND GET MUSIC BUSY
                    </h1>
                    <Divider />
                    <div className={theme.smallCardWrapper}>
                        <div className={theme.smallCard}>
                            <MusicNote style={{ width: 196, height: 196 }} />
                            <h2>MUSICIAN</h2>
                            <p>
                                If you play an instrument or sing, join us a a
                                musician, we’ll give you details such as shows |
                                other musicians | bands around you | jam rooms
                                etc..
                            </p>
                        </div>
                        <div className={theme.smallCard}>
                            <School style={{ width: 196, height: 196 }} />
                            <h2>MUSIC SCHOOL</h2>
                            <p>
                                Love to teach guitar or drums, actually any
                                instrument, even singing. Sign up and we will
                                put your details out there to the audience you
                                are trying to reach.
                            </p>
                        </div>
                        <div className={theme.smallCard}>
                            <Store style={{ width: 196, height: 196 }} />
                            <h2>STORES / JAM ROOM</h2>
                            <p>
                                Are you a music space? Selling or renting
                                instruments or jam rooms? sign up and we will
                                get people to your doorstep. Simply Simple
                            </p>
                        </div>
                    </div>
                </Section>
            </div>
        );
    }
}

export default Container;
