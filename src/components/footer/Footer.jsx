import React from 'react'
import './footer.css'
import { SiGmail } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
        <h1>RayzTechSolutions</h1>
        <p>some text i will write here for the p tag some text i will write here for the p tag</p>
        <div>
            <span><SiGmail /></span>
            <span><IoLogoWhatsapp /></span>
            <span><FaLinkedinIn /></span>
            <span><FaInstagram /></span>
            
        </div>

        <p>© 2026 RayzTechSolutions All Rights Reserved</p>
        <div>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Refund Policy</p>
        </div>
    </div>
  )
}

export default Footer
