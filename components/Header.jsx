import Image from 'next/image'
import React from 'react'
import header from "../images/header.png"
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"



 const Header = () => {
  return (
    <header>
    <div className=" flex flex-row justify-between items-center	bg-white text-black w-screen h-20 p-14">
      <div>
        <Image src={header} width={150} height={40} />
      </div>
      <div className='flex gap-5'>
        <span><AiOutlineSearch className='h-5 w-5'/></span>
        <span><BsFillPersonFill className='h-5 w-5'/></span>
        <span><AiOutlineShoppingCart className='h-5 w-5'/></span>
      </div>
    </div>
    <nav className="bg-black h-14 w-screen">
      <ul className="flex flex-row justify-center items-center gap-5 text-white p-4">
        <li className="list-none">Home</li>
        <li  className="list-none">About</li>
        <li  className="list-none">Home Furniture</li>
        <li  className="list-none">Office Furniture</li>
        <li  className="list-none">Hospital Furniture</li>
        <li  className="list-none">Contact</li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
