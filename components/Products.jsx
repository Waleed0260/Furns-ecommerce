import React, { useEffect, useState } from "react";


const Products = ({post, cataegory, trending}) => {


  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <p className="w-[450px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
        <div className="flex flex-row gap-10 p-20">
          <b>New Arrival</b>
          <b>Featured</b>
          <b>On Sale</b>
          <b>Trending</b>
        </div>
      </div>
    </>
  );
};




export default Products;
