import React, { useState } from "react";
import Image from "next/image";
import {AiOutlineShoppingCart, AiOutlineHeart, AiOutlineDelete} from "react-icons/ai"
import Link from "next/link";
import { useStore } from "../store";
import toast, { Toaster } from "react-hot-toast";


const ProductsPage = ({ items, src, key }) => {
  const [hover, setHover] = useState(false);
  const [clickCount, setClickCount] = useState(1);
  const[clickWish, setClickWish] = useState(1);

  const handleMouseOver = ()=>{
      setHover(true);
  }

  const addItem = useStore((state) => state.addItem);
  const handleCart= ()=>{
    setClickCount(prevCount => prevCount + 1);
    if (clickCount === 1) {
      addItem({...items, quantity: 1})
      toast.success(
        ("Successfully Added!.\n\, Your product is added to cart"),
        {
          duration: 2000,
        }
      );    } else {

    }
  }

  const addWish = useStore((state) => state.addWish);
  const removeWish = useStore((state) => state.removeWish);

  const handleWish= ()=>{
    setClickWish(prevCount => prevCount + 1);
    if(clickWish === 1) {
    addWish({...items,})
    toast.success(
      ("Successfully Added!.\n\, Your product is added to wishlist"),
      {
        duration: 2000,
      }
    );
    }
    else{
      setClickWish(1);
      removeWish({...items,})
    toast.error(
      ("Successfully deleted!.\n\, Your product is deleted to wishlist"),
      {
        duration: 2000,
      }
    ); 
    }
  }


  return (
    <>
    <div className="flex flex-col justify-center items-center cursor-pointer lg:w-[270px] lg:h-[370px] md:w-[240px] sm:w-[380px]" key={key} onMouseOver={handleMouseOver}
    onMouseLeave={() => setHover(false)}>
      <span className="bg-[#cbd5e1] p-3 relative top-12 left-24 rounded-[100px]  duration-500 hover:bg-[#f97316] hover:text-white" onClick={handleWish}>{clickWish === 1 ? <AiOutlineHeart/>: <AiOutlineDelete/>}</span>

      <div className="flex justify-center">
        <Link href={`/product/${items.slug.current}`}>
        <Image
          loader={() => src}
          src={src}
          alt="image"
          height={270}
          width={270}
        />
        </Link>
      </div>
      {hover && <div className={clickCount > 1 ? "bg-[#cbd5e1] flex flex-row text-black w-[200px] justify-center items-center p-2 -mt-12 z-10 duration-500": " bg-[#cbd5e1] flex flex-row text-black w-[200px] justify-center items-center p-2 -mt-12 z-10 duration-500 hover:bg-[#f97316] hover:text-white"} onClick={handleCart}><AiOutlineShoppingCart/> {clickCount > 1 ? "Already Added" : "Add to cart"}</div>}
      <div className="flex flex-col justify-center items-center mt-4">
        <b>{items.name.slice(0, 18)}...</b>
        <b>$ {items.price}</b>
      </div>
    </div>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  );
};

export default ProductsPage;
