import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const About = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <motion.div  initial={{x:"100px" ,opacity:0 }}
       animate={{x:"0px",opacity:1}}
       transition={{duration:1}} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center items-center">
      <img className="object-cover object-center rounded w-[70%] " alt="hero" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"/>
    </motion.div>
    <motion.div initial={{x:"-100px" ,opacity:0 }}
       animate={{x:"0px",opacity:1}}
       transition={{duration:1}} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">John CE.
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque reiciendis sed cumque nostrum rem corrupti quasi officia beatae, rerum vero veniam enim praesentium nulla ducimus ipsam quia eveniet a excepturi quis laboriosam ad ea cupiditate. Iste, atque deserunt quam repellat, omnis ullam perferendis tenetur voluptatem quos quisquam totam eaque similique laborum sapiente magni iusto officia tempora amet dolores temporibus illo expedita velit debitis. Nostrum qui ipsa culpa repellendus voluptas fugiat saepe cupiditate!</p>
      <div className="flex justify-center">
        
        <button className=" inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black/60 rounded text-lg"> <Link to={"/contact"}> Contact Me</Link></button>
        <button className=" inline-flex text-black  border-black border-2 ml-4 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Hire Me</button>
      </div>
    </motion.div>
  </div>
</section>
  )
}

export default About