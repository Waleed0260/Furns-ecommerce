import Image from 'next/image'
import React, { useState } from 'react'
import header from "../images/header.png"
import {AiOutlineSearch} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Link from 'next/link'
import SideCart from './SideCart'
import { useStore } from '../store'

 const Header = () => {

  const number = useStore((state)=> state.cart.items.length);



  const [options, setOptions] = useState(false);
  const [clickCount, setClickCount] = useState(1);

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
    <div className=" flex flex-row sm:justify-between items-center	bg-white text-black sm:w-screen h-20 p-14 2xs:w-[28rem] 2xs:justify-between ">
      <div>
        <Link href="/">
        <Image src={header} alt="header" width={150} height={40}  />
        </Link>
      </div>
      <div className='flex flex-col absolute top-[40px] right-[120px] 2xs:right-[-20px]'>
        <div className='flex flex-row gap-5'>
        <span><AiOutlineSearch className='h-6 w-6 cursor-pointer hover:text-[#f97316] duration-200'/></span>
        <span onClick={handleClick}><BsPerson className='h-6 w-6 cursor-pointer hover:text-[#f97316] duration-200'/></span>
        <div className='flex flex-end gap-4 z-50 cursor-pointer '>
        <span><AiOutlineShoppingCart className='h-[28px] w-[28px] cursor-pointer hover:text-[#f97316] duration-200'/></span>
        <div className='absolute flex justify-center items-center bg-[#f97316] text-white h-[15px] w-[15px] rounded-[50%]'>{number}</div>
        </div>
        </div>
        {options ?
    <div className='bg-white text-black flex shadow-2xl'>
      <ul className='flex flex-col gap-4 p-[10px]'>
        <li className='cursor-pointer hover:text-[#f97316] duration-100'>Sign in</li>
        <li className='cursor-pointer hover:text-[#f97316] duration-100'> <Link href="/data">Cart</Link> </li>
        <li className='cursor-pointer hover:text-[#f97316] duration-100'><Link href="/wishlist">Wishlist</Link></li>
        <li className='cursor-pointer hover:text-[#f97316] duration-100'>Compare</li>
      </ul>
    </div>
    :
    ""
     }
      </div>

    </div>
    <nav className="bg-[#44403c] sm:h-14 sm:w-screen 2xs:hidden">
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
