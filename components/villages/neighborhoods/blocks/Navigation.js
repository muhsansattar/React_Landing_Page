import React from 'react';
import { Col } from 'react-grid-system';
import Branding from './houses/Branding.js';
import DemoLink from './houses/Demo Link.js';

export default class Navigation extends React.Component {
    render() {
        return (
            <Col lg={12}>
                <Col lg={6}>
                    <Branding/>
                </Col>
                <Col lg={6}>
                    <DemoLink/>
                </Col>
            </Col>
        )
    }
}