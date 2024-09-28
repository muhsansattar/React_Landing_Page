import React from 'react';
import { Container, Row } from 'react-grid-system';

import Laptop from './blocks/houses/Laptop.js';
import SectionDescription from './blocks/Section Description.js';

export default class SectionA extends React.Component {
    render() {
        return (
            <section className='section-a'>
                <Container>
                    <Row>
                        <SectionDescription/>
                        <Laptop/>
                    </Row>
                </Container>
            </section>
        )
    }
}