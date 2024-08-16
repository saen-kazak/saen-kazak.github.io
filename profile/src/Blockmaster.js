import React from 'react';
import profilePic from './saenoooos.svg'
import blockMaster1 from './blockmaster/blockMaster1.png'
function Blockmaster() {
    return (

	
        <div>
		
			<meta name="viewport" content="width=device-width, initial-scale=1" />
            <header id="blockmaster-hero">
                <div className="blockmaster-hero-container">
					<div className="blockmaster-profile-wrapper">
					<img src={blockMaster1} className="blockmaster1-img-mobile"/>
					<div id="blockmaster-profile-text-wrapper">

						<h1>A brand new AI toolset for Minecraft builders, players & developers</h1>
					

					
					
					<img src={blockMaster1} className="blockmaster1-img"/></div>
					
					</div>
<h3>Are you a Seasoned Builder? Crafty Adventurer? Visionary Developer?</h3>

<p> BlockMaster AI is a new state-of-the-art tool suite currently being developed for deployment on Minecraft servers. 

Through training specially tuned language models and constructing generative AI architectures, we are developing a range of cutting edge tools that will learn and improve from existing Minecraft data. BlockMaster uses the most advanced, latest technologies and AI developments revolutionize the way you interact with your Minecraft world!</p><h3>What can BlockMaster actually do?</h3>
<p>That's a good question! Feel free to scroll through the list of features we are currently developing and intend to develop in the future.</p>
<div id="blockmaster-features-root">

<div className="blockmaster-feature">

<img src="./projects/blockmaster/saenoos-mic.png"/>

<div className="blockmaster-feature-inner-wrapper">
	<h1>Integrated Chatbot</h1>
	
	<p>Need advice or inspiration while playing? Just type /ai in-game and ask our AI chatbot anything Minecraft-related.<br/>Get instant answers, tips, and ideas right within your server.<br/><strong>How does it work?</strong> Our chatbot consists of a hosted language model core, fine-tuned on countless Minecraft-specific wiki articles, forum data and game insights.</p></div>
	

</div>

<div className="blockmaster-feature">
<img src="./projects/blockmaster/swaptextureicon.png"/>
	<div className="blockmaster-feature-inner-wrapper">

		<h1>Hot-Swappable Textures</h1>
	
		<p>Tired of the same textures? Use the advanced image swapper to generate unique block textures tailored to your build. From exotic materials to entirely new creations, BlockMaster's hotswaps let you customize your world like never before.
		
		<br/><strong>How does it work?</strong> We use a regressive GAN to generate new textures on the fly. </p>
		
	</div>
</div>

<div className="blockmaster-feature">
<img src="./projects/blockmaster/swaptextureicon.png"/>
	<div className="blockmaster-feature-inner-wrapper">

		<h1>Hot-Swappable Textures</h1>
	
		<p>Tired of the same textures? Use the advanced image swapper to generate unique block textures tailored to your build. From exotic materials to entirely new creations, BlockMaster's hotswaps let you customize your world like never before.
		
		<br/><strong>How does it work?</strong> We use a regressive GAN to generate new textures on the fly. </p>
		
	</div>
</div>

</div>
<div className="blockmaster-description-wrapper">
	<img src="./projects/blockmaster/sheeppunch.png"/>
	<div className="blockmaster-description-text-wrapper">
		<h3>Designed for Pro Players and Eager Enthusiasts  ... Game On!</h3>
		<p>The project is currently unable to be downloaded - mainly due to the fact that most of it doesn't exist yet!</p>
		<p>BlockMaster is currently a solo project in development, with initial releases expected in late 2024. The features are still in very early stages of development, so check back here at a later date for updates on the project and its progress!</p>

	</div>
</div>
<div className="blockmaster-developer-wrapper">

<div className="blockmaster-developer-text-wrapper">
		<h3>About the Developer</h3>
		<p>Saenooos is a software developer who has been modding Minecraft for over 11 years. He holds a Computer Science degree from Brunel University London, where he conducted award-winning research into the use of AI in accessibility.<br/><br/>
		<strong>Do you want to suggest ideas or collaborate? Drop an email to saen@minecraftengineering.org</strong> and I'll get back to you!<br/><br/> Alternatively, you can message me on <a href="http://linkedin.com/in/saen-kazak">LinkedIn by clicking here.</a></p>
		
</div>

<img src="./projects/blockmaster/saenooos.png"/>
</div>
<div id="blockmaster-footer">

<div className="blockmaster-footer-element"><a href="http://saen.minecraftengineering.org">Main Page</a></div>
<div className="blockmaster-footer-element"><a href="http://saen.minecraftengineering.org/projects/blockmaster/ethical-ai.html">Ethical AI Statement</a></div>
<div className="blockmaster-footer-element"><a href="https://www.youtube.com/@saenoooos">YouTube</a></div>

</div>
</div>
</header>
</div>

    );
}
	
export default Blockmaster;