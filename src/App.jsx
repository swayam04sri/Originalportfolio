import React from 'react'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Experience from './components/Experience'


export default function App() {
  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience/>
      <Contact/>
      <Footer />
      
    
      
    </div>
    <Toaster />

    </>
  )
}
