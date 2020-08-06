import React from 'react';
import TinderCard from 'react-tinder-card'

function TinderCards() {

    // const people = []
    const [people, setPeople] = React.useState([
        {
            name: 'steve jobs',
            url: ''
        }, 
        {
            name: 'mark zuckerberg',
            url: ''
        }
    ]);

    return(
        <div>
            <h1>Tinder cards</h1>
            {people.map(person => {
                return (
                    <TinderCard> 
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }}
                            className='card'>
                                <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )
            })}
        </div>
    )
}

export default TinderCards;