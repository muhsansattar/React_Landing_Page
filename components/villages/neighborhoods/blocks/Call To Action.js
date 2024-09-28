import React from 'react';

import { Col } from 'react-grid-system';
import Title from './houses/Title.js';
import Subtitle from './houses/Subtitle.js';
import Button from './houses/Button.js';

export default class CallToAction extends React.Component {
    render() {
        return (
            <Col lg={12}>
                <Title title={this.props.title}/>
                <Subtitle subtitle={this.props.subtitle}/>
                <Button/>
            </Col>
        )
    }
}