import React from 'react';

import { Container, Row } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

export default class SectionC extends React.Component {
    render() {
        return (
            <section className='section-c'>
                <Container>
                    <Row>
                        <CallToAction title={this.props.title} subtitle={this.props.subtitle}/>
                    </Row>
                </Container>
            </section>
        )
    }
}