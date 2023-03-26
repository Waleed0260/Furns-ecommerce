import Image from 'next/image'
import React, { useState } from 'react'
import header from "../images/header.png"
import {AiOutlineSearch} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Link from 'next/link'
import SideCart from './SideCart'


 const Header = () => {

  const [options, setOptions] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount % 2 === 0) {
      setOptions(false);
    } else {
      setOptions(true);
    }
  };



  return (
    <>
    <header>
    <div className=" flex flex-row justify-between items-center	bg-white text-black w-screen h-20 p-14">
      <div>
        <Link href="/">
        <Image src={header} alt="header" width={150} height={40}  />
        </Link>
      </div>
      <div className='flex flex-col absolute top-[40px] right-[120px]'>
        <div className='flex flex-row gap-5'>
        <span><AiOutlineSearch className='h-6 w-6 cursor-pointer hover:text-[#f97316] duration-200'/></span>
        <span onClick={handleClick}><BsPerson className='h-6 w-6 cursor-pointer hover:text-[#f97316] duration-200'/></span>
        <span><AiOutlineShoppingCart className='h-6 w-6 cursor-pointer hover:text-[#f97316] duration-200'/></span>
        </div>

        {options ?
    <div className='bg-white text-black flex shadow-2xl'>
      <ul className='flex flex-col gap-4 p-[10px]'>
        <li className='cursor-pointer'>Sign in</li>
        <li className='cursor-pointer'>Cart</li>
        <li className='cursor-pointer'>Wishlist</li>
        <li className='cursor-pointer'>Compare</li>
      </ul>
    </div>
    :
    ""
     }
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
  <SideCart/>
  </>
  )
}

export default Header
