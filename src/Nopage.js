import React from 'react';
import './styles/index.css';
import profilePic from './saenoooos.svg'

function Nopage() {
    return (
        <div>
            <header id="redirect-hero page-hero">
                <div className="redirect-hero-container">
                    <img src={profilePic} className="redirect-profile-img"/>
                </div>
                <div className="redirect-hero-container">
                    <h1>There's no page here.</h1>
                    <br/>
                    <h2>Looking for CS Revision Notes? Click <a style={{textDecoration: "none", color: "white"}}
                                                                href="./csrevision">Here</a></h2>

                </div>
            </header>
        </div>
    );
}

export default Nopage;