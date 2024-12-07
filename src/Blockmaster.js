import React from 'react';

function Blockmaster() {
	React.useEffect(() => {       window.scrollTo(0, 0);     }, []);
	return (



        <div>

            <meta name="viewport" content="width=device-width, minimum-scale=1,initial-scale=1"/>

			<div className="blockmaster-hero-container">
				<div className="blockmaster-backlink"><a href="" >Back to Projects Page</a></div>
				<div className="blockmaster-profile-wrapper">

					<img src="./projects/blockmaster/blockMaster1.png" className="blockmaster1-img-mobile"/>
					<div id="blockmaster-profile-text-wrapper">

						<h1>A brand new AI toolset for Minecraft builders, players & developers</h1>

						<img src="./projects/blockmaster/blockMaster1.png" className="blockmaster1-img"/>
					</div>

				</div>

				<div className="blockmaster-intro">
					<h3 className="blockmaster-hero-container-h3">Are you a Seasoned Builder? A Crafty Adventurer? A
						Visionary Developer?</h3>
					<div className="blockmaster-img-wrapper">
						<img src="./projects/blockmaster/gpucube.png"/>
						<p> BlockMaster AI is a new state-of-the-art tool suite currently being developed to broaden the
							horizons of Minecraft and push the game to its limits. We are currently developing for
							Minecraft servers, so everyone can enjoy the enhancements easily!<br/><br/>

							<img className="blockmaster-mobile-only" src="./projects/blockmaster/variantblock.png"/>
							<br className="blockmaster-mobile-only"/><br className="blockmaster-mobile-only"/>


							Through training specially tuned language models and constructing generative AI
							architectures, we are developing a range of cutting edge tools that will learn and improve
							from existing Minecraft data. BlockMaster uses the most advanced, latest technologies and AI
							developments revolutionize the way you interact with your Minecraft world!<br/></p>

					</div>
					<p>Scroll down to see the latest updates & developments and find out what we're currently working
						on!</p>

					<h3 className="blockmaster-hero-container-h3">What can BlockMasterAI assist with and do?</h3>
					<p>That's a good question! Here is a list of the tools and features we are either currently working
						on, or intend to develop in the future.</p></div>

				<div className="blockmaster-description-wrapper">
					<img src="./projects/blockmaster/sheeppunch.png"/>
					<div className="blockmaster-description-text-wrapper">
						<h3 className="blockmaster-hero-container-h3"></h3>
						<p><strong>Designed for Pro Players and Eager Enthusiasts ... Game On!</strong><br/>BlockMaster
							is currently a solo project in its alpha phase of development. Initial releases for
							Minecraft are
							expected in early to mid-2025. The
							features are still in very early stages of development - check back here periodically for
							new updates on
							project progress!</p>
						<p><strong>Playground Now Available!</strong><br/>See the capabilities of the chatbot yourself
							by checking out
							the brand-new Blockmaster Playground! This is an interactive web demo of the chatbot's
							capabilities, hosted
							on HuggingFace using Streamlit. <a className="blockmaster-hf-demo-link"
															   href="http://playground.blockmaster.minecraftengineering.org">Click
								Here to Access.</a></p>


					</div>
				</div>

				<div id="blockmaster-features-root">

					<div className="blockmaster-feature">

						<img src="./projects/blockmaster/saenoos-mic.png"/>

						<div className="blockmaster-feature-inner-wrapper">
							<h1>Integrated Chatbot</h1>

							<p>Need advice or inspiration while playing? Just type /ai in-game and ask our AI chatbot
								anything Minecraft-related.<br/>Get instant answers, tips, and ideas right within your
								server.<br/><strong>How does it work?</strong> Our chatbot consists of a hosted language
								model core, fine-tuned on countless Minecraft-specific wiki articles, forum data and
								game insights.</p></div>


					</div>

					<div className="blockmaster-feature">
						<img id="blockmaster-railwayimg" src="./projects/blockmaster/railway.png"/>
						<div className="blockmaster-feature-inner-wrapper">

							<h1>Enhanced Build Ideas</h1>

							<p>Get personalized suggestions for your builds by simply uploading a screenshot of your
								world. BlockMasterAI analyzes your designs and offers creative ideas to take your
								projects to the next level!

								<br/><strong>How does it work?</strong> This feature makes use of tokenizers to generate
								a descriptive prompt of a Minecraft scene.</p>

						</div>
					</div>

					<div className="blockmaster-feature">
						<img src="./projects/blockmaster/swaptextureicon.png"/>
						<div className="blockmaster-feature-inner-wrapper">

							<h1>Hot-Swappable Textures</h1>

							<p>Tired of the same textures? Use the advanced image swapper to generate unique block
								textures tailored to your build. From exotic materials to entirely new creations,
								BlockMaster's hotswaps let you customize your world like never before.

								<br/><strong>How does it work?</strong> We use a regressive GAN to generate new textures
								on the fly. </p>

						</div>
					</div>


				</div>

				<div className="blockmaster-updates-wrapper">


					<div className="blockmaster-updates-text-wrapper">
						<h2>Updates &amp; Developments</h2>
						<h3 className="blockmaster-updates-text-wrapper-h3">Watch this space!</h3>

						<div className="blockmaster-update-block" className="blockmaster-update-block-pinned">

							<div className="blockmaster-update-block-title">
								<img className="blockmaster-update-block-title-img"
									 src="./projects/blockmaster/saenooos.png"/>
								<h3>🛠️ Tune This ... If You Can! 🛠️</h3>
							</div>

							<p className="blockmaster-update-block-title-stamp"><b style={{color: 'bbaa00'}}>Pinned
								Post</b> by <b>Saen Kazak</b> on <b>01/10/2024</b></p>

							<div className="blockmaster-update-block-contents"><p>
								Today's task involved seeing how well our AI model would respond to 'tuning' - if we try
								and teach the chatbot some Minecraft-specific knowledge, how effectively will it recall
								this knowledge when we ask it a question?</p><p>

								I spent a good few hours scraping together a set of <b>~1200 question & answer pairs</b>,
								which the model would then interpret as it's <b>knowledge bank</b>.</p>
								<p>Here are some examples of prompts sent to both the tuned model and the base model
									under refreshed chat tokens (to avoid message history interference). I've also
									listed some reasons as to why the tuned results were generally better!</p>

								<div className="blockmaster-update-block-contents-example-prompt"><b>🌁 Prompt Example
									#1: </b><i>tell me about building a city</i></div>

								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/011024-01.png"/>
								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/011024-02.png"/>

								<div className="blockmaster-update-block-contents-example-tuned-and-untuned-wrapper">

									<div className="blockmaster-update-block-contents-example-tuned"><h3>🛠️ Tuned
										Model</h3>When building a city in Minecraft, consider dividing your layout into
										distinct areas or 'districts'. This will help create a more organized and
										visually appealing design. You could include a central square with a fountain or
										statue, surrounded by residential, commercial, and industrial areas. Don't
										forget to add roads, paths, and transportation systems to connect your districts
										and facilitate movement within your city. You could use the Transec plugin to
										generate a network of interconnected tunnels and elevators, allowing for
										efficient travel between buildings and districts.
									</div>

									<div className="blockmaster-update-block-contents-example-untuned"><h3>📘 Base
										Model</h3>Building a city in Minecraft can be a complex and time-consuming
										process, but the final result can be truly rewarding. Here's some general advice
										on constructing a city:**Planning**: Before you start building, plan out your
										city's layout. Decide on the overall design, zones (such as residential,
										commercial, industrial), and a grid system or natural streets. You can use
										paper, graph paper, or even Minecraft itself to plan your city.**Preparation**:
										Set up a base camp near where you intend to build your city. Make sure you have
										a good source of raw materials (such as trees, water, and coal), as well as
										access to a crafting table, furnace, and other tools.**Beginning the Build**:
										Start by constructing the city walls, roads, and main buildings such as a city
										hall, marketplace, and houses. Use materials like wood, stone, or even precious
										stones like diamond or obsidian to reflect your city's prosperity and
										aesthetic.**Adding Structure**: Fill in the city with more structures like
										shops, farms, and decorative elements such as gardens, statues, or fountains.
										Remember to maintain a sense of cohesion and balance when designing the
										city.**Crafting and Furnishing**: Use your crafting table to craft essential
										items like tools, weapons, and clothing. Make sure to furnish buildings with
										items like beds, chests, and chairs.**Adding NPCs**: Consider using the
										'Villager' or 'Wandering Trader' Minecraft feature to populate your city with
										non-playable characters. They can provide services, buy and sell items, and help
										bring your city to life.**Expansion**: As your resources and knowledge grow,
										consider expanding your city, adding new zones, or improving existing
										structures.Keep in mind that Minecraft is a sandbox game, and there are many
										ways to build and design a city. Feel free to explore your creativity and tailor
										your build to your personal preferences!
									</div>

								</div>
								<div className="blockmaster-update-block-contents-example-verdict">

									<p>
										✅ Tuned response is more <b>concise</b> and answers the user question <b>more
										clearly</b><br/>
										✅ Tuned response uses <b>external knowledge</b> to supplement the response<br/>
										❌ Untuned response references <b>irrelevant data</b> about NPCs.<br/>
										❌ Untuned response uses <b>unneccessary complex</b> formatting styles.
									</p>

								</div>


								<p>Despite apparent success for some of Minecraft's mechanics, it is also clear that
									more training is required in other areas.</p><p> The training data currently has a
									focus on design innovations and creative building, as opposed to survival mechanics.
									This is apparent when attempting to ask a question outside these topics. When
									querying results about piglins, the tuned model appears to perform <i>worse</i> than
									the base.</p>

								<div className="blockmaster-update-block-contents-example-prompt"><b>🔥 Prompt Example
									#2: </b><i>i want to travel the nether. How do I prevent piglins from attacking
									me?</i></div>

								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/011024-04.png"/>
								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/011024-03.png"/>

								<div className="blockmaster-update-block-contents-example-tuned-and-untuned-wrapper">

									<div className="blockmaster-update-block-contents-example-tuned"><h3>🛠️ Tuned
										Model</h3>To travel the nether safely and prevent piglins from attacking you,
										make sure to keep a distance from them and avoid provoking them. Piglins can be
										found near lava and will attack if you get too close. To pass by them safely,
										try to stay at least 3-4 blocks away and don't look at them directly. If you
										need to cross through an area with piglins, consider building a bridge or a
										tunnel to separate yourself from them. They can't move through certain blocks,
										such as obsidian and bedrock, so you can use these to create a barrier between
										you and the piglins. By being cautious and avoiding direct confrontation, you
										can successfully navigate through the nether without taking any damage from the
										piglins.
									</div>

									<div className="blockmaster-update-block-contents-example-untuned"><h3>📘 Base
										Model</h3>Piglins, mobs found in the Nether, can be aggressive towards players
										unless they are wearing gold armor or carrying a gold item. To prevent piglins
										from attacking you, follow these steps: Obtain Gold: Gather gold nuggets, which
										are typically found in shallow water or treasures, and smelt them into gold
										ingots using a furnace. Craft Gold Armor: Using gold ingots, craft a complete
										set of gold armor (helmet, chestplate, leggings, and boots) in an anvil or using
										a crafting table if you already have gold armor. Alternative Option: Instead of
										wearing gold armor, you can carry a gold item in your off-hand to prevent
										piglins from attacking you without having to wear a full suit of gold armor. By
										following these steps, you'll be able to traverse the Nether safely with minimal
										disturbance from piglins.
									</div>

								</div>
								<div className="blockmaster-update-block-contents-example-verdict">

									<p>
										❌ Tuned response seems to confuse <b>Piglins</b> with <b>Endermen</b><br/>
										❌ Tuned response does not reference the use of <b>gold armour</b> (the correct
										response)<br/>
										✅ Tuned response is <b>gramatically fluent</b> and its answer is <b>more
										comprehensive</b><br/>
										✅ Tuned response makes reference to <b>construction</b>, which could suggest
										some influence in response accuracy<br/>
										👍️ Both responses make reference to <b>game aspects</b> e.g. blocks

									</p></div>


								<p>But, when we go back to concepts that the model has become familiarised with, it
									becomes clear that the fine-tuning has made a difference in generation of relevant
									answers.</p>

								<p>The third example shown below references the mushroom block palette, something which
									is documented in the tuning data.</p>

								<div className="blockmaster-update-block-contents-example-prompt"><b>🍄
									Prompt Example #3: </b><i>I'm planning to build a house using mushroom blocks. Do
									you have any suggestions on which blocks I should use?</i></div>
								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/011024-05.png"/>
								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/011024-06.png"/>
								<div className="blockmaster-update-block-contents-example-tuned-and-untuned-wrapper">

									<div className="blockmaster-update-block-contents-example-tuned"><h3>🛠️ Tuned
										Model</h3>For a house built with mushroom blocks, consider using a combination
										of Mushroom Blocks, Mossy Stone, and Vines to achieve a natural, earthy
										aesthetic. You could also incorporate Glowstone or Lanterns to add some warmth
										and ambiance to the interior. Additionally, using Stairs or Slabs can help you
										create a unique and interesting roof design.
									</div>

									<div className="blockmaster-update-block-contents-example-untuned"><h3>📘 Base
										Model</h3>Mushroom blocks come in two varieties: normal mushroom blocks and red
										mushroom blocks. Each type offers a unique appearance for your build. Here are
										some suggestions on how you might use these blocks for various areas of your
										house: Walls and Foundations: Consider using a mix of normal and red mushroom
										blocks for the walls and foundations of your house. These blocks can give your
										structure an organic appearance and make it stand out from traditional builds.
										Roofs: Mushroom blocks can be used to create sloping roofs or flat ones with the
										help of other block types like slabs or stairs. Try arranging normal mushroom
										blocks to create the desired slope for a sloped roof, and fill in any gaps with
										red mushroom blocks or other block types. This will help your roof blend
										seamlessly with the walls below. Decorations: Be creative with your use of
										mushroom blocks as decorations, such as making planters for various flowers or
										incorporating them into the design of doors or windows. Lighting: The
										glow-in-the-dark feature of red mushroom blocks can be utilized effectively for
										interior lighting, either by placing them as blocks or by creating torch
										substitutes using red mushroom stems and blocks. Pillars and supports: For
										multi-story builds, mushroom blocks can be used to create unique and sturdy
										pillars, both interior and exterior. Remember, the key to a successful build
										with mushroom blocks is to plan the layout carefully, ensuring that the blocks
										will fit together in a balanced, visually appealing way. With some creativity
										and patience, you can build an impressive structure using these blocks.
									</div>

								</div>
								<div className="blockmaster-update-block-contents-example-verdict">

									<p>
										✅ Tuned response is <b>concise</b> and <b>specific</b><br/>
										✅ Tuned response <b>answers the question</b> and suggests blocks that could be
										used<br/>
										✅ Tuned response can <b>generalise</b> to the concept of <b>'house
										building'</b> as shown through mention of <b>slabs/stairs</b> for roof<br/>
										✅ Tuned response is factually correct when referencing game mechanics<br/>

									</p></div>

								<p>The dataset is publicly available on <a
									style={{fontWeight: 'bold', textDecoration: 'none', color: '99ffff'}}
									href="http://huggingface.co/datasets/saenoooos/BlockMasterAI">HuggingFace 🤗</a> if
									you wish to see it for yourself!</p>
								<p>Keep an eye out, because I'm going to be adding more data over the coming weeks!</p>

							</div>
						</div>


						<div className="blockmaster-update-block">

							<div className="blockmaster-update-block-title">
								<img className="blockmaster-update-block-title-img"
									 src="./projects/blockmaster/saenooos.png"/>
								<h3 className="blockmaster-hero-container-h3">Databases ... Databases Everywhere!</h3>
							</div>

							<p className="blockmaster-update-block-title-stamp">Posted by <b>Saen
								Kazak</b> on <b>21/09/2024</b></p>

							<div className="blockmaster-update-block-contents"><p>The system is now able to generate a
								uniquely hashed conversation token which can be used to recall a specific chat history!
								New commands have been added to reset the chat history (by resetting the token). The
								connected database stores everything and will eventually - via a web front - also allow
								a user to recall their old chats and manage their conversation histories.</p>

								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/210924-01.png"/>
								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/210924-02.png"/>

							</div>
						</div>

						<div className="blockmaster-update-block">

							<div className="blockmaster-update-block-title">
								<img className="blockmaster-update-block-title-img"
									 src="./projects/blockmaster/saenooos.png"/>
								<h3>Spigot API Success!</h3>
							</div>

							<p className="blockmaster-update-block-title-stamp">Posted by by <b>Saen
								Kazak</b> on <b>17/09/2024</b></p>

							<div className="blockmaster-update-block-contents"><p>After lots of tweaking and testing
								with different frameworks, databases and GPU-related awesomeness, I&apos;m thrilled to
								announce that the language model tokenizer is now integrating successfully with the
								Bukkit API! The system is now able to generate responses directly in Minecraft using the
								simple <code>/ai [prompt]</code> command. This is a big first step and the AI is able to
								respond to queries in real time and display them accurately within the game.</p><p>It's
								important to note that the model is running at this stage on a standard core with no
								fine-tuning. It has also been heavily quantized to run on a single machine with an RTX
								3070Ti GPU for inference. Therefore, the actual responses are likely to be inaccurate
								and produce nonsense - but that&apos;s okay right now! The important thing is that all
								the different API hooks and server forwarding is stable and works as intended.</p>
								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/150924-01.jpg"/>
								<img className="blockmaster-update-image"
									 src="./projects/blockmaster/updates/150924-02.jpg"/>


							</div>

						</div>


					</div>
					<img className="blockmaster-updates-wrapper-image" src="./projects/blockmaster/updates.png"/>

				</div>


				<div className="blockmaster-developer-wrapper">

					<div className="blockmaster-developer-text-wrapper">
						<h3>About the Developer</h3>
						<p>Saen Kazak is a software developer who has been modding Minecraft for over 11 years. He holds
							a Computer Science degree from Brunel (University of London), where he conducted
							award-winning research into the use of AI in accessibility.<br/><br/>
							<strong>Do you want to suggest ideas or collaborate?<br/><br/></strong>Drop an email
							to <strong>saenkazak@gmail.com</strong> and I'll get back to you!<br/><br/> Alternatively,
							you can message me on <a href="http://linkedin.com/in/saen-kazak">LinkedIn by clicking
								here.</a></p>

					</div>
					<img src="./projects/blockmaster/saenooos.png"/>

				</div>
				<div id="blockmaster-footer">

					<div className="blockmaster-footer-element"><a href="http://saen.minecraftengineering.org">Main
						Page</a></div>
					<div className="blockmaster-footer-element"><a
						href="http://saen.minecraftengineering.org/projects/blockmaster/ethical-ai.html">Ethical AI
						Statement</a></div>
					<div className="blockmaster-footer-element"><a href="https://www.youtube.com/@saenoooos">YouTube</a>
					</div>

				</div>
			</div>
		</div>

	);
}

export default Blockmaster;