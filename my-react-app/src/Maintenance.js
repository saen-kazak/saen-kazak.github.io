import React from 'react';
import './style.css';
import profilePic from './saenoooos.svg'
function Maintenance() {
    return (
        <div>
            <header id="hero">
                <div className="hero-container">
                    <img src={profilePic} className="profile-img"/>
                </div>
                <div className="hero-container">
                    <h1>This site is currently under maintenance...</h1>
                    <h2>Looking for CS Revision Notes? Click <a style={{textDecoration:"none",color:"white"}} href="http://saen.minecraftengineering.org/csrevision">Here</a></h2>

                </div>
            </header>
            </div>
    );
}

export default Maintenance;