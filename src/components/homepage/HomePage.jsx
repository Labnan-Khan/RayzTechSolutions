import React from 'react'
import './homepage.css'
function HomePage() {
  return (
    <div className='homePage'>

      <div className='homeHero'>
        <h2>Digital Product Design And Development Company</h2>
        <h1>Your design & dev partner that unites,, brandwebsite ui/ux designinto a holistic product</h1>
        <div className='heroMid'>

            <div>
              <p>{"{/}"}</p>
              <p>Works closely with reputable brands, businesses and fortune 500 companies</p>
              <div>
                <span>SaaS</span>
                <span>AI</span>
                <span>Web.3.O</span>
                </div>
            </div>
            

            <div>
              <p>{"{/}"}</p>
              <p>Since 2016, we've helped to achieve business goals and deliver results that inspire</p>
              <button>Book a Call</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage
