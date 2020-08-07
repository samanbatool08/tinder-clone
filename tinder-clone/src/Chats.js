import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return(
        <div className='chats'>
            <Chat 
                name='Mark'
                message='YO whats up!'
                tikmestap='40 seconds ago'
                profilePic='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            />
            <Chat 
                name='Sarah'
                message='Hey! How are you?'
                tikmestap='35 minutes ago'
                profilePic='https://images.unsplash.com/photo-1583452208101-7c1cc44c4132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            />
            <Chat 
                name='Ellen'
                message='Whatsup! <3 '
                tikmestap='55 minutes ago'
                profilePic='https://images.unsplash.com/photo-1572679079418-de9c4361425d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60'
            />
            <Chat 
                name='Sandra'
                message='Hola'
                tikmestap='3 days ago'
                profilePic='https://images.unsplash.com/photo-1576133174348-82c3d0ebef8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60'
            />
            <Chat 
                name='Natasha'
                message='Oops there he is..'
                tikmestap='1 week ago'
                profilePic='https://images.unsplash.com/photo-1573083816958-6bec2f4e11a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60'
            />
        </div>
    )
}

export default Chats;