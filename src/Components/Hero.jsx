import React from 'react'
import Testimonial from './Testimonial'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (<>
    <section className="text-gray-600 body-font container mx-auto">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <motion.div 
    initial={{x:"-150px" ,opacity:0 }}
    animate={{x:"0px",opacity:1}}
    transition={{duration:1}}
    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

      <p className="title-font text-xl mb-4 font-medium ">THE BEST WEB & MOBILE SOLUTION

        {/* <br className="hidden lg:inline-block"/>readymade gluten */}
      </p>
      <h1 className=" leading-relaxed text-4xl font-bold text-gray-900">Digital Project</h1>
      <h1 className="mb-8 leading-relaxed text-4xl font-bold text-gray-900">Digital Company</h1>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to={"/contact"}>Get In Touch</Link></button>
       
      </div>
    </motion.div>
    <motion.div
    initial={{x:"150px" ,opacity:0 }}
    animate={{x:"0px",opacity:1}}
    transition={{duration:1}}
     className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

      <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1564583138697-34f7b7488f94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwbW9ja3VwfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"/>
    </motion.div>
  </div>
</section>
<motion.section
initial={{y:"150px" ,opacity:0 }}
animate={{y:"0px",opacity:1}}
transition={{duration:1}}
 className="text-gray-600 body-font">
  <div className="container px-5 pb-24  mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p className="leading-relaxed">Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
        <p className="leading-relaxed">Downloads</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</motion.section>
<Testimonial/>
</>
  )
}

export default Hero