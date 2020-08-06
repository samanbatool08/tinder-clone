import React from 'react';
import TinderCard from 'react-tinder-card'

function TinderCards() {

    // const people = []
    const [people, setPeople] = React.useState([
        {
            name: 'steve jobs',
            url: 'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        }, 
        {
            name: 'mark zuckerberg',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
        }
    ]);

    return(
        <div>
            <h1>Tinder cards</h1>
            {people.map(person => {
                return (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        // prevent swipe up/down
                        preventSwipe={['up', 'down']}
                        > 
                         
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