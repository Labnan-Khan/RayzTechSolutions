import React, { useEffect, useRef, useState } from 'react'
import './homepage.css'
import HeroSectionAnimation from '../heroSectionAnimation/HeroSectionAnimation'
import { IoMdArrowForward } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight, FaLinkedinIn, FaMobileAlt, FaNodeJs, FaReact, FaStar } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { AiOutlineJavaScript } from 'react-icons/ai'
import { SiDevelopmentcontainers, SiMongodb } from 'react-icons/si'
import { GoArrowRight } from 'react-icons/go'
import { RiStackFill } from 'react-icons/ri'
import { TiThLargeOutline } from 'react-icons/ti'
import { BiLogoMongodb } from 'react-icons/bi'
function HomePage() {

const Counter = ({ target, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 2500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const value = progress * target;

      setCount(
        target % 1 !== 0
          ? value.toFixed(1)
          : Math.floor(value)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target]);

  return (
    <h4 ref={ref}>
      {prefix}{count}{suffix}
    </h4>
  );
};
 
const homePageReviewArray = [
  "Great experience with RayzTechSolutions. They delivered a modern, responsive website and understood our requirements perfectly.",
  "Excellent design and development. The website is clean, fast, and professional. Highly recommended!",
  "Professional team with great attention to detail. They delivered exactly what we needed and were very supportive throughout.",
  "Very happy with the final website. Modern design, smooth performance, and excellent communication from start to finish."
]
const [changeReview,setChangeReview]= useState(0)

  return (
    <div className='homePage'>

      <div className='homeHero'>

        <div className='heroHeading'>
          <div className='heroheadingLeft'>
          <p><span></span>MERN Stack Web Application Development</p>
          <div className='herosectionH1'>
            <h1>From idea to <span>launch</span>,</h1>
            {/* <h1> we build <span>websites  <span className='headingicon'><RiStackFill /></span> <span className='headingicon'><FaMobileAlt /></span> <span className='headingicon'><TiThLargeOutline /></span></span></h1> */}
            <h1> we build <span>Web Applications</span>  </h1>
            <h1>that <span>perform</span>.</h1>
          </div>

          <div className='heroMid'>

            <div className='heromidItem'>
              <p>{"{/}"}</p>
              <p>From business platforms and SaaS products to custom web applications, we build reliable, scalable, and high-performance solutions using the MERN stack.</p>
              <div>
                <span>SaaS</span>
                <span>Web Applications</span>
                <span>Custom Software</span>
                </div>
            </div>
            

            <div className='heromidItem'>
              <p>{"{/}"}</p>
              <p>Built around your business. Engineered for growth</p>
              <button>Start a Project</button>
            </div>

          </div>
          </div>
          <div className='heroheadingrightImg'></div>
        </div>
        <div className='HomeherosectionAnimation'>
          <HeroSectionAnimation/>
        </div>

      </div>

      <div className='homeRuslut'>

        <div className='resultHeading'>
          <div className='resultHeadingleftImg'></div>

          <div className='resultHeadingRightSec'>
            <h1>Your Idea. Our Development <span>Expertise</span>.</h1>
            <p>A great idea needs more than code. It needs the right architecture, technology, and development approach.</p>
            <p>We turn your requirements into production-ready web applications that are built to perform today and scale with your business tomorrow.</p>
            <div className='homeRuslut2ndSection'>

            <div>
              {/* <span>{"{1}"}</span> */}
              <h4>Understand the Problem</h4>
              <p>We start by understanding your business, users, workflows, and goals.</p>
            </div>
          

          <div>
            {/* <span>{"{2}"}</span> */}
            <h4>Build the Right Solution</h4>
            <p>We develop the application around your actual requirements—not a one-size-fits-all template.</p>
          </div>

          <div>
            {/* <span>{"{3}"}</span> */}
            <h4>Deliver for the Long Term</h4>
            <p>We build clean, scalable systems that can evolve as your business grows.</p>
          </div>

            </div>
          </div>
        </div>

        <div className='homeRuslut3rdSection'>
          
          <div className='firstsec'>
            {/* <h4>+170%</h4> */}
            <Counter target={170} prefix="+" suffix="%" />
            <h3>Engagement Rate</h3>
            <p>ntuitive flows that turn clicks into leads</p>
          </div>

          <div>
            {/* <h4>4.6X</h4> */}
            <Counter target={4.6} prefix="+" suffix="X" />
            <h3>Revenue Growth After Redesign</h3>
            <p>Product improvements that scale business impact</p>
          </div>

          <div>
            {/* <h4>-370%</h4> */}
            <Counter target={370} prefix="+" suffix="%" />
            <h3>Churn Across SaaS Clients</h3>
            <p>Better onboarding, better UX, fewer cancellations</p>
          </div>

        </div>

      </div>

      <div className='homeServies'>
        <h1>Full-Stack Web Development Services We Offer</h1>
        <p>Everything you need to build, launch, and grow a modern web application.</p>

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
            <h1>We <span>Build</span> the Technology </h1>
            <h1>Behind Your Idea.</h1>
            <p>RayzTechSolutions is a web application development company focused on building custom solutions with modern JavaScript technologies.</p>
          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
            {/* <h4>20+</h4> */}
            <Counter target={20} prefix="" suffix="+" />
            <p>Team members</p>
          </div>
        </div>

        <div className='homeAboutUs2ndSec'>
          
          <div>
            <span>{"{/}"}</span>
            <p>We work with businesses, startups, and entrepreneurs to transform ideas, processes, and requirements into functional web applications.</p>
          </div>

          <div>
            <span>{"{/}"}</span>
            <p>Whether you're launching your first product or improving an existing platform, we focus on writing clean code, building scalable architecture, and delivering software that solves real problems.</p>
          </div>

          <div>
            <button>About Us</button>
          </div>
        </div>

        <div className='homeAboutUs3ndSec'>
          
          <div>
            <span><DiReact /></span>
            <h4>Frontend</h4>
          </div>

          <div>
            <span><AiOutlineJavaScript /></span>
            <h4>Backend</h4>
          </div>

          <div>
            <span><SiMongodb /></span>
            <h4>Database</h4>
          </div>

          <div>
            <span><SiDevelopmentcontainers /></span>
            <h4>APIs</h4>
          </div>

        </div>

      </div>

      <div className='homepageAchivment'>
        <h1>Why Build With RayzTechSolutions?</h1>
        <p>We focus on building software that works—not simply delivering code.</p> 
          <div className='homeachivSection'>

            <div className='homeachivItem'>
              <h3>RayzTechSolutions</h3>
              <span><FaArrowRight /></span>
            </div>
            

            <div className='homeachivItem'>
              <div></div>
              <h3>Built Around Your Requirements</h3>
              <p>Every application is developed according to your business logic, users, and goals.</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <h3>Scalable From Day One</h3>
              <p>We structure your application so new features, users, and functionality can be added without rebuilding everything.</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <h3>Performance Focused</h3>
              <p>Fast interfaces, efficient APIs, optimized data handling, and responsive experiences.</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <h3>Clean & Maintainable Code</h3>
              <p>Well-structured code makes your application easier to maintain, improve, and scale.</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <h3>Secure by Design</h3>
              <p>Authentication, authorization, protected routes, and secure API communication.</p>
            </div>

            <div className='homeachivItem'>
              <div></div>
              <h3>Built for the Long Run</h3>
              <p>We don't just build and disappear. Your application can continue evolving as your business grows.</p>
            </div>

            <div className='homeachivItem'>
              img
            </div>

          </div>

      </div>

      <div className='homepageReviews'>
        <h1>Trusted by the Businesses We've Worked With</h1>
        {/* <p>From business websites to custom web applications, we've helped turn ideas into working digital products.</p> */}
        <div className='reviewSection'>

          <div className='reviewLeftSec'>
            <div className={changeReview == 0? "active" : ""} onClick={()=>{setChangeReview(0)}}>Rayzmedia</div>
            <div className={changeReview == 1? "active" : ""} onClick={()=>{setChangeReview(1)}}>Boriroots</div>
            <div className={changeReview == 2? "active" : ""} onClick={()=>{setChangeReview(2)}}>khogyar</div>
            <div className={changeReview == 3? "active" : ""} onClick={()=>{setChangeReview(3)}}>RTS</div>
          </div>

          <div className='reviewRightSec'>

            <div className='changebtn'>
              <span className={changeReview == 0 ? "hideBtn": ""} onClick={()=>{changeReview>0 ? setChangeReview(changeReview-1): setChangeReview(0)}}>{changeReview > 0?  <FaArrowLeft /> : ""}</span>
              <span className={changeReview  == 3? "hideBtn": ""} onClick={()=>{changeReview < 3 ? setChangeReview(changeReview+1): setChangeReview(4)}}>{changeReview < 3? <FaArrowRight />: ""}</span>
            </div>

            <p className='reviewMainP'> “{homePageReviewArray[changeReview]}”</p>
            
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
          <h1>What We Build</h1>
          <p className='mainP'>Whatever your business model, we build the web application behind it.</p>
          <div className='ourExperanceRightItemSec'>

            <div className='ourExperanceRightItem'>
                <div>
                  <span><GoArrowRight /></span>
                  <h3>SaaS Applications</h3>
                </div>
                <p>Multi-user platforms, subscriptions, dashboards, authentication, user management, and scalable application architecture.</p>
            </div>

            <div className='ourExperanceRightItem'>
                <div>
                  <span><GoArrowRight /></span>
                  <h3>Business Applications</h3>
                </div>
                <p>Custom systems that manage operations, automate workflows, organize data, and improve business processes.</p>
            </div>

            <div className='ourExperanceRightItem'>
              <div>
                  <span><GoArrowRight /></span>
                  <h3>E-Commerce Platforms</h3>
                </div>
                <p>Product catalogs, shopping carts, orders, payments, customer accounts, and powerful admin systems.</p>
            </div>

            <div className='ourExperanceRightItem'>
              <div>
                  <span><GoArrowRight /></span>
                  <h3>Admin Dashboards</h3>
                </div>
                <p>Centralized systems for managing users, products, content, orders, analytics, and application data.</p>
            </div>

            <div className='ourExperanceRightItem'>
              <div>
                  <span><GoArrowRight /></span>
                  <h3>Marketplace Platforms</h3>
                </div>
                <p>Applications that connect buyers, sellers, service providers, or businesses through one platform.</p>
            </div>

            <div className='ourExperanceRightItem'>
                <div>
                  <span><GoArrowRight /></span>
                  <h3>Custom Web Applications</h3>
                </div>
                <p>Have something different in mind? We build applications around your exact requirements.</p>
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
        <h1>Have a Web Application Idea?</h1>
        <p>Tell us what you're building, what problem you're solving, and where you want to take it. We'll help turn your idea into a scalable web application.</p>
        <button>Start Your Project</button>
      </div>

    </div>
  )
}

export default HomePage
