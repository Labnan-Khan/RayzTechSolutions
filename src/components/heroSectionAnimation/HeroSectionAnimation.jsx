import React from 'react'
import './heroSectionAnimation.css'
import { FaRegHeart, FaShieldAlt } from 'react-icons/fa'
import { LuCookingPot } from 'react-icons/lu'
import { RiSeedlingLine } from 'react-icons/ri'
import { GiMountaintop } from 'react-icons/gi'
import { BsBookmarkPlus } from 'react-icons/bs'
function HeroSectionAnimation() {
    const heroanimationlist = [
        "Innovation", "Expertise", "Scalability" ,"Performance", "Security", "Reliability", "Excellence", "Optimization", "Modernization", "Solutions", "Creativity", "Reliability"
    ]
  return (
    <div className='herosectionAnimation'>
        <div className='homepageheroFooter'>
            <div className='heroSectionFooter'>

                {[...heroanimationlist,...heroanimationlist].map((item,index)=>{
                    // const Icon = item.icon
                   return( 
                        <div key={index}>
                            {/* <span><Icon /></span> */}
                            <h3>{item}</h3>
                            {/* <p>{item.para}</p> */}
                        </div>
                    
                   )
                })}

            </div>
        </div>
    </div>
  )
}

export default HeroSectionAnimation
