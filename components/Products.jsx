import React, { useState } from "react";
import { urlFor } from "../lib/client";
import ProductsPage from "./ProductsPage";

const Products = ({ post, category, trending }) => {
  const [hover, setHover] = useState(false);

  const [items, setItems] = useState(true);
  const [feature, setFeature] = useState(false);
  const [sale, setSale] = useState(false);
  const [trend, setTrend] = useState(false);

  const handleItems = () => {
    setItems(true);
    setFeature(false);
    setSale(false);
    setTrend(false);
  };

  const handleFeature = () => {
    setItems(false);
    setFeature(true);
    setSale(false);
    setTrend(false);
  };
  const handleSale = () => {
    setItems(false);
    setFeature(false);
    setSale(true);
    setTrend(false);
  };
  const handleTrend = () => {
    setItems(false);
    setFeature(false);
    setSale(false);
    setTrend(true);
  };

  return (
    <>
      <div className="sm:flex lg:justify-center md:items-center flex-col gap-5 md:mx-8 sm:mx-10  2xs:mt-14 2xs:relative left-8">
        <h1 className="text-5xl font-bold 2xs:w-[300px]">Our Products</h1>
        <p className="md:w-[450px] text-center 2xs:w-[330px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
        <div className="flex flex-row xs:gap-10 p-5 2xs:gap-4">
          <b
            className={
              items
                ? "text-[#f97316] cursor-pointer"
                : "text-black cursor-pointer"
            }
            onClick={handleItems}
          >
            New Arrival
          </b>
          <b
            className={
              feature
                ? "text-[#f97316] cursor-pointer"
                : "text-black cursor-pointer"
            }
            onClick={handleFeature}
          >
            Featured
          </b>
          <b
            className={
              sale
                ? "text-[#f97316] cursor-pointer"
                : "text-black cursor-pointer"
            }
            onClick={handleSale}
          >
            On Sale
          </b>
          <b
            className={
              trend
                ? "text-[#f97316] cursor-pointer"
                : "text-black cursor-pointer"
            }
            onClick={handleTrend}
          >
            Trending
          </b>
        </div>
        <div className="grid lg:grid-cols-4 lg:ml-14 p-6 xs:bg-transparent	lg:gap-16 md:grid-cols-3 md:gap-x-[11rem] md:ml-[-3rem] sm:grid-cols-2  sm:gap-x-[7rem] 2xs:ml-[-5rem] 2xs:grid-cols-1 ">
          {/* <ProductsPage post={post}/> */}
          {items &&
            post.map((items, i) => {
              const src = urlFor(items.image).url();
              return (
                <>
                  <ProductsPage items={items} src={src} key={items.id}/>
                </>
              );
            })}
          {feature &&
            category.map((items, i) => {
              const src = urlFor(items.image).url();
              return <ProductsPage items={items} src={src} key={items.id} />;
            })}
          {trend &&
            trending.map((items, i) => {
              const src = urlFor(items.image).url();
              return <ProductsPage items={items} src={src} key={items.id}/>;
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
