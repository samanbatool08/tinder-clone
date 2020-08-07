import React, { useState, useEffect } from 'react';
import database from './firebase';
import TinderCard from 'react-tinder-card'
import './TinderCards.css';

function TinderCards() {

    // const people = []
    const [people, setPeople] = useState([]);

    // runs based on a conditional
    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))

        // keeping the dependency blank will run the code only once when the page loads 
    }, [])

    return(
        <div>
            <h1>Tinder cards</h1>
            <div className='tinderCards__cardContainer'>
            {people.map(person => {
                return (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        // prevent swipe up/down
                        preventSwipe={['up', 'down']}
                        > 
                        <div 
                            style={{ backgroundImage: `url(${person.url})`, backgroundRepeat: 'no-repeat' }}
                            className='card'>
                                <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )
            })}
            </div>
        </div>
    )
}

export default TinderCards;