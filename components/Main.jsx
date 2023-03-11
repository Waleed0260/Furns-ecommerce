import Image from 'next/image'
import React from 'react'
import slider1 from "../images/slider1.png"



const Main = () => {
  return (
    <div className='bg-[#cbd5e1] flex flex-row justify-around items-center h-[30rem] w-screen '>
      <div className='flex flex-col gap-5'>
        <p className='text-2xl text-[#737373]'>New Products</p>
        <h1 className='text-5xl font-bold '>Flexible Chair</h1>
        <p className='w-[520px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam fugit fuga illum aut delectus non deserunt eligendi. Est, vitae rerum?</p>
        <button className='bg-[#fbbf24] text-white h-[40px] w-[130px]'>Buy Now</button>
      </div>
      <div className=' flex flex-col'>
        <Image src={slider1} height={100} width={400} />
      </div>
    </div>
  )
}

export default Main
