import React from 'react'
import { motion } from 'framer-motion'
import {TfiVideoClapper} from "react-icons/tfi"
import {CgWebsite} from "react-icons/cg"
import {FaWhatsapp} from "react-icons/fa"

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
  <motion.div
  initial={{y:"100px" ,opacity:0 }}
  animate={{y:"0px",opacity:1}}
  transition={{duration:1}}
   className="container px-5 py-8 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Valuable Services For Our Client's</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A obcaecati et officiis animi consequatur beatae. Rem fuga est facere sit quis.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <motion.div
      initial={{y:"100px" ,opacity:0 }}
      animate={{y:"0px",opacity:1}}
      transition={{duration:1}}
       className="p-4 md:w-1/3 flex flex-col text-center items-center">
        
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <TfiVideoClapper size={"2rem"}/>
        </div>
        <div 
         
        className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Film Making</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro aperiam tenetur tempora excepturi quas impedit repella.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center hover:scale-105 ease-in duration-75">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </motion.div>
      <motion.div
      initial={{y:"100px" ,opacity:0 }}
      animate={{y:"0px",opacity:1}}
      transition={{duration:1,delay:0.5}}
       className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <CgWebsite size={"2rem"}/>
        </div>
        <div
         
         className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Web Development</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus, ipsam temporibus a at iusto exercitationem rerum velit.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center hover:scale-105 ease-in duration-75">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </motion.div>
      <motion.div
       initial={{y:"100px" ,opacity:0 }}
       animate={{y:"0px",opacity:1}}
       transition={{duration:1,delay:0.8}}
       className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <FaWhatsapp size={"2rem"}/>
        </div>
        <div 
        
        className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Whatspp Support</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, ducimus magni dolor officia porro tempora distinctio molestiae ratione!</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center hover:scale-105 ease-in duration-75">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy Now</button>
  </motion.div>
</section>
  )
}

export default Services