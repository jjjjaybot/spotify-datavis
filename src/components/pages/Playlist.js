import React from 'react';
import {useParams} from 'react-router-dom';


const Playlist = () => {
    let {id} = useParams()
    return (
        <div className="playlistPage">
        <div className="mainInner">
        <div className="playlistPageInfo">
            <div className="playlistPageImage">
                <img src="https://images.unsplash.com/photo-1587561389769-286b4fd08fbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="playlist image"/>
            </div>
            <h1>Title</h1>
        <p>Spotify</p>
        <button>Play</button>
        <div className="icons">
            <div className="iconsHeart"></div>
            <div className="iconsDots"></div>
        </div>
        <p>Minialism, electronic and modern...</p>
        </div>
        <div className="playlistPageSongs">
            <ul>
                <li>Song one</li>
                <li>Song two</li>
                <li>Song three</li>
                <li>Song four</li>
                <li>Song five</li>
            </ul>
        </div>
        </div>
        </div>
    )
}

export default Playlist;