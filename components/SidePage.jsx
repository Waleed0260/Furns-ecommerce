import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "../store";
import { urlFor } from "../lib/client";
import { FaSkullCrossbones } from "react-icons/fa";

const SidePage = ({ open, close }) => {
  if (!open) return null;
  const[quan, setQuan] = useState(false);



  const CartData = useStore((state) => state.cart);
  // const removePizza = useStore((state)=> state.removePizza);

  // const handleRemove = (i)=>{
  //   removePizza(i);
  //   toast.error("Items removed");
  // }

  const total = () =>
    CartData.items.reduce((a, b) => a + b.quantity * b.price, 0);

  //   const handleonDelivery = () => {
  //     setPaymentMethod(0);
  //     typeof window !== "undefined" && localStorage.getItem("total", total());
  //   };


  const handleQuantity = (type) => {
    type === "inc"
      ? setQuan((prev) => prev + 1)
      : quan === 1
      ? null
      : setQuan((prev) => prev - 1);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] z-[1000]">
      <div className="bg-white w-[28rem] z-[1000] fixed top-0 bottom-0 right-0 flex flex-col overflow-visible">
        <div className="flex flex-col justify-between items-center">
          <div className="h-[60px] w-[24rem] flex flex-row justify-between items-center p-[20px]">
            <b>Cart</b>
            <span>
              <FaSkullCrossbones onClick={close}/>
            </span>
            
          </div>
          <div className="flex flex-col h-[520px] w-[24rem] overflow-auto gap-4">
            {CartData.items.length > 0
              ? CartData.items.map((items, i) => {
                  const src = urlFor(items.image).url();
                  return (
                    <div className="flex flex-row justify-evenly h-[140px]" key={i}>
                      <Image
                        loader={() => src}
                        src={src}
                        height={140}
                        width={110}
                      />
                      <div className="flex flex-col">
                        <p className="w-[200px]">{items.name.slice(0,30)}</p>
                        <p>{items.quantity} x {items.price}</p>
                        <div className="h-[30px] w-[80px] bg-[#cbd5e1] text-black flex justify-around items-center">
                            <span className="cursor-pointer" onClick={()=> handleQuantity("dec")}>-</span>
                            <span>{quan === 1 && items.quantity + 1}</span>
                            <span className="cursor-pointer" onClick={()=> setQuan(true)}>+</span>
                        </div>
                        <b>{( items.price + 1) * items.price}</b>
                      </div>
                    </div>
                  );
                })
              : <b>No product added</b>}
          </div>
          <div className="h-[60px] w-[24rem] bg-[#f97316] flex flex-row justify-between items-center text-white p-[20px]">
            <b>View Cart</b>
            <button
              className="h-[40px] w-[70px] bg-white text-[#f97316] radius-[10px] rounded-[5px]"
              
            >
              $0.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePage;
