import React, { useEffect, useState } from 'react'
import './navbar.css'
import { FaArrowRight } from 'react-icons/fa'
import { TbMenu2 } from 'react-icons/tb'
import { CgMenuRight } from 'react-icons/cg'
import { Link } from "react-router-dom";
// import { MdKeyboardArrowDown } from 'react-icons/md'
function Navbar() {

     const [showNavbar, setShowNavbar] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [clickMenu, setClickMenu] = useState(false)
    const [dropMenu, setDropMenu] = useState(false)
    
    const [navbarHeading, setNavbarHeading] = useState("")
    useEffect(()=>{
        const handleResize =()=>{

            if(window.innerWidth <= 768){
                setNavbarHeading("RTS")
            }else{
                setNavbarHeading("RayzTechSolutions")
            }
        }
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return()=>{
            window.removeEventListener("resize", handleResize);
        }
    },[])


    useEffect(()=>{
        if(dropMenu && window.innerWidth <=968){

            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }

        return ()=>{
            document.body.style.overflow = "auto";
        }
    },[dropMenu])

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 768) {
            setDropMenu(false);          // close dropdown when on desktop
            // document.body.style.overflow = "auto"; // restore scroll
        }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <div className={`navbar`}>

      <Link to="/"><h1 className='navbarH1'>{navbarHeading}</h1></Link>
      <div className='navbarMain'>
        <ul  className={`navLi ${(dropMenu)? " navLiM" : ""}`} onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>
            <Link to="/">
            <li>
                <span className='beforeHover'>Home</span>
                <span className='afterHover'>Home</span>
            </li>
            </Link>
           
            <Link to="/services">
            <li>
                <span className='beforeHover'>Services</span>
                <span className='afterHover'>Services</span>
            </li>
            </Link>
            
            <Link to="/project">
            <li>
                <span className='beforeHover'>Projects</span>
                <span className='afterHover'>Projects</span>
            </li>
            </Link>

            <Link to="/price">
                <li>
                <span className='beforeHover'>Pricing</span>
                <span className='afterHover'>Pricing</span>
                </li>
            </Link>
            
            {/* <li>
                <span className='beforeHover'>About</span>
                <span className='afterHover'>About</span>
            </li> */}

            {/* <li>
                <span className='beforeHover'>Blogs</span>
                <span className='afterHover'>Blogs</span>
            </li> */}

        </ul>
        </div>
      
        <Link to="/contactUs">
            <div className='navbarContactUs'>Contact Us <span><FaArrowRight /></span></div>
        </Link>
      <div  className='navMenu' onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>{ (clickMenu)?  <CgMenuRight />:<TbMenu2 />}</div>
      <div className={`navbarrightAnimation ${(dropMenu)? " showNavbarrightAnimation" : ""}`} onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }></div>
      {/* <div className={`liServiesSection ${(showServies? "show" : "")}`}>

        <div className='navDesignSec'>
            <h3>DESIGN</h3>
            <div className='navdesignItemSec'>
                
                <div className='navdesignItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>Web & mobile design</p>
                    </div>
                </div>
                
                
                <div className='navdesignItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>Web & mobile design</p>
                    </div>
                </div>
                
                <div className='navdesignItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>Web & mobile design</p>
                    </div>
                </div>
                
                <div className='navdesignItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>Web & mobile design</p>
                    </div>
                </div>
                
                <div className='navdesignItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>Web & mobile design</p>
                    </div>
                </div>

            </div>
        </div>

        <div className='navDevelopSec'>
            <h3>DEVELOPMENT</h3>
            <div className='navdevelopItemSec'>
                
                <div className='navdevelopItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>kuck b lik leta o</p>
                    </div>
                </div>
                
                <div className='navdevelopItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>kuck b lik leta o</p>
                    </div>
                </div>
                
                <div className='navdevelopItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>kuck b lik leta o</p>
                    </div>
                </div>
                
                <div className='navdevelopItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>kuck b lik leta o</p>
                    </div>
                </div>
                
                <div className='navdevelopItem'>
                    <span></span>
                    <div>
                        <h4>Ui/UX Design</h4>
                        <p>kuck b lik leta o</p>
                    </div>
                </div>

            </div>
        </div>
      </div> */}

    </div>
  )
}

export default Navbar
