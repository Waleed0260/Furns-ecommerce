import React, { useState } from "react";
import Image from "next/image";
import {HiArrowsPointingOut} from "react-icons/hi"
import {IoGitCompareOutline} from "react-icons/io"
import {AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai"
import Link from "next/link";
import { useStore } from "../store";


const ProductsPage = ({ items, src }) => {
  const [hover, setHover] = useState(false);
  const [clickCount, setClickCount] = useState(1);

  const handleMouseOver = ()=>{
      setHover(true);
  }

  const addPizza = useStore((state) => state.addItem);
  const handleCart= ()=>{
    setClickCount(prevCount => prevCount + 1);
    if (clickCount === 1) {
      addPizza()
    } else {
    }
  }

  return (
    <div className="flex flex-col justify-center items-center cursor-pointer w-[270px] h-[370px]" key={items.name} onMouseOver={handleMouseOver}
    onMouseLeave={() => setHover(false)}>
      <span className="bg-[#cbd5e1] p-3 relative top-12 left-24 rounded-[100px]  duration-500 hover:bg-[#f97316] hover:text-white"><AiOutlineHeart/></span>

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
      {hover && <div className=" bg-[#cbd5e1] flex flex-row text-black w-[200px] justify-center items-center p-2 -mt-12 z-10 duration-500 hover:bg-[#f97316] hover:text-white" onClick={handleCart}><AiOutlineShoppingCart/> Add to cart</div>}
      <div className="flex flex-col justify-center items-center mt-4">
        <b>{items.name.slice(0, 18)}...</b>
        <b>$ {items.price}</b>
      </div>
    </div>
  );
};

export default ProductsPage;
