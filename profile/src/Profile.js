import React from 'react';
import './style.css';
import profilePic from './saenoooos.svg'
function Home() {
    return (

	
        <div>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
            <header id="hero">
                <div className="hero-container">
					<div className="profile-wrapper">
					<img src={profilePic} className="profile-img"/>
					<div className="profile-text-wrapper">
                    <h1>Hi there! I'm Saen.</h1>
					<img src={profilePic} className="mobile-profile-img"/>
					<h2>I'm a computer scientist specialized in artificial intelligence development. I build AI-based solutions, game plugins, and interactive websites.</h2>
					</div>
					</div>
					<h3>About Me</h3>
                    <p>
					I have a keen interest in analysing the interactions between humans and computer systems. I am graduating from a degree in Computer Science with a specialism in Artificial Intelligence in June 2024. Throughout my degree I learned to research human-centered design optimization. I greatly enjoy playing around with data and statistics to create cool looking charts and graphs.</p><p>

I have been a Minecraft modder and scripter for over 11 years, stress-testing and pushing the game to its limits. I have developed a vision to challenge the boundaries of mathematical reasoning within high-level simulated environments. Not all of my projects are Minecraft-related but whenever I do make something worthy of showing off, it will be in the list below! Feel free to have a look at some of the things I've done most recently...
                    </p>
                </div>
            </header>
			</div>

    );
}

export default Home;