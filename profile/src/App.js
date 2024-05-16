import React from 'react';
import './style.css';
import profilePic from './saenoooos.svg'
function App() {
    return (
        <div>
            <header id="hero">
                <div className="hero-container">
                    <img src={profilePic} className="profile-img"/>
                </div>
                <div className="hero-container">
                    <h1>Hi there! My name is Saen Kazak</h1>
                    <h2>I'm a computer scientist </h2>
                    <p>
                        Saenooos is a Java programmer and data meddler with a keen interest in analysing the interactions
                        between humans and computer systems. Currently in their final year of a Computer Science &amp;
                        Artificial Intelligence undergraduate degree, Saenooos aspires to conduct research into
                        human-centered system design optimization...
                    </p>
                </div>
            </header>
            
            <section id="about" className="content-section">
                <div className="about-container">
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            Saenooos is a Java programmer and data meddler with a keen interest in analysing the
                            interactions between humans and computer systems. Currently in their final year of a Computer
                            Science &amp; Artificial Intelligence undergraduate degree, Saenooos aspires to conduct research
                            into human-centered system design optimization...
                        </p>
                    </div>
                </div>
            </section>

            <section id="projects" className="content-section">
                <h2>Projects</h2>
                <div className="projects-container">
                    <div className="project">
                        <img src="./projects/8queens/banner.jpg" alt="8-Queen Minecraft" />
                        <h3>Minecraft 8-Queen Solver</h3>
                        <p>Utilising Minecraft mechanics to solve complex mathematical search-related problems.</p>
                    </div>
                    <div className="project">
                        <img src="./traindalle.png" alt="CityRailConnections Icon" />
                        <h3>cityrailconnections</h3>
                        <p>
                            I occasionally write articles about railways and you can find some of my thoughts here. I've
                            mostly written about Crossrail and the Great Eastern Main Line, both in the UK.
                        </p>
                    </div>
                    <div className="project">
                        <img src="./railmapper.png" alt="Railmapper Icon" />
                        <h3>Railmapper</h3>
                        <p>Railmapper was a basic railway display application I created for my A-Level Computer Science Coursework in 2020...</p>
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
                    <p>&copy; 2024 Saenooos. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;