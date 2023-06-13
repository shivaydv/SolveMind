import React from 'react'
import {motion} from "framer-motion"


const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <motion.div initial={{y:"100px" ,opacity:0 }}
       animate={{y:"0px",opacity:1}}
       transition={{duration:1}}  className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Projects Gallery</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam at reprehenderit debitis porro voluptatibus? Ducimus sit porro non sint est..</p>
    </motion.div>
    <div  className="flex flex-wrap md:-m-2 -m-1  flex-col md:flex-row">
      <motion.div initial={{x:"-100px" ,opacity:0 }}
       animate={{x:"0px",opacity:1}}
       transition={{duration:1}} className="flex flex-wrap md:w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1611178673542-6277b00043bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
      </motion.div>
      <motion.div initial={{x:"100px" ,opacity:0 }}
       animate={{x:"0px",opacity:1}}
       transition={{duration:1}} className="flex flex-wrap md:w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  )
}

export default Projects