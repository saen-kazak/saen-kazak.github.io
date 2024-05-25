import React from 'react';
import './style.css';
import profilePic from './saenoooos.svg'
function Nopage() {
    return (
        <div>
            <header id="hero">
                <div className="hero-container">
                    <img src={profilePic} className="profile-img"/>
                </div>
                <div className="hero-container">
                    <h1>There's no page here.</h1>
					<br/>
                    <h2>Looking for CS Revision Notes? Click <a style={{textDecoration:"none",color:"white"}} href="./csrevision">Here</a></h2>

                </div>
            </header>
            </div>
    );
}

export default Nopage;