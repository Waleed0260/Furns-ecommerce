import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slider1 from "../images/slider1.png"
import { motion } from "framer-motion";



const Main = () => {
  const transition = { type: "spring", duration: 3 };

  const variants = {
    hidden: { opacity: 0, y: 200, x: 0 },
    enter: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: 0, x: -100 },
}

  return (
    <div className='bg-[#cbd5e1] flex lg:flex-row justify-around items-center lg:h-[34rem] w-screen sm:flex-col sm:h-[46rem] sm:w-screen'>
      <motion.div
                      variants={variants} // Pass the variant object into Framer Motion 
                      initial="hidden" // Set the initial state to variants.hidden
                      animate="enter" // Animated state to variants.enter
                      exit="exit" // Exit state (used later) to variants.exit
                      transition={transition} className='flex flex-col gap-5'>
        <p className='text-2xl text-[#737373]'>New Products</p>
        <h1 className='text-5xl font-bold '>Flexible Chair</h1>
        <p className='w-[40vw]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam fugit fuga illum aut delectus non deserunt eligendi. Est, vitae rerum?</p>
        <Link href="/shop" className=' w-[150px]'>
        <button className='bg-[#f97316] text-white h-[50px] w-[150px] hover:bg-black hover:text-[#f97316] duration-500'>Buy Now</button>
        </Link>
      </motion.div>
      <motion.div
       variants={variants} // Pass the variant object into Framer Motion 
       initial="hidden" // Set the initial state to variants.hidden
       animate="enter" // Animated state to variants.enter
       exit="exit" // Exit state (used later) to variants.exit
       transition={transition}
      className=' flex flex-col'>
        <Image src={slider1} alt="main" height={100} width={400} />
      </motion.div>
    </div>
  )
}

export default Main
