import React from "react";
import Image from "next/image";
import { useStore } from "../store";
import { urlFor } from "../lib/client";
import { FaSkullCrossbones } from "react-icons/fa";
import Link from "next/link";
import {AiOutlineShoppingCart} from "react-icons/ai"
import toast, { Toaster } from "react-hot-toast";


const SidePage = ({ open, close }) => {
  const CartData = useStore((state) => state.cart);
  const CartItems = CartData.items;
  const removeItem = useStore((state) => state.removeItem);

  if (!open) return null;



  const handleRemove = (i) => {
    removeItem(i);
    toast.error(
      ("Successfully toasted!.\n\, Your product is deleted from cart"),
      {
        duration: 4000,
      }
    );  
  };

  const total = () =>
    CartData.items.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] z-[1000]">
      <div className="bg-white xs:w-[28rem] 2xs:w-[24rem] z-[1000] fixed top-0 bottom-0 right-0 flex flex-col overflow-visible">
        <div className="flex flex-col justify-between items-center">
          <div className="h-[60px] xs:w-[24rem] 2xs:w-[18rem] flex flex-row justify-between items-center p-[20px]">
            <b>Cart</b>
            <span>
              <FaSkullCrossbones onClick={close} className="cursor-pointer"/>
            </span>
            
          </div>
          <div className="flex flex-col h-[520px] w-[24rem] overflow-auto gap-4">
            {CartItems.length > 0
              ? CartItems.map((items, i) => {
                  const src = urlFor(items.image).url();

                  const total = items.quantity * items.price;
                  
                  return (
                    <div className="flex flex-row justify-between items-center" key={i}>
                    <div className="flex flex-row justify-evenly h-[140px]">
                      <Image
                        loader={() => src}
                        src={src}
                        height={140}
                        width={110}
                        alt="src"
                      />
                      <div className="flex flex-col">
                        <p className="w-[200px]">{items.name.slice(0,30)}</p>
                        <p>{items.quantity} x <span className="text-[#f97316]">{items.price}</span></p>
                        <b>Total: <span className="text-[#f97316]">${total}</span></b>
                      </div>
                    </div>
                    <div>
                    <FaSkullCrossbones className="cursor-pointer" onClick={()=> handleRemove(i)}/>
                    </div>
                    </div>

                  );
                })
              : 
              <div className="flex flex-col justify-center items-center my-24">
              <span><AiOutlineShoppingCart className="h-[60px] w-[60px] text-[#f97316]"/></span>
              <b>No product added</b>
                </div>}
          </div>
          <Link href="/data">
          <div className=" cursor-pointer h-[60px] xs:w-[24rem] 2xs:w-[18rem] bg-[#f97316] flex flex-row justify-between items-center text-white p-[20px] hover:bg-[#44403c] duration-300">
            <b>View Cart</b>
            <button
              className="h-[40px] w-[70px] bg-white text-[#f97316] radius-[10px] rounded-[5px]"
              >
              ${total()}
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  );
};

export default SidePage;
