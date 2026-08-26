import React from 'react'
import './homepage.css'
import HeroSectionAnimation from '../heroSectionAnimation/HeroSectionAnimation'
import { IoMdArrowForward } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight, FaLinkedinIn, FaStar } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { AiOutlineJavaScript } from 'react-icons/ai'
import { SiDevelopmentcontainers, SiMongodb } from 'react-icons/si'
import { GoArrowRight } from 'react-icons/go'
function HomePage() {
  return (
    <div className='homePage'>

      <div className='homeHero'>
        
        <p>Digital Product Design And Development Company</p>
        <div className='homeHeroHeading'>
          <h1>Your design & dev partner that unites,,</h1>
          <div>
            <span>brand</span>
            <span>website</span>
            <span>ui,/ux design</span>
          </div>
          <h1>into a holistic product</h1>

        </div>

        <div className='heroMid'>

            <div className='heromidItem'>
              <p>{"{/}"}</p>
              <p>Works closely with reputable brands, businesses and fortune 500 companies</p>
              <div>
                <span>SaaS</span>
                <span>AI</span>
                <span>Web.3.O</span>
                </div>
            </div>
            

            <div className='heromidItem'>
              <p>{"{/}"}</p>
              <p>Since 2016, we've helped to achieve business goals and deliver results that inspire</p>
              <button>Book a Call</button>
            </div>

        </div>

        <div className='HomeherosectionAnimation'>
          <HeroSectionAnimation/>
        </div>

      </div>

      <div className='homeRuslut'>

        <h1>Arounda is your perfect choice in terms of</h1>

        <div className='homeRuslut2ndSection'>

          <div>
            <span>{"{/}"}</span>
            <p>Hiring system with immediate start</p>
          </div>
          

          <div>
            <span>{"{/}"}</span>
            <p>Guaranteed on-time deliverables</p>
          </div>

          <div>
            <span>{"{/}"}</span>
            <p>Flexible collaboration & fixed monthly rate</p>
          </div>

        </div>

        <div className='homeRuslut3rdSection'>
          
          <div>
            <h4>+170%</h4>
            <h3>Engagement Rate</h3>
            <p>ntuitive flows that turn clicks into leads</p>
          </div>

          <div>
            <h4>4.6X</h4>
            <h3>Revenue Growth After Redesign</h3>
            <p>Product improvements that scale business impact</p>
          </div>

          <div>
            <h4>-370%</h4>
            <h3>Churn Across SaaS Clients</h3>
            <p>Better onboarding, better UX, fewer cancellations</p>
          </div>

        </div>
      </div>

      <div className='homeServies'>
        <h1>Digital Product Design & Development Services We Offer</h1>

        <div className='homeServiesSection'>

          <div className='homeDesignSection'>
            <h3>Design</h3>
            
            <div>
              <p>UI/UX Design</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>Web Design</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>Mobile App Design</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>Website Redesign</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>UX/UI Audit</p>
              <span><IoMdArrowForward /></span>
            </div>

          </div>
          

          <div className='homeDevelopSection'>
            <h3>Development</h3>
            
            <div>
              <p>Web Development</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>MVP Development</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>WebFlow Development</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>Landing Page</p>
              <span><IoMdArrowForward /></span>
            </div>

            <div>
              <p>Mobile Development</p>
              <span><IoMdArrowForward /></span>
            </div>

          </div>

        </div>

        <div className='homeserviesBtnSection'>
          <div className='seoSection'>
            <div> <span><FaLinkedinIn /></span></div>
            <div>
              <h3>Vladislav Gavriluk</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
          <p>Grow revenue and maximize ROI with our product design and development services.</p>
          <button>Book a Call</button>
        </div>

      </div>

      <div className='homeAboutUs'>

        <div className='homeAboutUsHeading'>
          <div>
            <h1>Digital design</h1>
            <h1>experts who </h1>
            <h1>fuel <span>growth</span></h1>
          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
            <h4>20+</h4>
            <p>Team members</p>
          </div>
        </div>

        <div className='homeAboutUs2ndSec'>
          
          <div>
            <span>{"{/}"}</span>
            <p>our digital design and development partner for high-impact results</p>
          </div>

          <div>
            <span>{"{/}"}</span>
            <p>A global team that understands your market, users, and how to make products win</p>
          </div>

          <div>
            <button>About Us</button>
          </div>
        </div>

        <div className='homeAboutUs3ndSec'>
          
          <div>
            <span><DiReact /></span>
            <h4>Wordpress</h4>
          </div>

          <div>
            <span><AiOutlineJavaScript /></span>
            <h4>interprefy</h4>
          </div>

          <div>
            <span><SiMongodb /></span>
            <h4>Players Health</h4>
          </div>

          <div>
            <span><SiDevelopmentcontainers /></span>
            <h4>Blockworks</h4>
          </div>

        </div>

      </div>

      <div className='homepageAchivment'>
          <h1>While the growth of our clients is what matters most, it`s nice to get awards</h1>
          
          <div className='homeachivSection'>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
              <span><FaArrowRight /></span>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <p>89+ REVIEWS ON CLUTCH</p>
            </div>

          </div>

      </div>

      <div className='homepageReviews'>

        <h1>Join 250+ companies who’ve built and scaled with our Arounda team</h1>
        <div className='reviewSection'>

          <div className='reviewLeftSec'>
            <div>Rayzmedia</div>
            <div>Boriroots</div>
            <div>khogyar</div>
            <div>RTS</div>
          </div>

          <div className='reviewRightSec'>

            <div className='changebtn'>
              <span><FaArrowLeft /></span>
              <span><FaArrowRight /></span>
            </div>

            <p className='reviewMainP'> “I was impressed with the high levels of detail and polish for all the features.”</p>
            
            <div className='bottomSection'>

              <div>
                <span></span>
                <div>
                  <h4>Asfand Kakar</h4>
                  <p>Founder & CEO</p>
                </div>
              </div>

              <div className='bottomsecRight'>
                <h4>5.0</h4>

                <div className='revie'>
                  <p>Clutch</p>
                  <div>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className='homepageOurExperance'>
        <div className='ourExperanceimg'></div>

        <div className='ourExperanceRightSec'>
          <h1>Our experience matches your market</h1>
          <p className='mainP'>Arounda product designers craft custom solutions that balance your business value with seamless user experience. Only proven industry methods that work.</p>
          <div className='ourExperanceRightItemSec'>

            <div className='ourExperanceRightItem'>
              <div className='ourExperanceRightItemleft'>
                <span><GoArrowRight /></span>
                <h3>Web 3, Blockchain</h3>
              </div>
              <div className='ourExperanceRightItemRight'>
                <p>dApps</p>
                <p>DeFi</p>
                <p>Play2Earn</p>
                <p>loT</p>
              </div>
            </div>
            <div className='ourExperanceRightItem'>
              <div className='ourExperanceRightItemleft'>
                <span><GoArrowRight /></span>
                <h3>Web 3, Blockchain</h3>
              </div>
              <div className='ourExperanceRightItemRight'>
                <p>dApps</p>
                <p>DeFi</p>
                <p>Play2Earn</p>
                <p>loT</p>
              </div>
            </div>
            <div className='ourExperanceRightItem'>
              <div className='ourExperanceRightItemleft'>
                <span><GoArrowRight /></span>
                <h3>Web 3, Blockchain</h3>
              </div>
              <div className='ourExperanceRightItemRight'>
                <p>dApps</p>
                <p>DeFi</p>
                <p>Play2Earn</p>
                <p>loT</p>
              </div>
            </div>
            <div className='ourExperanceRightItem'>
              <div className='ourExperanceRightItemleft'>
                <span><GoArrowRight /></span>
                <h3>Web 3, Blockchain</h3>
              </div>
              <div className='ourExperanceRightItemRight'>
                <p>dApps</p>
                <p>DeFi</p>
                <p>Play2Earn</p>
                <p>loT</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='homepageBlog'>
        <h1>Get real growth insights and proven tactics for digital success </h1>
        <button>Read more articles</button>
        <div className='blogSection'>

          <div className='blogitem'>
            <div className='blogimgsec'>
              <div></div>
            </div>
            <div className='blogdetailSec'>
              <div>
                <span></span>
                <h4>Alyona Deieeva</h4>
              </div>
              
              <p>21.08.2026</p>
            </div>
            <p>Brand Implementation: Strategy, Process, Checklist, and Plan</p>
          </div>

          <div className='blogitem'>
            <div className='blogimgsec'>
              <div></div>
            </div>
            <div className='blogdetailSec'>
              <div>
                <span></span>
                <h4>Alyona Deieeva</h4>
              </div>
              
              <p>21.08.2026</p>
            </div>
            <p>Brand Implementation: Strategy, Process, Checklist, and Plan</p>
          </div>

          <div className='blogitem'>
            <div className='blogimgsec'>
              <div></div>
            </div>
            <div className='blogdetailSec'>
              <div>
                <span></span>
                <h4>Alyona Deieeva</h4>
              </div>
              
              <p>21.08.2026</p>
            </div>
            <p>Brand Implementation: Strategy, Process, Checklist, and Plan</p>
          </div>

        </div>
      </div>

      <div className='bookNow'>
        <h1>Ready to scale your business?</h1>
        <p>Book a free consultation to get clarity, direction, and expert advice you can implement right away.</p>
        <button>Book a Call</button>
      </div>

    </div>
  )
}

export default HomePage
