import React from 'react';
import { Link } from 'react-router-dom'

export default class Branding extends React.Component {
    render() {
        return (
            <div>
                <Link to='/demo'>
                    <span className='demo-link'>
                        Demo
                    </span>
                </Link>
            </div>
        )
    }
}