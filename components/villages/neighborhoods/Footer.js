import React from 'react';
import { Container, Row } from 'react-grid-system';
import Navigation from './blocks/Navigation.js';

export default class Footer extends React.Component {
    render() {
        return (
            <section className='footer'>
                <Container>
                    <Row>
                        <Navigation/>
                    </Row>
                </Container>
            </section>
        )
    }
}