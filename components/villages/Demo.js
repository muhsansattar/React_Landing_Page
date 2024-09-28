import React from 'react';

import Header from './neighborhoods/Header'
import Footer from './neighborhoods/Footer'

export default class Demo extends React.Component {
    render() {
        return (
            <div className='demo'>
                <Header messages={true} title='Chat Bot Demo' subtitle='See how it works.'/>
                <Footer/>
            </div>
        )
    }
}