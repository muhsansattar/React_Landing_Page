import React from 'react';
import { Col } from 'react-grid-system';

export default class ArticleCover extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <img className='article-cover' src='../../../../../../images/articlecover.svg'/>
            </Col>
        )
    }
}