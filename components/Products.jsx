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
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <p className="w-[450px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
        <div className="flex flex-row gap-10 p-5">
          <b className="cursor-pointer" onClick={handleItems}>New Arrival</b>
          <b className="cursor-pointer" onClick={handleFeature}>Featured</b>
          <b className="cursor-pointer" onClick={handleSale}>On Sale</b>
          <b className="cursor-pointer" onClick={handleTrend}>Trending</b>
        </div>
        <div className="grid grid-cols-4 gap-12 ml-14 p-6	">
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
