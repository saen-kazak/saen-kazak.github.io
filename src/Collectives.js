import React, { useEffect, useState } from 'react';
import './style.css';
import profilePic from './saenoooos.svg';

function Collectives() {
    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        const countdown = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            window.location.href = 'https://collectives.saen.dev';
        }, 3000);

        return () => {
            clearInterval(countdown);
            //clearTimeout(redirect);
        };
    }, []);

    return (
        <div className="redirect-root">
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <header id="redirect-hero">
                <div className="redirect-hero-container">
                    <img src={profilePic} className="redirect-profile-img" alt="Profile" />
                    <h1>
                        This site has moved to{' '}
                        <a style={{ textDecoration: "none" }} href="https://collectives.saen.dev">
                            collectives.saen.dev
                        </a>
                    </h1>
                    <h2>
                        Redirecting in {secondsLeft} ... <br/>Click <a href="https://collectives.saen.dev">here</a> if not redirected!
                    </h2>
                </div>
            </header>
        </div>
    );
}

export default Collectives;