import React from 'react';
import { Col } from 'react-grid-system';

export default class Laptop extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <img className='laptop' src='../../../../../../images/laptop.svg'/>
            </Col>
        )
    }
}