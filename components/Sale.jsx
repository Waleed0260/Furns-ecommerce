import Image from 'next/image'
import React from 'react'
import sale1 from "../images/sale1.jpg"
import sale2 from "../images/sale2.jpg"


const Sale = () => {
  return (
    <div className='flex justify-evenly items-center p-12'>
      <Image src={sale1} height={100} width={400} alt="sale1"/>
      <Image src={sale2} height={100} width={400} alt="sale2"/>
    </div>
  )
}

export default Sale
