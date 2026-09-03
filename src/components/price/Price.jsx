import React, { useState } from 'react'
import './price.css'
import { FaCheck } from 'react-icons/fa'
import { IoIosArrowForward, IoMdCheckmark } from 'react-icons/io'
import { MdOutlineCheck } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

function Price() {
    const [openSaqAns,setOpenSaqAns] = useState(false)
    
  return (
    <div className='pricePage'>

        <div className='pheroSec'>
            <div className='pheroLeft'>
                <h1>Start <span>2x faster</span> with a transparent estimate</h1>
                <p>Our process saves clients' project budgets by 32% and accelerates delivery by 40%.</p>
                <button className='hoverLeftAnimationBtn'>Book a Call</button>
            </div>
            <div className='pheroimg'></div>
        </div>

        <div className='priceOption'>
            <h1><span>Flexible</span> engagement <br /> options for every stage</h1>
            <p className='headingp'>Choose the level of design involvement that fits your product goals.</p>

            <div className='priceOptionSection'>
                <div className='switchOptionBtn'>
                    <p>Design</p>
                    <button className='isDevelopment'><span></span></button>
                    <p>Development</p>
                </div>

                <div className='priceOptionDisplay'>

                    <div className='displayPriceItem'>
                        <h3>Part-Time Designer</h3>
                        <p>Best for early validation and focused design tasks</p>
                        <button className='hoverLeftAnimationBtn'>Start now</button>
                        <div className='displayPriceItemBottomSec'>
                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>
                            
                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>
                        </div>
                    </div>

                    <div className='displayPriceItem'>
                        <h3>Part-Time Designer</h3>
                        <p>Best for early validation and focused design tasks</p>
                        <button className='hoverLeftAnimationBtn'>Start now</button>
                        <div className='displayPriceItemBottomSec'>
                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>
                            
                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>
                        </div>
                    </div>


                    <div className='displayPriceItem'>
                        <h3>Part-Time Designer</h3>
                        <p>Best for early validation and focused design tasks</p>
                        <button className='hoverLeftAnimationBtn'>Start now</button>
                        <div className='displayPriceItemBottomSec'>
                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>
                            
                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>

                            <div>
                                <span><IoMdCheckmark /></span>
                                <p>Dedicated designer at half-time capacity</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='pComparison'>
            <div>
                <h1>A сlear breakdown <br/> to  <span>help you choose</span></h1>
                {/* <p>See why businesses choose RayzTechSolutions for reliable, scalable, and high-quality digital solutions.</p> */}
            </div>
            <table>
                <thead>
                    <tr className='firsttr'>
                        <th>Feature</th>
                        <th>RTS</th>
                        <th>Freelancers</th>
                        <th>Outsourcing Vendor</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Senior-level expertise</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span><IoClose /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        
                    </tr>

                    <tr>
                        <td>Specialized market knowledge</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span><IoClose /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        
                    </tr>

                    <tr>
                        <td>Clear scope, timeline & cost before start</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span><IoClose /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                    </tr>

                    <tr>
                        <td>Fast project start {"(3–5 days)"}</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span><IoClose /></span></td>
                    </tr>

                    <tr>
                        <td>3-day free trial</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                        <td><span ><IoClose /></span></td>
                    </tr>

                    <tr>
                        <td>Direct and fast communication</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                    </tr>

                    <tr>
                        <td>Dedicated project manager</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                    </tr>

                    <tr>
                        <td>Easy to scale team capacity</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                    </tr>

                    <tr>
                        <td>Minimal client involvement required</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                    </tr>

                    <tr>
                        <td>End-to-end design & engineering</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                        <td><span ><IoClose /></span></td>
                    </tr>

                    <tr>
                        <td>Adherence to accessibility and compliance rules</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                    </tr>

                    <tr>
                        <td>Support for integrations and APIs</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                    </tr>

                    <tr>
                        <td>Post-launch support</td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                        <td><span ><IoClose /></span></td>
                        <td><span className='check'><MdOutlineCheck /></span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='saq'>

            <div className='saqLeftSec'>
                <h1><span>FAQ</span></h1>
                <div className='saqleftFounder'>
                    <div className='founderSec'>
                        <div className='founderimg'></div>
                        <div>
                            <h3>Asfanf Kakar</h3>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                    <p>“I built Arounda to make design and development transparent and human. Our clients stay with us because they see the difference clarity makes. If you’re tired of vague quotes and missed deadlines, contact us. We’ll estimate your project transparently and help you launch without wasted resources.”</p>
                    <button className='hoverLeftAnimationBtn'>Book a Call</button>
                </div>
            </div>
            <h1 className='faqforMobile'><span>FAQ</span></h1>
            <div className='saqrightSec'>

                <div className={`questionItem ${(openSaqAns == 1)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 1? null : 1)}}>
                    <div className='questionHeading'>
                        <span><IoIosArrowForward /></span>
                        <h3>What services do you provide?</h3>
                    </div>
                    <div className='questionAnswer'>
                        <p>Arounda is a full-cycle design and development partner. It means that we help businesses produce and launch high-performing digital products from first concept to post-launch growth.What we deliver:</p>
                        <ul>
                            <li><span>Product strategy. </span> Discovery, proof of concept, UX audit, UI concept, pitch deck</li>
                            <li><span>Design. </span> UI/UX, branding, website design, mobile design, graphic design</li>
                            <li><span>Development. </span> Web development, mobile development, landing page, Webflow development</li>
                            <li><span>Redesign.</span></li>
                            <li><span>Post-launch optimization and support</span></li>
                        </ul>
                        <p>Our cross-functional team has already delivered 250+ successful projects across various industries (SaaS, Web3, Fintech, Healthtech, and others). We guarantee high-quality and measurable results</p>
                    </div>
                    
                </div>

                <div className={`questionItem ${(openSaqAns == 2)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 2? null : 2)}}>
                    <div className='questionHeading'>
                        <span><IoIosArrowForward /></span>
                        <h3>What is the minimum project budget?</h3>
                    </div>
                    <div className='questionAnswer'>
                        <p>Our typical projects start from <span>$6,000</span>. But we always take into account the scope, complexity, and team composition your project requires. This entry point allows us to ensure senior-level quality, strategic involvement, and measurable results.</p>
                        <p><span>But for smaller needs</span> "UX audits, branding, or MVP concept design", we also offer <span>lightweight packages</span>. So, small businesses can test ideas without a significant investment before scaling up.</p>
                        <p>Every estimate is fully transparent, so you can plan budgets confidently and avoid hidden costs or overruns.</p>
                    </div>

                </div>

                <div className={`questionItem ${(openSaqAns == 3)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 3? null : 3)}}>
                    <div className='questionHeading'>
                        <span><IoIosArrowForward /></span>
                        <h3>What is the minimum project budget?</h3>
                    </div>
                    <div className='questionAnswer'>
                        <p>Our typical projects start from <span>$6,000</span>. But we always take into account the scope, complexity, and team composition your project requires. This entry point allows us to ensure senior-level quality, strategic involvement, and measurable results.</p>
                        <p><span>But for smaller needs</span> "UX audits, branding, or MVP concept design", we also offer <span>lightweight packages</span>. So, small businesses can test ideas without a significant investment before scaling up.</p>
                        <p>Every estimate is fully transparent, so you can plan budgets confidently and avoid hidden costs or overruns.</p>
                    </div>

                </div>

                <div className={`questionItem ${(openSaqAns == 4)? "openA": ""}`} onClick={()=>{setOpenSaqAns(openSaqAns == 4? null : 4)}}>
                    <div className='questionHeading'>
                        <span><IoIosArrowForward /></span>
                        <h3>What is the minimum project budget?</h3>
                    </div>
                    <div className='questionAnswer'>
                        <p>Our typical projects start from <span>$6,000</span>. But we always take into account the scope, complexity, and team composition your project requires. This entry point allows us to ensure senior-level quality, strategic involvement, and measurable results.</p>
                        <p><span>But for smaller needs</span> "UX audits, branding, or MVP concept design", we also offer <span>lightweight packages</span>. So, small businesses can test ideas without a significant investment before scaling up.</p>
                        <p>Every estimate is fully transparent, so you can plan budgets confidently and avoid hidden costs or overruns.</p>
                    </div>

                </div>
            </div>
        </div>

        <div className='pricePageLastDiv'>
            <h1>Estimate with <span>clarity</span>, launch with <span>confidence</span></h1>
            <p>Gain full cost visibility through our precise, transparent pricing model.</p>
            <button className='hoverLeftAnimationBtn'>Book a Call</button>
        </div>
    </div>
  )
}

export default Price
