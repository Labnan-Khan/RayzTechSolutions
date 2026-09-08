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
                        <span>MERN</span>
                        <span>CRM</span>
                        <span>Web Apps</span>
                    </div>
                    <h1>MERN Stack <span>Web Application</span> Development </h1>
                    <p>We build custom, scalable, and secure web applications around your business requirements, users, workflows, and goals.</p>
                    <div className='stBottomRow'>
                        <div>
                            <button className='hoverLeftAnimationBtn'>Start a Project</button>
                            <button className='hoverLeftAnimationBtn'>View Our Work</button>
                        </div>
                        <div>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <p>Built around your requirements</p>
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
                    <p>Applications designed around your business requirements.</p>
                </div>
                <div>
                    <h3>5.0</h3>
                    <p>Frontend, backend, APIs, and database development.</p>
                </div>
                <div>
                    <h3>$1B+</h3>
                    <p>Architecture prepared for future features and business growth.</p>
                </div>
            </div>

        </div>

        <div className='ourPromise'>
            <h1>Custom-built and high-performing <br /><span>MERN web applications</span></h1>
            <div className='ourPromiseSec'>
                
                <div>
                    <span><FaHandshake /></span>
                    <div>
                        <h3>Secure Architecture</h3>
                        <p>Secure authentication, protected APIs, and responsible data handling are considered throughout development.</p>
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
                        <h3>Quality Code</h3>
                        <p>Clean and maintainable development focused on reliability, performance, and future expansion.</p>
                    </div>
                </div>

                <div>
                    <span><FaHeadset /></span>
                    <div>
                        <h3>Ongoing Support</h3>
                        <p>We support your application beyond launch with fixes, improvements, integrations, and new features.</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>

        <div className='ourProcess'>
            <h1>From requirements to production, <br /><span>built around your business needs</span></h1>
            <p>Our development process turns your requirements into a functional, responsive, secure, and production-ready web application.</p>

            <div className='ourProcessSec'>
                
                <div>
                    <h3>Discovery & Requirements</h3>
                    <p>We understand your goals, users, workflows, features, and technical requirements before development begins.</p>
                </div>

                <div>
                    <h3>Planning & Architecture</h3>
                    <p>We define the application structure, database, APIs, technology approach, and development roadmap.</p>
                </div>

                <div>
                    <h3>UI/UX Development</h3>
                    <p>We build responsive React interfaces with clear user flows and interactions designed around your product.</p>
                </div>

                <div>
                    <h3>MERN Developmente</h3>
                    <p>We develop the frontend, backend, APIs, authentication, database logic, and core application features.</p>
                </div>

                <div>
                    <h3>Testing & Optimization</h3>
                    <p>We test functionality, responsiveness, security, API behavior, and performance before launch.</p>
                </div>

                <div>
                    <h3>Deployment & Support</h3>
                    <p>We prepare your application for production and provide support for fixes, improvements, and future features.</p>
                </div>
            </div>
        </div>

        <div className='advantage'>
            <h1>What will <span>you get</span> from<br /> working with RTS:</h1>
            <p>You get a development partner focused on building reliable web applications around your requirements—not forcing your business into a template.</p>

            <div className='advantageSec'>
                <div>
                    <h3>Custom Development</h3>
                    <p>We build flexible applications around your business logic, workflows, and product requirements, with an architecture that can evolve with your needs.</p>
                    <div>
                        <p>Custom Business Logic</p>
                        <p>Scalable Architecture</p>
                        <p>Clean, Maintainable Code</p>
                        <p>Responsive Development</p>
                    </div>
                </div>

                <div>
                    <h3>Performance & Security</h3>
                    <p>We focus on dependable performance, secure user access, efficient APIs, and reliable application behavior from development through launch.</p>
                    <div>
                        <p>Performance Optimization</p>
                        <p>Secure Authentication</p>
                        <p>REST API Integration</p>
                        <p>Ongoing Support</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='weOffer'>
            <h1>Our capabilities and what we <br />can offer in <span>web development</span></h1>
            <p>From SaaS platforms to internal business tools, we build custom web applications around your features, users, data, and workflows.</p>

            <div className='weOfferSec'>

                <div>
                    <h2>SaaS & Business Applications</h2>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>SaaS Platforms</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>CRM Systems</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Admin Dashboards</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>ERP Solutions</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Business Management Tools</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Customer Portals</p>
                    </div>
                </div>

                <div>
                    <h2>E-commerce & Marketplaces</h2>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>E-commerce Platforms</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>B2B & B2C Solutions</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Online Marketplaces</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Product Management</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Order Management</p>
                    </div>
                    
                    <div>
                        <span><GiStarShuriken /></span>
                        <p>Payment Integration</p>
                    </div>
                </div>

                <div>
    <h2>Custom Web Applications</h2>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Internal Business Tools</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Workflow Applications</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Database-Driven Apps</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Authentication Systems</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Real-Time Applications</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Custom Management Systems</p>
    </div>
                </div>

                <div>
    <h2>API & Backend Solutions</h2>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>REST API Development</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>API Integrations</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Authentication & Authorization</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Database Architecture</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Business Logic</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Third-Party Integrations</p>
    </div>
                </div>

                <div>
    <h2>User & Data Management</h2>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>User Management</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Role-Based Access</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Analytics Dashboards</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Data Management</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Reporting Systems</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Activity Tracking</p>
    </div>
                </div>


                <div>
    <h2>Application Features</h2>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Search & Filtering</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Notifications</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>File Management</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Payment Processing</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Email Integration</p>
    </div>
    
    <div>
        <span><GiStarShuriken /></span>
        <p>Real-Time Updates</p>
    </div>
                </div>

            </div>
        </div>

        <div className='stack'>
            <h1>Built with a modern <br /> <span>MERN technology stack</span> <br /></h1>

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
                                <h3>What kind of MERN applications can RTS build?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>We build custom SaaS platforms, CRM systems, admin dashboards, customer portals, e-commerce applications, marketplaces, management systems, internal tools, and other database-driven web applications.</p>
                            </div>
        
                        </div>
        
                        <div className={`questionItem ${(openSaqAns == 2)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 2? null : 2)}}>
                            <div className='questionHeading'>
                                <span><IoIosArrowForward /></span>
                                <h3>How long does it take to develop a website or web app?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>Timelines depend on the application's scope, features, integrations, design requirements, and technical complexity. After reviewing your requirements, we can provide a project-specific development timeline.</p>
                            </div>
        
                        </div>
        
                        <div className={`questionItem ${(openSaqAns == 3)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 3? null : 3)}}>
                            <div className='questionHeading'>
                                <span><IoIosArrowForward /></span>
                                <h3>Can you build both the design and development of my product?</h3>
                            </div>
                            <div className='questionAnswer'>
                                <p>Yes, that is our main strength. RTS is a design and development partner that provides a consistent user experience, flawless interface implementation, and faster delivery because there is no gap between concept and code. This unified approach helps our clients reduce production time by 40% and ensures that the final product matches the design pixel by pixel.</p>
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
                                <p>Yes. We can provide post-launch support for bug fixes, maintenance, performance improvements, integrations, and new features as your application grows.</p>
                            </div>
        
                        </div>
            </div>
        </div>

    </div>
  )
}

export default Servie
