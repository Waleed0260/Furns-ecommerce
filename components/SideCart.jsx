import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const SideCart = () => {
  return (
    <div className='h-[100px] w-[100px] fixed top-[300px] right-0 bg-[#44403c] flex flex-col justify-center items-center shadow-2xl hover:shadow-none cursor-pointer'>
      <AiOutlineShoppingCart className='text-[#f97316] h-6 w-6'/>
      <b className='text-white'> 0 Items</b>
      <div className='h-[30px] w-[70px] bg-white text-[#f97316] flex justify-center items-center rounded-lg'>
        $0
      </div>
    </div>
  )
}

export default SideCart
