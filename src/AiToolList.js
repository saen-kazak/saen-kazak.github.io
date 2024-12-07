import React, {useState} from 'react';
import './style.css';
import profilePic from './saenoooos.svg';

const tools = [
    {
        name: 'ChatGPT',
        description: 'Classic ChatGPT deserves its space at the top of this list.',
        link: 'http://chatgpt.com',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png',
        backgroundColor: '405f57',
        color: 'white'
    },
    {
        name: 'Roboflow',
        description: 'I sometimes use Roboflow when training image classifiers due to its effective conversion of data into formats that can be read by segmentation models.',
        link: 'http://roboflow.com',
        imgSrc: 'https://assets-global.website-files.com/5f6bc60e665f54545a1e52a5/6374c97de94f946ff2b9e7ad_xIWWM_a-_400x400.jpg',
        backgroundColor: '400382',
        color: 'white'
    },
    {
        name: 'ElevenLabs',
        description: 'ElevenLabs is a zero-shot mapper for custom training of voice models using AI.',
        link: 'http://elevenlabs.io/text-to-speech',
        imgSrc: 'https://media.licdn.com/dms/image/sync/C4D27AQFALvfwUNfSYA/articleshare-shrink_800/0/1711376398038?e=2147483647&v=beta&t=zXtxui9oHyuIND9mZZCFUcpcHTGLHCnYvlibNbhePQg',
        backgroundColor: 'b2b2b2',
        color: '111'
    },
    {
        name: 'Perplexity AI',
        description: 'An advanced Large Language Model with a search-engine focus.',
        link: 'https://www.perplexity.ai',
        imgSrc: 'https://seeklogo.com/images/P/perplexity-ai-logo-13120A0AAE-seeklogo.com.png',
        backgroundColor: 'ffffff',
        color: 'black'
    },
    {
        name: 'Leonardo AI',
        description: 'Open-access image synthesis forked from Midjourney.',
        link: 'https://www.leonardo.ai',
        imgSrc: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/c1fccefd-39eb-4bfc-b99b-06bcf8c30e62.jpg',
        backgroundColor: '440f19',
        color: 'white'
    },
    {
        name: 'ImmersityAI (LeiaPix)',
        description: 'Converts static images to motion video.',
        link: 'https://immersity.ai',
        imgSrc: 'https://aitoolmall.com/wp-content/uploads/2023/03/626163550ec80a85dbbf9bd4_icon-leiapix_%E5%89%AF%E6%9C%AC.png',
        backgroundColor: '222222',
        color: 'white'
    },
    {
        name: 'InVideo AI',
        description: 'AI Video generator that uses language model prompts to create animated videos using stock footage.',
        link: 'https://invideo.ai',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_21r-bF02Y1nN0F3gCyNQy2NXaqIMMBXdw&s',
        backgroundColor: 'e3307c',
        color: 'ffffff'
    }
];

function AiToolList() {
    React.useEffect(() => {       window.scrollTo(0, 0);     }, []);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <style>{`
			
				::-webkit-scrollbar {
				  display: none;
				}
					
				
				
                a {
                    text-decoration: none;
                    color: white;
                }
                
                a:visited {
                    text-decoration: none;
                    color: white;
                }
                
                p {
                    font-size: 1.2rem;
                    text-align: left;
                    margin: 1rem 0rem;
                    font-family: 'Titillium Web';
                }
                
                #hero {
                    justify-content: center;
                }
                
                .profile-wrapper {
                    align-items: center;
                }
                
                .profile-img {
                    height: 150px;
                }

                .tool-component {
                    margin: 2rem 2rem;
                    background: #111;
                    padding: 1rem 2rem;
                    border-radius: 2rem;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: no-wrap;
                    align-items: center;
                    width: 30rem;
                    min-height: 15rem;
                }
                
                .tool-description-wrapper {
                    margin: 0rem 2rem;
                }
                
                .tool-description-wrapper h1 {
                    margin: 0rem;
                }
                
                .tool-component img {
                    width: 5rem;
                    height: 5rem;
                    border-radius: 100%;
                }
                
                .tool-description-wrapper {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: no-wrap;
                    align-items: center;
                }

                .tool-list {
                    display: flex;
                    align-items: flex-start;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                }
               
				
				
				.search-bar {
					text-align:center;
					width:100%;
					margin:3rem 0rem 2rem 0rem;
					
					
				}
				
				.search-bar input {
					width: 70%;
					font-family:'Titillium web';
					font-size:2rem;
					border:none;
					background-color:#171b5a;
					color:#fff;
					padding:1rem 0rem;
					text-align:center;
					border-radius:2rem;
				}
				
				.search-bar input::placeholder {
					font-family:'Titillium web';
					border:none;
					color:#aaa;
					text-align:center;
				}
				
				
                @media screen and (max-width: 768px) {
                    .tool-component {
                        flex-direction: column;
                    }
                    
                    .tool-description-wrapper h1 {
                        margin: 1rem 0rem;
                        align-self: center;
                    }
                    
                    .tool-description-wrapper p {
                        margin: 0rem;
                        align-self: center;
                    }
                    
                    .hero-container {
                        margin-top: 2rem;
                    }
                    
                    .tool-list {
                        justify-content: center;
                    }
                }
            `}</style>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <header id="hero">
                <div className="hero-container">
                    <div className="profile-wrapper">
                        <img src={profilePic} className="profile-img" alt="Profile"/>
                        <div className="profile-text-wrapper">
                            <h2>AI Tools Quick Reference</h2>
                            <img src={profilePic} className="mobile-profile-img" alt="Profile"/>
                        </div>
                    </div>
                </div>
            </header>


            <div className="tool-list">

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Filter tools"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {filteredTools.map((tool, index) => (
                    <a
                        key={index}
                        className="tool-component"
                        style={{backgroundColor: tool.backgroundColor, color: tool.color}}
                        href={tool.link}
                    >
                        <img className="tool-icon" src={tool.imgSrc} alt={tool.name}/>
                        <div className="tool-description-wrapper">
                            <h1>{tool.name}</h1>
                            <p>{tool.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default AiToolList;