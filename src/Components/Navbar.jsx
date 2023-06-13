import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <motion.div 
  initial={{y:"-50px" ,opacity:0 }}
  animate={{y:"0px",opacity:1}}
  transition={{duration:1}}
  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <h1 className='text-xl font-semibold'>Solve</h1><h1 className='text-xl  text-gray-600'>mind</h1>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
      <Link to={"/"} className="mr-5 hover:text-black hover:scale-110 ease-in duration-100">Home</Link>
      <Link to={"/about"} className="mr-5 hover:text-black hover:scale-110 ease-in duration-100">About Us</Link>
      <Link to={"services/"} className="mr-5 hover:text-black hover:scale-110 ease-in duration-100">Services</Link>
      <Link to={"/projects"} className="mr-5 hover:text-black hover:scale-110 ease-in duration-100">Projects</Link>
      <Link to={"/contact"} className="mr-5 hover:text-black hover:scale-110 ease-in duration-100">Contact Us</Link>
    </nav>
      <a className='hidden md:block' href="tel: 123456789">+91 123-456-7890</a>
    
  </motion.div>
</header>
  )
}

export default Navbar