import React from 'react';
import { Container, Row } from 'react-grid-system';
import Navigation from './blocks/Navigation.js';
import CallToAction from './blocks/Call To Action.js';
import SlackChannel from './blocks/Slack Channel.js';

export default class Header extends React.Component {
    render() {
        return (
            <section className='header'>
                <Container>
                    <Row>
                        <Navigation/>
                    </Row>
                    <Row>
                        <CallToAction title={this.props.title} subtitle={this.props.subtitle}/>
                    </Row>
                    <Row>
                        <SlackChannel messages={this.props.messages}/>
                    </Row>
                </Container>
            </section>
        )
    }
}