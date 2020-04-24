import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';
import {Link} from 'react-router-dom';


const Playlists = (props) => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 3,
            name: 'Home playlist 1'
        },
        {
            id: 102,
            category_id: 3,
            name: 'Home playlist 2'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1'
        },
        {
            id: 105,
            category_id: 4,
            name: 'Sunday playlist'
        },
        {
            id: 106,
            category_id: 2,
            name: 'Mood playlist 1'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Mood playlist 2'
        },
    ]

    const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id);
    return (
        <div className="cardsWrapInner">
        {matchedPlaylists.map((playlist, id) => (
            <Link to={`/playlist/` + playlist.id}>
            <div className="card" key={id}>
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Pic 1"/>
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