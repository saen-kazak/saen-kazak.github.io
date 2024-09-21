import React from 'react';
import profilePic from './saenoooos.svg'
import blockMaster1 from './blockmaster/blockMaster1.png'
function Blockmaster() {
    return (

	
        <div>
		
			<meta name="viewport" content="width=device-width, minimum-scale=1,initial-scale=1" />
            
                <div className="blockmaster-hero-container">
					<div className="blockmaster-profile-wrapper">
					<img src={blockMaster1} className="blockmaster1-img-mobile"/>
					<div id="blockmaster-profile-text-wrapper">

						<h1>A brand new AI toolset for Minecraft builders, players & developers</h1>
					

					
					
					<img src={blockMaster1} className="blockmaster1-img"/>
					</div>
					
					</div>
					
<div className="blockmaster-intro">
<h3 className="blockmaster-hero-container-h3">Are you a Seasoned Builder? A Crafty Adventurer? A Visionary Developer?</h3>
<div className="blockmaster-img-wrapper">
<img src="./projects/blockmaster/gpucube.png"/>
<p> BlockMaster AI is a new state-of-the-art tool suite currently being developed to broaden the horizons of Minecraft and push the game to its limits. We are currently developing for Minecraft servers, so everyone can enjoy the enhancements easily!<br/><br/>

<img className="blockmaster-mobile-only" src="./projects/blockmaster/variantblock.png"/>
<br className="blockmaster-mobile-only" /><br className="blockmaster-mobile-only" />


Through training specially tuned language models and constructing generative AI architectures, we are developing a range of cutting edge tools that will learn and improve from existing Minecraft data. BlockMaster uses the most advanced, latest technologies and AI developments revolutionize the way you interact with your Minecraft world!<br/></p>

</div>
<p>Scroll down to see the latest updates & developments and find out what we're currently working on!</p>

<h3 className="blockmaster-hero-container-h3">What can BlockMasterAI assist with and do?</h3>
<p>That's a good question! Here is a list of the tools and features we are either currently working on, or intend to develop in the future.</p></div>
<div id="blockmaster-features-root">

<div className="blockmaster-feature">

<img src="./projects/blockmaster/saenoos-mic.png"/>

<div className="blockmaster-feature-inner-wrapper">
	<h1>Integrated Chatbot</h1>
	
	<p>Need advice or inspiration while playing? Just type /ai in-game and ask our AI chatbot anything Minecraft-related.<br/>Get instant answers, tips, and ideas right within your server.<br/><strong>How does it work?</strong> Our chatbot consists of a hosted language model core, fine-tuned on countless Minecraft-specific wiki articles, forum data and game insights.</p></div>
	

</div>

<div className="blockmaster-feature">
<img id="blockmaster-railwayimg" src="./projects/blockmaster/railway.png"/>
	<div className="blockmaster-feature-inner-wrapper">

		<h1>Enhanced Build Ideas</h1>
	
		<p>Get personalized suggestions for your builds by simply uploading a screenshot of your world. BlockMasterAI analyzes your designs and offers creative ideas to take your projects to the next level!
		
		<br/><strong>How does it work?</strong> This feature makes use of tokenizers to generate a descriptive prompt of a Minecraft scene.</p>
		
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
		<h3 className="blockmaster-hero-container-h3">Designed for Pro Players and Eager Enthusiasts  ... Game On!</h3>
		
		<p>BlockMaster is currently a solo project in development, with initial releases expected in late 2024. The features are still in very early stages of development, so check back here at a later date for updates on the project and its progress!</p>
		
		

	</div>
</div><div className="blockmaster-updates-wrapper">


<div className="blockmaster-updates-text-wrapper">
<h2>Updates &amp; Developments</h2>
<h3 className="blockmaster-updates-text-wrapper-h3">Watch this space!</h3>

<div className="blockmaster-update-block" className="blockmaster-update-block-pinned">

<div className="blockmaster-update-block-title">
<img className="blockmaster-update-block-title-img" src="./projects/blockmaster/saenooos.png"/>
<h3>Spigot API Success!</h3>
</div>

<p className="blockmaster-update-block-title-stamp"><b style={{color:'bbaa00'}}>Pinned Post</b> by <b>Saen Kazak</b> on <b>17/09/2024</b></p>

<div className="blockmaster-update-block-contents"><p>After lots of tweaking and testing with different frameworks, databases and GPU-related awesomeness, I&apos;m thrilled to announce that the language model tokenizer is now integrating successfully with the Bukkit API! The system is now able to generate responses directly in Minecraft using the simple <code>/ai [prompt]</code> command. This is a big first step and the AI is able to respond to queries in real time and display them accurately within the game.</p><p>It's important to note that the model is running at this stage on a standard core with no fine-tuning. It has also been heavily quantized to run on a single machine with an RTX 3070Ti GPU for inference. Therefore, the actual responses are likely to be inaccurate and produce nonsense - but that&apos;s okay right now! The important thing is that all the different API hooks and server forwarding is stable and works as intended.</p>
<img className="blockmaster-update-image" src="./projects/blockmaster/updates/150924-01.jpg"/>
<img className="blockmaster-update-image" src="./projects/blockmaster/updates/150924-02.jpg"/>


</div></div>

<div className="blockmaster-update-block">

<div className="blockmaster-update-block-title">
<img className="blockmaster-update-block-title-img" src="./projects/blockmaster/saenooos.png"/>
<h3 className="blockmaster-hero-container-h3">Databases ... Databases Everywhere!</h3>
</div>

<p className="blockmaster-update-block-title-stamp">Posted by <b>Saen Kazak</b> on <b>21/09/2024</b></p>

<div className="blockmaster-update-block-contents"><p>The system is now able to generate a uniquely hashed conversation token which can be used to recall a specific chat history! New commands have been added to reset the chat history (by resetting the token). The connected database stores everything and will eventually - via a web front - also allow a user to recall their old chats and manage their conversation histories.</p>

<img className="blockmaster-update-image" src="./projects/blockmaster/updates/210924-01.png"/>
<img className="blockmaster-update-image" src="./projects/blockmaster/updates/210924-02.png"/>

</div>


</div>

</div>
<img className="blockmaster-updates-wrapper-image" src="./projects/blockmaster/updates.png"/>

</div>



<div className="blockmaster-developer-wrapper">

<div className="blockmaster-developer-text-wrapper">
		<h3>About the Developer</h3>
		<p>Saen Kazak is a software developer who has been modding Minecraft for over 11 years. He holds a Computer Science degree from Brunel (University of London), where he conducted award-winning research into the use of AI in accessibility.<br/><br/>
		<strong>Do you want to suggest ideas or collaborate?<br/><br/></strong>Drop an email to <strong>saenkazak@gmail.com</strong> and I'll get back to you!<br/><br/> Alternatively, you can message me on <a href="http://linkedin.com/in/saen-kazak">LinkedIn by clicking here.</a></p>
		
</div>
<img src="./projects/blockmaster/saenooos.png"/>

</div>
<div id="blockmaster-footer">

<div className="blockmaster-footer-element"><a href="http://saen.minecraftengineering.org">Main Page</a></div>
<div className="blockmaster-footer-element"><a href="http://saen.minecraftengineering.org/projects/blockmaster/ethical-ai.html">Ethical AI Statement</a></div>
<div className="blockmaster-footer-element"><a href="https://www.youtube.com/@saenoooos">YouTube</a></div>

</div>
</div>
</div>

    );
}
	
export default Blockmaster;