import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';
import {Link} from 'react-router-dom';


const Playlists = (props) => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 1,
            name: 'Home playlist 1',
            image: 'https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 102,
            category_id: 1,
            name: 'Home playlist 2',
            image: 'https://images.unsplash.com/photo-1527439243619-f57764e22f29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        },
        {
            id: 103,
            category_id: 2,
            name: 'Home playlist 3',
            image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1',
            image: 'https://images.unsplash.com/photo-1527380992061-b126c88cbb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80'
        },
        {
            id: 105,
            category_id: 2,
            name: 'Sunday playlist',
            image: 'https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        },
        {
            id: 106,
            category_id: 3,
            name: 'Mood playlist 1',
            image:'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80'
        },
        {
            id: 107,
            category_id: 3,
            name: 'Mood playlist 2',
            image:'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
        },
        {
            id: 108,
            category_id: 1,
            name: 'Home playlist 1',
            image: 'https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 109,
            category_id: 1,
            name: 'Home playlist 1',
            image: 'https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 110,
            category_id: 1,
            name: 'Home playlist 1',
            image: 'https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 111,
            category_id: 1,
            name: 'Home playlist 1',
            image: 'https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 112,
            category_id: 1,
            name: 'Home playlist 1',
            image: 'https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
    ]

    const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id)
                             .slice(0,props.limiter);
    return (
        <div className="cardsWrapInner">
        {matchedPlaylists.map((playlist, id) => (
            <Link to={`/playlist/` + playlist.id}>
            <div className="card" key={id}>
                    <div className="cardImage">
                        <img src={playlist.image} alt="Pic 1"/>
                    </div>
                    <div className="cardContent">
                        <h3>{playlist.name}</h3>
                        <span>Minimalism, electronica and modern...</span>
                    </div>
                    <span className="playIcon"><PlayIcon /></span>
                </div> 
            </Link>
        ))}
                </div>
    )
}
export default Playlists;