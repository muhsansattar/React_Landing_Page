import React from 'react';

import Header from './neighborhoods/Header.js';
import SectionA from './neighborhoods/Section A.js';
import SectionB from './neighborhoods/Section B.js';
import SectionC from './neighborhoods/Section C.js';
import Footer from './neighborhoods/Footer.js';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page'>
                <Header messages={false} title='Developer Bot for SLack' subtitle='One article to one random person in your Slack group. Once a day.'/>
                <SectionA/>
                <SectionB/>
                <SectionC title='Developer Bot for SLack' subtitle='One article to one random person in your Slack group. Once a day.'/>
                <Footer/>
            </div>
        )
    }
}