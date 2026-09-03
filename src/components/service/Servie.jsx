import React, { useState } from 'react'
import './servie.css'
import { FaCode, FaCss3Alt, FaHandshake, FaHeadset, FaHtml5, FaReact, FaShieldAlt, FaStar } from 'react-icons/fa'
import { GiStarShuriken } from 'react-icons/gi'
import { IoIosArrowForward, IoLogoJavascript } from 'react-icons/io'
import { RiNodejsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
function Servie() {

        const [openSaqAns,setOpenSaqAns] = useState(false)
  return (
    <div className='service'>

        <div className='serviceHeroSec'>
            <div className='sHerotopSec'>
                <div className='stopLeftSec'>
                    <div className='stTopRow'>
                        <span>Saas</span>
                        <span>AI</span>
                        <span>Web 3.0</span>
                        <span>CRM</span>
                    </div>
                    <h1>Web Development <span>Service</span></h1>
                    <p>Get highly-performing, fully functional and secure web experiences. Our front-end and back-end development team is here to improve, redesign, or build your website from a scratch.</p>
                    <div className='stBottomRow'>
                        <div>
                            <button className='hoverLeftAnimationBtn'>Book a Call</button>
                            <button className='hoverLeftAnimationBtn'>Check Portfolio</button>
                        </div>
                        <div>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <p>80+ reviews</p>
                        </div>
                    </div>

                </div>

                <div className='svideoSec'>
                    video
                </div>
            </div>

            <div className='sHeroBSec'>
                <div>
                    <h3>205+</h3>
                    <p>Projects successfully completed in various niches</p>
                </div>
                <div>
                    <h3>5.0</h3>
                    <p>Average client rating on Clutch</p>
                </div>
                <div>
                    <h3>$1B+</h3>
                    <p>Funds raised by our partners</p>
                </div>
            </div>

        </div>

        <div className='ourPromise'>
            <h1>High-performing and custom-built <br /><span>web development services</span></h1>
            <div className='ourPromiseSec'>
                
                <div>
                    <span><FaHandshake /></span>
                    <div>
                        <h3>Collaborative Process</h3>
                        <p>We work closely with your team to align with your goals and vision</p>
                    </div>
                </div>

                <div>
                    <span><FaShieldAlt /></span>
                    <div>
                        <h3>Strong Security</h3>
                        <p>Robust security measures to protect your product and user data</p>
                    </div>
                </div>

                <div>
                    <span><FaCode /></span>
                    <div>
                        <h3>Quality Development</h3>
                        <p>Delivering reliable, high-performing solutions with clean code</p>
                    </div>
                </div>

                <div>
                    <span><FaHeadset /></span>
                    <div>
                        <h3>Full Support</h3>
                        <p>From concept to launch, we’re with you all the way</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>

        <div className='ourProcess'>
            <h1>Our web development process wraps <br />around your <span>unique business needs</span></h1>
            <p>Our developers strive to turn design into a fully functional, custom and responsive website for your business.</p>

            <div className='ourProcessSec'>
                
                <div>
                    <h3>Discovery & Planning</h3>
                    <p>The process begins with a discovery workshop to define the concept, review documentation.</p>
                </div>

                <div>
                    <h3>Process Setup & Analysis</h3>
                    <p>In this stage, we create a roadmap with timelines, milestones, and initial prototype ideas.</p>
                </div>

                <div>
                    <h3>Design Stage</h3>
                    <p>During this stage, we create aroadmap with timelines, and initial prototype ideas.</p>
                </div>

                <div>
                    <h3>Development Stage</h3>
                    <p>During this stage, we outline a roadmap with timelines, milestones and estimates.</p>
                </div>

                <div>
                    <h3>Testing Stage</h3>
                    <p>During testing, we assess functionality, usability, compatibility, security, and performance.</p>
                </div>

                <div>
                    <h3>Maintenance Stage</h3>
                    <p>The final stage is deployment, ensuring a launch and preparing for essential post-release tasks.</p>
                </div>
            </div>
        </div>

        <div className='advantage'>
            <h1>What will <span>you get</span> from <br /> cooperating <span>with us</span>:</h1>
            <p>Our front-end and back-end developers offer long-term and personalized website development solutions with a diverse tech stack, responsive interfaces and safety measures.</p>

            <div className='advantageSec'>
                <div>
                    <h3>Expertise & Experience</h3>
                    <p>Our team brings deep industry knowledge and hands-on experience in Web3, DeFi, and decentralized applications.</p>
                    <div>
                        <p>Skilled Developers</p>
                        <p>Flexible Approach</p>
                        <p>Performance Optimization</p>
                        <p>Process Transparency</p>
                    </div>
                </div>

                <div>
                    <h3>Support & Security</h3>
                    <p>We prioritize security and support to ensure a seamless user experience. With robust protocols, continuous monitoring, and a dedicated team.</p>
                    <div>
                        <p>Ongoing Support</p>
                        <p>Comprehensive Security</p>
                        <p>Integration Services</p>
                        <p>Scalability & Growth</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='weOffer'>
            <h1>Our capabilities and what we <br />can offer in <span>web development</span></h1>
            <p>From creating visually stunning and functional websites to implementing dynamic features - our developers are experienced to cover your needs.</p>

            <div className='weOfferSec'>

                <div>
                    <h2>Saas</h2>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>CRM, Analytics</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Automation tools</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>HR management</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>ERP softwares</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Al data tools</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Marketings platforms</p>
                    </div>
                </div>

                <div>
                    <h2>E-commerce</h2>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Retail</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>B2C & B2B</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Subscription</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Marketplace</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Integrations for ERP, PIM, WMS</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Payment and tax services</p>
                    </div>
                </div>

                <div>
                    <h2>E-commerce</h2>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Retail</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>B2C & B2B</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Subscription</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Marketplace</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Integrations for ERP, PIM, WMS</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Payment and tax services</p>
                    </div>
                </div>

            </div>
        </div>

        <div className='stack'>
            <h1>You hire a <span>professional developer</span> <br /> with suitable experience</h1>

            <div className='stackSec'>

                <div>
                    <span><FaHtml5 /></span>
                    <p>HTML</p>
                </div>

                <div>
                    <span><FaCss3Alt /></span>
                    <p>CSS</p>
                </div>

                <div>
                    <span><IoLogoJavascript /></span>
                    <p>JavaScript</p>
                </div>

                <div>
                    <span><FaReact /></span>
                    <p>ReactJS</p>
                </div>

                <div>
                    <span><RiNodejsLine /></span>
                    <p>NodeJS</p>
                </div>

                <div>
                    <span><SiExpress /></span>
                    <p>ExpressJS</p>
                </div>

                <div>
                    <span><SiMongodb /></span>
                    <p>MongoDB</p>
                </div>
            
            </div>
        </div>

        <div className='faq'>
        
            <h1 className='faqforMobile'>FAQ on Web Development services</h1>
            <div className='faqrightSec'>
        
        
                        <div className={`questionItem ${(openSaqAns == 1)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 1? null : 1)}}>
                            <div className='questionHeading'>
                                <span><IoIosArrowForward /></span>
                                <h3>What kind of web development projects do you handle?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>We create various websites, corporate platforms, and web applications. Whether you need a Webflow landing page or a scalable React-based platform, our developers will create customized, high-performance solutions that meet your business goals. </p>
                            </div>
        
                        </div>
        
                        <div className={`questionItem ${(openSaqAns == 2)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 2? null : 2)}}>
                            <div className='questionHeading'>
                                <span><IoIosArrowForward /></span>
                                <h3>How long does it take to develop a website or web app?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>Timelines depend on the scope and functionality. We can launch a small website in <span>4 weeks</span>, but complex web platforms or SaaS dashboards take <span>10+ weeks</span>. </p>
                            </div>
        
                        </div>
        
                        <div className={`questionItem ${(openSaqAns == 3)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 3? null : 3)}}>
                            <div className='questionHeading'>
                                <span><IoIosArrowForward /></span>
                                <h3>Can you build both the design and development of my product?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>Yes, that is our main strength. Arounda is a design and development partner that provides a consistent user experience, flawless interface implementation, and faster delivery because there is no gap between concept and code. This unified approach helps our clients reduce production time by 40% and ensures that the final product matches the design pixel by pixel.</p>
                            </div>
        
                        </div>
        
                        <div className={`questionItem ${(openSaqAns == 4)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 4? null : 4)}}>
                            <div className='questionHeading'>
                                <span><IoIosArrowForward /></span>
                                <h3>Will my website be optimized for SEO and performance?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>Absolutely. Every site we build follows SEO best practices:</p>
                                <ul>
                                    <li>Clean code</li>
                                    <li>Fast loading speed</li>
                                    <li>Mobile responsiveness</li>
                                    <li>Proper meta structure</li>
                                </ul>
                            </div>
        
                        </div>

                        <div className={`questionItem ${(openSaqAns == 5)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 5? null : 5)}}>
                            <div className='questionHeading'>
                                <span><IoIosArrowForward /></span>
                                <h3>Do you provide post-launch support?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>Yes, we offer support after launch. Our team monitors performance, applies updates, and can add new features as your business grows. </p>
                            </div>
        
                        </div>
            </div>
        </div>

    </div>
  )
}

export default Servie
