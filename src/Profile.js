import React, { useEffect, useState } from 'react';
import './styles/index.css';
import profilePic from './saenoooos.svg';

function Home() {

const fullText = 'I investigate how people think, learn and engage with technology.';
const [typedText, setTypedText] = useState('');

useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index += 1;

        if (index === fullText.length) {
            clearInterval(interval);
        }
    }, 25);

    return () => clearInterval(interval);
}, []);

    return (
        <>
            
<meta name="viewport" content="width=device-width, initial-scale=1" />
<header className="page-hero hero flex">

<div className="hero-container flex-column">
<section className="page-section">
<div className="profile-wrapper">

<img src={profilePic} className="profile-img" alt="Saen" />

<div className="profile-text-wrapper">
<h1>Hi there! I'm Saen.</h1>
<h2 className="typewriter-wrapper">
<span className="typewriter-text">{typedText}</span>
</h2>

<img src={profilePic} className="mobile-profile-img" alt="Saen" />


    </div>
</div>
<h2 className="subtext-wrapper">
<span className="subtext">

My interests lie at the intersection of cognitive science, artificial intelligence, and human-computer interaction, with a particular focus on computational approaches to understanding human behaviour. I am particularly interested in accessibility, neurodiversity, and designing human-centered intelligent systems.

</span>

</h2>

<img className="prize-img-desktop" src="./prize4.png" alt="Award" />
<img className="prize-img-mobile" src="./prize5.png" alt="Award" />

<br/>

<p>
	
I hold a First Class Honours BSc in Computer Science and AI from the University of London (Brunel). During my degree, I conducted award-winning research into accessible design principles and the use of artificial intelligence to improve accessibility. I currently work as an optimisation specialist, helping ensure AI systems produce outputs that are safe, high-quality, and adapted to individual users.
</p>

<p><strong>
In September 2027 I plan to embark on an MSc in Cognitive Sciences, building on my technology background to further explore human cognition, decision-making, and computational psychology.
	
</strong></p>

<p>

I am also an experienced tutor alongside my technical work, having supported children and families from ages 5-16. I've had the privilege of helping young children build confidence in their abilities. Supporting neurodiverse students with ADHD and dyslexia has deepened my interest in the many varied ways people think, learn, and solve problems.

</p>

<div
    className="scroll-indicator"
    onClick={() =>
document.querySelector(".page-hero")
    ?.nextElementSibling
    ?.scrollIntoView({
        behavior: "smooth"
        })
    }
>

    <img src="./scrollicon.png"/>
</div>

</section>
                </div>
            </header>
        
		<section className="page-section">

        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <section className="projects" className="content-section"><br/>
                {/* pull<a href="#ai"><h2> &gt;&gt; AI Tool Quick Search &lt;&lt;</h2></a>*/}
                <h3 className="projects-header">What I've been working on recently...</h3>

                <div className="projects-container">
                    <a className="project" href="https://collectives.saen.dev/t/328">
                        <img src="./projects/collectives/collectives.gif" alt="Collectives"/>

                        <h3>Welcome to Collectives ... A Brand-new Innovative Digital Content Organiser!</h3>
                        <p>My most recent project has been the creation of a smart, innovative community hub for digital creators.
                            Powered by a highly customised Discourse Docker engine,
                            I have been building, deploying and maintaining <b>Collectives</b> since April 2025. For more details,
                            click here to read about the site's capabilities and use cases.
                        </p>
                    </a>
                    <a className="project" href="blockmaster">
                        <img src="./projects/blockmaster/banner.gif" alt="AI in Games"/>

                        <h3>Introducing AI to Minecraft</h3>
                        <p>Artificially intelligent chatbots are booming right now - and Minecraft is the best-selling
                            video game of all time! My most recent project aims to design and develop a multimodal
                            assistant that can be interacted within a Minecraft server. For more details click
                            here to be linked to the main site for this project.
                        </p>
                    </a>
                    <div className="project" id="projectFeatured">
                        <img src="./projects/railsafe/banner.gif" alt="Deep-Learning-Railways"/>

                        <h3>A Deep Learning Approach to Railway Accessibility</h3>
                        <p>My award-winning undergraduate final-year project. I built an AI-based predictive model
                            inferencer to detect platform edges at railway stations and display the information to users
                            in an audio-based format.</p>
                    </div>
                    <div className="project">
                        <img src="./projects/snowsniper/banner.gif" alt="BlockMasterAI"/>
                        <h3>How far can AI image generators go?</h3>
                        <p>The rise of generative AI poses a significant threat to independent artists. I built a simple
                            platformer game in Unity with a twist - every sprite is AI generated. I used this as a
                            proof-of-concept to investigate the real-world potential and consequences of generative AI
                            in the arts industry.</p>
                    </div>

                    <a className="project" href="#8queens">
                        <img src="./projects/8queens/banner.jpg" alt="8-Queen Minecraft"/>
                        <h3>Minecraft 8-Queen Solver</h3>
                        <p>Utilising Minecraft mechanics to solve complex mathematical search-related problems.</p>
                    </a>

                    <div className="project">
                        <img src="./railmapper.png" alt="Railmapper Icon"/>
                        <h3>Railmapper</h3>
                        <p>Railmapper was a basic railway display application I created for my A-Level Computer Science
                            Coursework in 2020.</p>
                    </div>
                    <div className="project">
                        <img src="saenoooos.svg" alt="More coming!"/>
                        <h3>Awaiting Arrival...</h3>
                        <p>I'll add some more cool things I've created over the new few months, stay tuned!</p>
                    </div>
                </div>
            </section>


        </div>
	</section>
	</>
    );
}

export default Home;