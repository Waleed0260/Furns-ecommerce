import Image from "next/image";
import React, { useEffect, useState } from "react";
import { urlFor } from "../lib/client";
import ProductsPage from "./ProductsPage";

const Products = ({post, category, trending}) => {

  const [items, setItems] = useState(true);
  const[feature, setFeature] = useState(false);
  const[sale, setSale] = useState(false);
  const[trend, setTrend] = useState(false);
  const[hover, setHover] = useState(false)


  const handleItems = ()=>{
    setItems(true);
    setFeature(false);
    setSale(false);
    setTrend(false);
}

  const handleFeature = ()=>{
    setItems(false);
    setFeature(true);
    setSale(false);
    setTrend(false);
  }
  const handleSale = ()=>{
    setItems(false);
    setFeature(false);
    setSale(true);
    setTrend(false);
  }
  const handleTrend = ()=>{
    setItems(false);
    setFeature(false);
    setSale(false);
    setTrend(true);
  }



  return (
    <>
      <div className="flex lg:justify-center md:items-center flex-col gap-5 md:mx-8 2xs:justify-center 2xs:items-center 2xs:mt-14 2xs:mr-[-180px]">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <p className="md:w-[450px] text-center 2xs:w-[330px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
        <div className="flex flex-row gap-10 p-5">
          <b className={items ? "text-[#f97316] cursor-pointer": "text-black cursor-pointer"} onClick={handleItems}>New Arrival</b>
          <b className={feature ? "text-[#f97316] cursor-pointer": "text-black cursor-pointer"} onClick={handleFeature}>Featured</b>
          <b className={sale ? "text-[#f97316] cursor-pointer": "text-black cursor-pointer"} onClick={handleSale}>On Sale</b>
          <b className={trend ? "text-[#f97316] cursor-pointer": "text-black cursor-pointer"} onClick={handleTrend}>Trending</b>
        </div>
        <div className="grid lg:grid-cols-4 lg:ml-14 p-6	lg:gap-16 md:grid-cols-3 md:gap-x-[11rem] md:ml-[-3rem] sm:grid-cols-2 sm:gap-x-[7rem] 2xs:ml-[-2rem] 2xs:grid-cols-1">
          {/* <ProductsPage post={post}/> */}
          {items && post.map((items, i)=>{
          const src = urlFor(items.image).url();
            return(
              <>
              <ProductsPage items={items} src={src} key={i}/>
              </>
            )
          })}
          {feature && category.map((items, i)=>{
          const src = urlFor(items.image).url();
            return(
              <ProductsPage items={items} src={src} key={i}/>
            )
          })}
          {trend && trending.map((items, i)=>{
          const src = urlFor(items.image).url();
            return(
              <ProductsPage items={items} src={src} key={i}/>
            )
          })}
        </div>
      </div>
    </>
  );
};




export default Products;
