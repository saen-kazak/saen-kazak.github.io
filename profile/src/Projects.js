import React from 'react';
import './style.css';
import profilePic from './saenoooos.svg'
function Home() {
    return (

	
        <div>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
            <section id="projects" className="content-section">
                <h2 id="projectsHeader">Projects</h2>
                <div className="projects-container">
                    <div className="project" id="projectFeatured">
                        <img src="./projects/railsafe/banner.gif" alt="Deep-Learning-Railways" />
						
                        <h3>A Deep Learning Approach to Railway Accessibility</h3>
                        <p>My award-winning undergraduate final-year project. I built an AI-based predictive model inferencer to detect platform edges at railway stations and display the information to users in an audio-based format.</p>
                    </div>
                    <div className="project">
                        <img src="./projects/snowsniper/banner.gif" alt="AI in Games" />
                        <h3>How far can AI image generators go?</h3>
                        <p>The rise of generative AI poses a significant threat to independent artists. I built a simple platformer game in Unity with a twist - every sprite is AI generated. I used this as a proof-of-concept to investigate the real-world potential and consequences of generative AI in the arts industry.</p>
                    </div>
					
                    <div className="project">
                        <img src="./projects/8queens/banner.jpg" alt="8-Queen Minecraft" />
                        <h3>Minecraft 8-Queen Solver</h3>
                        <p>Utilising Minecraft mechanics to solve complex mathematical search-related problems.</p>
                    </div>
                    
                    <div className="project">
                        <img src="./railmapper.png" alt="Railmapper Icon" />
                        <h3>Railmapper</h3>
                        <p>Railmapper was a basic railway display application I created for my A-Level Computer Science Coursework in 2020.</p>
                    </div>
                    <div className="project">
                        <img src="saenoooos.svg" alt="More coming!" />
                        <h3>Awaiting Arrival...</h3>
                        <p>I'll add some more cool things I've created over the new few months, stay tuned!</p>
                    </div>
                </div>
            </section>

            <footer>
			
                <div className="footer-container">
                    <p><a className="csrevision" href="./csrevision">Looking for CS Revision Notes? Click Here</a></p>
                </div>
            </footer>
        </div>
    );
}

export default Home;