import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <h3 className='subtitle'>
                { this.props.subtitle }
                </h3>
            </div>
        )
    }
}