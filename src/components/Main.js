import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';

const Main = () => {
    return (
    <div className="main">
        <div className="upperNav">
            dummy 
        </div>
        <div className="mainContent">
            <div className="cardsWrap">
            <h1>Uniquely yours</h1>
                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Pic 1"/>
                    </div>
                    <div className="cardContent">
                        <h3>Liked songs</h3>
                    </div>
                    <span className="playIcon"><PlayIcon /></span>
                </div>
            </div>
        </div>
        <div className="mainContent">
            <div className="cardsWrap">
            <h2>Focus</h2>
            <p className="subText">Music to help you concentrate.</p>
                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1587622148498-ce97ad5dad0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Pic 1"/>
                    </div>
                    <div className="cardContent">
                        <h3>Music for concentrations</h3>
                        <span>Minimalism, electronica and modern classical to concentrate to.</span>
                    </div>
                    <span className="playIcon"><PlayIcon /></span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main;