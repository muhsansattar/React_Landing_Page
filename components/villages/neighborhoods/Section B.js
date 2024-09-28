import React from 'react';
import { Container, Row } from 'react-grid-system';

import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';

export default class SectionB extends React.Component {
    render() {
        return (
            <section className='section-b'>
                <Container>
                    <Row>
                        <ArticleCover/>
                        <SectionDescription/>
                    </Row>
                </Container>
            </section>
        )
    }
}