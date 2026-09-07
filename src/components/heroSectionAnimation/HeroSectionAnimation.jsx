import React from 'react'
import './heroSectionAnimation.css'
import { FaApple, FaAws, FaGithub, FaGoogle, FaMicrosoft } from 'react-icons/fa'
import { FaMeta } from 'react-icons/fa6'
import  { SiCloudflare, SiGooglecloud, SiMongodb,  SiVercel } from "react-icons/si";
import { VscAzure } from 'react-icons/vsc'

function HeroSectionAnimation() {
    const heroanimationlist = [
    { name: "Google", icon: FaGoogle },
    { name: "Microsoft", icon: FaMicrosoft },
    { name: "AWS", icon: FaAws },
    { name: "Meta", icon: FaMeta },
    // { name: "OpenAI", icon: SiOpenai },
    { name: "GitHub", icon: FaGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Apple", icon: FaApple },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Microsoft Azure", icon: VscAzure },
    { name: "Cloudflare", icon: SiCloudflare }

    ]
  return (
    <div className='herosectionAnimation'>
        <div className='homepageheroFooter'>
            <div className='heroSectionFooter'>

                {[...heroanimationlist,...heroanimationlist].map((item,index)=>{
                    const Icon = item.icon
                   return( 
                        <div key={index}>
                            <span><Icon /></span>
                        </div>
                    
                   )
                })}

            </div>
        </div>
    </div>
  )
}

export default HeroSectionAnimation
