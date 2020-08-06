import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        // BEM 
        <div className='header'>
            <PersonIcon />
            <h1>I am a Header</h1>
            <ForumIcon />
        </div>
    )
}

export default Header;