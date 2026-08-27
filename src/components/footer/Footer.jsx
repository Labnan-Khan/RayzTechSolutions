import React from 'react'
import './footer.css'
import { SiGmail } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
        <div  className='footerHeading'>
            <div>
                <h1>RayzTechSolutions</h1>
                <p>We build modern digital solutions that help businesses grow, connect, and succeed.</p>
            </div>
            <div className='fhrightSec'>
                <div>
                    <span><SiGmail /></span>
                    <span><IoLogoWhatsapp /></span>
                    <span><FaLinkedinIn /></span>
                    <span><FaInstagram /></span>
                </div>
                <form action="">
                    <input type='email' placeholder='XYZ@gmail.com' />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
        
        <div className='footerbottom'>

            <p>© 2026 RayzTechSolutions All Rights Reserved</p>
            
            <div>
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>Refund Policy</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Footer
