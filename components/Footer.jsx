import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsPinterest} from "react-icons/bs"



const Footer = () => {
  return (
    <div className='md:w-screen h-[24rem] bg-[#44403c] text-white flex justify-evenly items-center sm:w-screen'>
      <div className='flex flex-col gap-5'>
        <h3 className='text-1xl font-semibold'>About us</h3>
        <p className='w-[300px]'>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        <div className='flex flex-row gap-4 cursor-pointer'>
          <BsFacebook/>
          <BsTwitter/>
          <BsLinkedin/>
          <BsYoutube/>
          <BsPinterest/>
        </div>
      </div>


      <div className='flex flex-col gap-5'>
        <h3  className='text-1xl font-semibold'>Information</h3>
        <ul className='flex flex-col gap-3'>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Manufacture</li>
          <li className='cursor-pointer'>Tracking order</li>
          <li className='cursor-pointer'>privacy & policy</li>
          <li className='cursor-pointer'>Terms & conditions</li>
        </ul>
      </div>

      <div className='flex flex-col gap-5'>
        <h3  className='text-1xl font-semibold'>My Account</h3>
        <ul className='flex flex-col gap-3'>
          <li className='cursor-pointer'>Login</li>
          <li className='cursor-pointer'>My Cart</li>
          <li className='cursor-pointer'>Wishlist</li>
          <li className='cursor-pointer'>Compare</li>
          <li className='cursor-pointer'>My Account</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
