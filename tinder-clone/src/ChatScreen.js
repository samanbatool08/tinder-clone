import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');

    const [messages, setMessages] = useState([
        {
            name: 'Ellen', 
            image: 'https://images.unsplash.com/photo-1572679079418-de9c4361425d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60', 
            message: 'Whats up'
        },
        {
            name: 'Ellen', 
            image: 'https://images.unsplash.com/photo-1572679079418-de9c4361425d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60', 
            message: 'Hows it going! '
        },
        {
            message: 'Going well! '
        }
    ])

    const handleSend = (e) => {
        e.preventDefault()
        setMessages([...messages, { message: input }]);
        setInput('')
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH ELLEN ON 10/09/20</p>
            {messages.map(message => (
                // if the message contains a name add the icon - if not this means that it is the user that is typing
                message.name ? (
                <div className='chatScreen__message'>
                    <Avatar 
                        className='chatScreen__image'
                        alt={message.name}
                        src={message.image}
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div> ) 
                : (
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div> )

            ))}

                <form className='chatScreen__input'>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='chatScreen__inputField'
                        type='text'
                        placeholder='type a message...'/>
                    <button 
                        type='submit'
                        onClick={handleSend}
                        className='chatScreen__inputButton'>SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen;