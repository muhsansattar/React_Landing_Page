import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBMfrlZcVMWeOus_UZODuT2nuzAl1Gt5Tg",
    authDomain: "chat-bot-demo-d69af.firebaseapp.com",
    databaseURL: "https://chat-bot-demo-d69af.firebaseio.com",
    projectId: "chat-bot-demo-d69af",
    storageBucket: "",
    messagingSenderId: "858008514725",
    appId: "1:858008514725:web:77463f54d2173f03d25d4c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database();
const user = database.ref('user');

export default class UserMessage extends React.Component {
    constructor(){
        super();
        this.state = {
            avatar: '',
            username: '',
            message: '',
            showComponent: false
        }
    }

    componentDidMount(){
        let firebaseAvatar;
        let firebaseUsername;
        let firebaseMessage;

        setTimeout(() => {
            this.setState({
                showComponent: true
            })
        }, 3000);

        let promise1 = new Promise((res, rej) => {
            user.on('value', snapshot => {
                firebaseAvatar = snapshot.val().avatar;
                res(firebaseAvatar)
            });
        });

        let promise2 = new Promise((res, rej) => {
            user.on('value', snapshot => {
                firebaseUsername = snapshot.val().username;
                res(firebaseUsername)
            });
        });

        let promise3 = new Promise((res, rej) => {
            user.on('value', snapshot => {
                firebaseMessage = snapshot.val().message;
                res(firebaseMessage)
            });
        });
        Promise.all([promise1, promise2, promise3]).then((resolvedValues) => {
            this.setState({
                avatar: resolvedValues[0],
                username: resolvedValues[1],
                message: resolvedValues[2],
            });
        });
    }
   
    render() {
        return (
            <div>
                {
                    this.state.showComponent ? (
                        <div className='user-message'>
                            <div style={{background: this.state.avatar}} className='user-avatar'></div>
                            <div className='username'>{ this.state.username }</div>
                            <div className='message'>{ this.state.message }</div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        )
    }
}