import React from 'react'
import './project.css'
import { FaArrowRight } from 'react-icons/fa'
function Project() {
    const itemArray = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='projectPage'>
        
        <div className='projectypeBtnSec'>
            <h1>From <span>Vision to Reality</span> — Where Performance Meets Great Design.</h1>
            <div>
                <span>All Peojects</span>
                <span>E-comerse</span>
                <span>Saas</span>
                <span>Full Stack</span>
                <span>Frontend Websites</span>
            </div>
            <div>
                <p>EXPLORE MORE</p>
                <button>Case Study</button>
                <button>About Us</button>
            </div>
            <button className='hoverLeftAnimationBtn'>Book A call</button>
        </div>

        <div className='projectRight'>
            <h1>From <span>Vision to Reality</span> — Where Performance Meets Great Design.</h1>
            
            <div className='ProjectSec'>
                {itemArray.map((index, item)=>{

                return (
                <div className='PeojectItem' key={index}>
                    <div className='topRow'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                            <h3>Rayzmedia</h3>
                        </div>
                        <div>DeFi/DEX</div>
                    </div>

                    <div className='projectnameSec'>
                        <h2>Rayzmedia</h2>
                    </div>

                    <div className='bottomRow'>
                        <div>
                            <span></span>
                            <p>DEFI / DEX</p>
                        </div>
                        <div><p>View Project <span><FaArrowRight /></span></p></div>
                    </div>
                </div>
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default Project
