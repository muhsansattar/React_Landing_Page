import React from 'react';
import { Col } from 'react-grid-system';
import Heading from './houses/Heading.js';
import Divider from './houses/Divider.js';
import Paragraph from './houses/Paragraph.js';

export default class Navigation extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <Heading/>
                <Divider/>
                <Paragraph/>
            </Col>
        )
    }
}