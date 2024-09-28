import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <a href='#'>
                    <h1 className='title'>
                        { this.props.title }
                    </h1>
                </a>
            </div>
        )
    }
}