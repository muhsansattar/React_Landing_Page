import React from 'react';
import * as firebase from 'firebase';

const database = firebase.database();
const bot = database.ref('bot');

export default class ChatBotMessage extends React.Component {
    constructor(){
        super();
        this.state = {
            avatar: '',
            username: '',
            message: '',
            article: '',
            showComponent: false
        }
    }

    componentDidMount(){
        let firebaseAvatar;
        let firebaseUsername;
        let firebaseMessage;
        let firebaseArticle;

        setTimeout(() => {
            this.setState({
                showComponent: true
            })
        }, 1500);

        let promise1 = new Promise((res, rej) => {
            bot.on('value', snapshot => {
                firebaseAvatar = snapshot.val().avatar;
                res(firebaseAvatar)
            });
        });

        let promise2 = new Promise((res, rej) => {
            bot.on('value', snapshot => {
                firebaseUsername = snapshot.val().username;
                res(firebaseUsername)
            });
        });

        let promise3 = new Promise((res, rej) => {
            bot.on('value', snapshot => {
                firebaseMessage = snapshot.val().message;
                res(firebaseMessage)
            });
        });

        let promise4 = new Promise((res, rej) => {
            bot.on('value', snapshot => {
                firebaseArticle = snapshot.val().article;
                res(firebaseArticle)
            });
        });

        Promise.all([promise1, promise2, promise3, promise4]).then((resolvedValues) => {
            this.setState({
                avatar: resolvedValues[0],
                username: resolvedValues[1],
                message: resolvedValues[2],
                article: resolvedValues[3]
            });
        });
    }
   
    render() {
        return (
            <div>
                {
                    this.state.showComponent ? (
                        <div className='bot-message'>
                            <div style={{background: this.state.avatar}} className='user-avatar'></div>
                            <div className='username'>{ this.state.username }</div>
                            <div className='message'>{ this.state.message }</div>
                            <a href={this.state.article}>
                                <span className='article'>{this.state.article}</span>
                            </a>
                        </div>
                    ) : <div></div>
                }
            </div>
        )
    }
}