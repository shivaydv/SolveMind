import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App