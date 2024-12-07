import React from 'react';
import './style.css';
import profilePic from './saenoooos.svg'

function Maintenance() {
    return (
        <div>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
            <header id="redirect-hero">
                <div className="redirect-hero-container">
                    <img src={profilePic} className="redirect-profile-img"/>
                </div>
                <div className="redirect-hero-container">
                    <h1>This site is currently under maintenance...</h1>
                    <h2>Looking for CS Revision Notes? Click <a style={{textDecoration: "none", color: "white"}}
                                                                href="./csrevision">Here</a></h2>

                </div>
            </header>
        </div>
    );
}

export default Maintenance;