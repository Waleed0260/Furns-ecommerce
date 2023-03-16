import React, { useState } from "react";
import Image from "next/image";
import {HiArrowsPointingOut} from "react-icons/hi"
import {IoGitCompareOutline} from "react-icons/io"
import {AiOutlineShoppingCart} from "react-icons/ai"



const ProductsPage = ({ items, src, key }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer" key={key}         onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <div

      >
        <Image
          loader={() => src}
          src={src}
          alt="image"
          height={270}
          width={270}
        />

      </div>
      {hover && <div className="flex flex-row bg-[white] text-black justify-center items-center p-2 -mt-12 z-10 duration-500 hover:bg-[#f97316]"><AiOutlineShoppingCart/>Add to cart</div>}
      <div className="flex flex-col justify-center items-center mt-4">
        <b>{items.name.slice(0, 18)}...</b>
        <b>$ {items.price[0]}</b>
      </div>
    </div>
  );
};

export default ProductsPage;
