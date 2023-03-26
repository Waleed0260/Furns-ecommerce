import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useStore } from '../store';


const SideCart = () => {
  const items = useStore((state)=> state.cart.items.length);

  const CartData = useStore((state)=> state.cart);


  return (
    <div className='h-[100px] w-[100px] fixed top-[300px] right-0 bg-[#44403c] flex flex-col justify-center items-center shadow-2xl hover:shadow-none cursor-pointer'>
      <AiOutlineShoppingCart className='text-[#f97316] h-6 w-6'/>
      <b className='text-white'> {items} Items</b>
      <div className='h-[30px] w-[70px] bg-white text-[#f97316] flex justify-center items-center rounded-lg'>
        {CartData.items.length > 0 ?
      CartData.items.map((pizza)=>{
        console.log("pizza", pizza)
        return(
         <b> $ {pizza.name}</b>
        )
      })
      :
      "0"
      }
      </div>

    </div>
  )
}

export default SideCart
