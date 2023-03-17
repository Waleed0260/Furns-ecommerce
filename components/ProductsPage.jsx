import React, { useState } from "react";
import Image from "next/image";
import {HiArrowsPointingOut} from "react-icons/hi"
import {IoGitCompareOutline} from "react-icons/io"
import {AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai"



const ProductsPage = ({ items, src, key }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer w-[270px] h-[370px]" key={key} onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <span className="bg-[#cbd5e1] p-3 relative top-12 left-24 rounded-[100px]  duration-500 hover:bg-[#f97316] hover:text-white"><AiOutlineHeart/></span>

      <div className="flex justify-center">
        <Image
          loader={() => src}
          src={src}
          alt="image"
          height={270}
          width={270}
        />
      </div>
      {hover && <div className="flex flex-row bg-[white] text-black justify-center items-center p-2 -mt-12 z-10 duration-500 hover:bg-[#f97316] hover:text-white"><AiOutlineShoppingCart/>Add to cart</div>}
      <div className="flex flex-col justify-center items-center mt-4">
        <b>{items.name.slice(0, 18)}...</b>
        <b>$ {items.price[0]}</b>
      </div>
    </div>
  );
};

export default ProductsPage;
