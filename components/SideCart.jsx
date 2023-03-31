import React, {useState} from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useStore } from '../store';
import SidePage from './SidePage';


const SideCart = () => {
  const[open, setOpen] = useState(false)

  const number = useStore((state)=> state.cart.items.length);

  const CartData = useStore((state) => state.cart);


  // const {items, totalPrice} = useStore((state)=> state.cart);
  // const totalItemsPrice = items.reduce((acc, item) => acc + item.price, 0);
  const total = () =>
    CartData.items.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <>
    <div className='h-[100px] w-[100px] fixed top-[300px] right-0 bg-[#44403c] flex flex-col justify-center items-center shadow-2xl hover:shadow-none cursor-pointer z-50' onClick={()=> setOpen(true)}>
      <AiOutlineShoppingCart className='text-[#f97316] h-6 w-6' />
      <b className='text-white'> {number} Items</b>
      <div className='h-[30px] w-[70px] bg-white text-[#f97316] flex justify-center items-center rounded-lg'>
      <b>$ {total()}</b>

      </div>

    </div>
    <SidePage open={open} close={()=> setOpen(false)}/>
    </>
  )
}

export default SideCart
