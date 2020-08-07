import React from 'react';

import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/Replay'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'

import './SwipeButtons.css'

function SwipeButtons() {
    return(
        <div className='swipeButtons'>
            
            <ReplayIcon />
            <CloseIcon />
            <StarRateIcon />
            <FavoriteIcon />
            <FlashOnIcon />

        </div>
    )
}

export default SwipeButtons;
