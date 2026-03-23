import React, { useEffect, useState } from 'react';
import './style.css';
import profilePic from './saenoooos.svg';

function Home() {

const fullText = 'I analyse and improve how people engage with technology.';
const [typedText, setTypedText] = useState('');

useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index += 1;

        if (index === fullText.length) {
            clearInterval(interval);
        }
    }, 50);

    return () => clearInterval(interval);
}, []);

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <header id="hero">
                <div className="hero-container">
                    <div className="profile-wrapper">
                        <img src={profilePic} className="profile-img" alt="Saen" />
                        <div className="profile-text-wrapper">
                            <h1>Hi there! I'm Saen.</h1>
							<h2 className="typewritwer-wrapper">
								<span className="typewriter-text">{typedText}</span>
							</h2>
                            <img src={profilePic} className="mobile-profile-img" alt="Saen" />
							<h2 className="subtext-wrapper">
								<span className="subtext">
									With a deep interest in human-computer interaction principles, I build AI
									augmented systems, game plugins, and interactive websites.
								</span></h2>
							

                        </div>
                    </div>

                    <p>
                        While at university, I conducted extensive award-winning research into straightforward
                        design principles, and the use of AI in accessibility. I now work as an optimization
                        specialist, ensuring AI models provide outputs that are safe, high-quality, and
                        user-adjusted.
                    </p>

                    <p>
                        I love transforming data into meaningful insights, as well as playing around with
                        statistics to create cool looking charts and graphs!
                    </p>

                    <p>
                        My technical skillset covers basic machine learning principles, full-stack web
                        development, and game development. This includes building chatbots, image prediction
                        models, immersive games, and the development of custom projects within games to showcase
                        my versatility and creative problem-solving skills. I thrive on digging into innovative
                        ways to merge technology and design in an attempt to solve impactful problems.
                    </p>

                    <p>
                        I hold a first class honours BSc in Computer Science & AI from the University of London
                        (Brunel).
                    </p>

                    <img className="prize-img-desktop" src="./prize4.png" alt="Award" />
                    <img className="prize-img-mobile" src="./prize5.png" alt="Award" />
                </div>
            </header>
        </>
    );
}

export default Home;