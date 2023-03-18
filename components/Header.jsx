import Image from 'next/image'
import React from 'react'
import header from "../images/header.png"
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Link from 'next/link'



 const Header = () => {
  return (
    <header>
    <div className=" flex flex-row justify-between items-center	bg-white text-black w-screen h-20 p-14">
      <div>
        <Link href="/">
        <Image src={header} alt="header" width={150} height={40}  />
        </Link>
      </div>
      <div className='flex gap-6'>
        <span><AiOutlineSearch className='h-6 w-6'/></span>
        <span><BsFillPersonFill className='h-6 w-6'/></span>
        <span><AiOutlineShoppingCart className='h-6 w-6'/></span>
      </div>
    </div>
    <nav className="bg-[#44403c] h-14 w-screen">
      <ul className="flex flex-row justify-center items-center gap-5 text-white p-4">
        <li className="list-none"><Link href="/">Home</Link></li>
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
