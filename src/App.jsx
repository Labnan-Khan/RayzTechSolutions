import React from 'react'
import HomePage from './components/homepage/HomePage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ContactUs from './components/contactUs/ContactUs'
import Price from './components/price/Price'
import Servie from './components/service/Servie'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/services" element= {<Servie />} />
        <Route path="/Price" element= {<Price />} />
        <Route path="/contactUs" element= {<ContactUs />} />
      
      
      
      </Routes>

      <Footer />
    
    </BrowserRouter>
  )
}

export default App
