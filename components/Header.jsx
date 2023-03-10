import Image from 'next/image'
import React from 'react'
import header from "../images/header.png"
import {AiOutlineSearch} from "react-icons/ai"
import {IoPersonOutline} from "react-icons/io"
import {AiOutlineShoppingCart} from "react-icons/ai"



 const Header = () => {
  return (
    <header>
    <div className=" flex flex-row justify-between bg-white text-black w-screen h-80 p-20">
      <div>
        <Image src={header} width={150} height={40} />
      </div>
      <div className='flex gap-2'>
        <span className='h-30 w-30'><AiOutlineSearch/></span>
        {/* <span className='h-30 w-30'><IoPersonOutline/></span> */}
        <span className='h-30 w-30'><AiOutlineShoppingCart/></span>
      </div>
    </div>
  </header>
  )
}

export default Header
