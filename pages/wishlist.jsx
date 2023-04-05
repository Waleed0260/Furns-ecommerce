import React, { useState } from "react";
import { useStore } from "../store";
import Layout from "../components/Layout";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { urlFor } from "../lib/client";
import { FaSkullCrossbones } from "react-icons/fa";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const CartData = useStore((state) => state.wishlist);
  const removeItem = useStore((state) => state.removeWish);

  const [Quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  const addItem = useStore((state) => state.addItem);

  const handleRemove = (i) => {
    removeItem(i);
    toast.error("Successfully deleted!.\n, Your product is deleted from cart", {
      duration: 4000,
    });
  };

  return (
    <Layout>
      <div className="w-screen h-[250px] bg-[#ccfbf1] flex flex-col justify-center items-center gap-3 mb-4">
        <h2 className="text-5xl font-bold">WISHLIST</h2>
        <p>HOME/WISH</p>
      </div>
      <div className="flex justify-center items-center flex-col py-12">
        <table className="xs:w-[72vw] 2xs:w-[95vw]">
          <thead className="bg-[#ccfbf1] h-16">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Add to cart</th>
              <th className="xs:table-cell 2xs:hidden">QTY</th>
              <th className="xs:table-cell 2xs:hidden">Action</th>
            </tr>
          </thead>

          <>
            {CartData.wish.length > 0 ? (
              CartData.wish.map((items, i) => {
                const src = urlFor(items.image).url();

                const handleCart = () => {
                  addItem({ ...items, quantity: Quantity, price: items.price });
                  toast.success(
                    "Successfully Added!.\n, Your product is added to cart",
                    {
                      duration: 2000,
                    }
                  );
                };
                return (
                  <tbody className="m-10" key={i}>
                    <tr className="border-2" >
                      <td className=" flex justify-center items-center text-center py-3">
                        <Image
                          loader={() => src}
                          src={src}
                          alt=""
                          objectFit="cover"
                          width={85}
                          height={85}
                        />
                      </td>
                      <td className="text-center p-12">
                        <b>{items.name}</b>
                      </td>
                      <td className="text-center">{items.price}</td>
                      <td className="text-center">
                        <button
                          className="bg-[#f97316] text-white h-[30px] w-[90px]"
                          onClick={handleCart}
                        >
                          Add to cart
                        </button>
                      </td>
                      <td className="text-center">
                        
                        <div className="xs:flex flex-row justify-center items-center p-2  2xs:hidden ">
                          <span
                            className="border-[#f97316] border-[1px] h-[50px] w-[20px] flex justify-center items-center duration-500 hover:bg-[#f97316] hover:text-white cursor-pointer"
                            onClick={() => handleQuantity("dec")}
                          >
                            -
                          </span>
                          <span className="border-[#f97316] border-[1px] h-[50px] w-[40px] border-l-0 flex justify-center items-center">
                            {Quantity}
                          </span>
                          <span
                            className="border-[#f97316] border-[1px] h-[50px] w-[20px] border-l-0 flex justify-center items-center duration-500 hover:bg-[#f97316] hover:text-white cursor-pointer"
                            onClick={() => handleQuantity("inc")}
                          >
                            +
                          </span>
                        </div>
                      </td>

                      <td
                        className="text-center px-5 xs:table-cell 2xs:hidden"
                        onClick={() => handleRemove(i)}
                      >
                        <FaSkullCrossbones className="hover:text-[#f97316] cursor-pointer" />
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <div className="flex flex-col justify-center items-center  relative top-[30px] left-[20vw]">
                <span>
                  <AiOutlineShoppingCart className="h-[50px] w-[50px] text-[#f97316]" />
                </span>
                <b>You have not added any items</b>
              </div>
            )}
          </>
        </table>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
};

export default Wishlist;
