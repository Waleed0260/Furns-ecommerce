import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import useSWR from "swr";

const Products = () => {

  const { data, error } = useSWR("/api/product", (url) =>
    fetch(url).then((res))
  );
  console.log(data);

  // const[searched, setSearched] = useState([])

  // const getSearched = async () => {
  //   const url = 'https://jsonplaceholder.typicode.com/todos';
  //   try {
  //     const response = await fetch(url);
  //     if (response.status >= 400) {
  //       throw new Error('Bad response from server');
  //     }
  //     const data = await response.json();
  //     setSearched(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  
  // useEffect(() => {
  //   getSearched();
  // }, []);
  
  // console.log('searched:', searched);

  
  

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
      {/* {searched.map((items)=>{
      <h1>{items.name}</h1>
    })} */}
    </>
  );
};

export default Products;
