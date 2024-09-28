import React from 'react';
import { Col } from 'react-grid-system';
import UserMessage from './houses/User Message';
import ChatBotMessage from './houses/Chat Bot Message';

export default class SlackChannel extends React.Component {
    render() {
        const messages = this.props.messages;
        return (
            <Col lg={12}>
                <img className='slack-channel' src='../../../../../../images/slackchannel.svg'/>
                {
                    messages ? (
                        <div>
                            <UserMessage/>
                            <ChatBotMessage/>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </Col>
        )
    }
}