import React, {useState} from "react";
import Layout from "../components/Layout";
import { useStore } from "../store";
import { urlFor } from "../lib/client";
import Image from "next/image";
import { FaSkullCrossbones } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import OrderModal from "../components/OrderModal";


const Data = () => {
  const CartData = useStore((state) => state.cart);

  const resetCart = useStore((state) => state.resetCart);

  const removeItem = useStore((state) => state.removeItem);

  const [PaymentMethod, setPaymentMethod] = useState(null);


  const handleonDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" && localStorage.getItem("total", total());
  };


  const handleRemove = (i) => {
    removeItem(i);
  };

  const total = () =>   CartData.items.reduce((a, b) => a + b.quantity * b.price, 0);

    const resCart = ()=>{
        resetCart()
    }

  return (
    <Layout>
      <div className="w-screen h-[250px] bg-[#ccfbf1] flex flex-col justify-center items-center gap-3 mb-4">
        <h2 className="text-5xl font-bold">Cart</h2>
        <p>HOME/CART</p>
      </div>
      <div className="flex justify-center items-center flex-col py-12">
        
              <>
              <table className="xs:w-[72vw] 2xs:w-[95vw] overflow-scroll">
                <thead className="bg-[#ccfbf1] h-16">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th className="xs:table-cell 2xs:hidden">Total</th>
                    <th className="xs:table-cell 2xs:hidden">Action</th>
                  </tr>
                </thead>
                {CartData.items.length > 0 ? (
          CartData.items.map((items, i) => {
            const src = urlFor(items.image).url();
            return (
                <tbody className="m-10" key={i}>
                  <tr className="border-2" key={i}>
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
                    <td className="text-center">{items.quantity}</td>
                    <td className="text-center xs:table-cell 2xs:hidden">
                      {items.price * items.quantity}
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
          <div className="flex flex-col justify-center items-center">
            <span>
              <AiOutlineShoppingCart className="h-[50px] w-[50px] text-[#f97316]" />
            </span>
            <b>You have not added any items</b>
          </div>
        )}
              </table>
              <div className="flex justify-end items-center gap-4 h-[60px] border-t-0 border-2 xs:w-[72vw] 2xs:w-[95vw]">
              <b className="text-[#f97316] relative right-14">Grand Total:</b>
              <b className="relative right-12">${total()}</b>
            </div>
            </>
      </div>

      <div className=" flex justify-center items-center">
        <div className="w-[72vw] xs:h-[80px] 2xs:h-[300px] bg-[#ccfbf1] my-12 flex xs:flex-row 2xs:flex-col justify-around items-center gap-3">
          <form action="" className="flex 2xs:flex-col xs:flex-row xs:gap-0 2xs:gap-2">
            <input
              type="text"
              className="h-[50px] xs:w-[220px] 2xs:w-[60vw] border-[#f97316] border-[1px] "
              placeholder="Enter Coupon Here"
            />
            <button
              type="submit"
              className="h-[50px] xs:w-[160px] 2xs:w-[60vw] bg-[#f97316] text-white hover:bg-[#44403c] duration-300"
            >
              
              Apply Coupon
            </button>
          </form>
          <div className="flex xs:flex-row 2xs:flex-col gap-2">
            <button
              className="h-[50px] xs:w-[160px] 2xs:w-[60vw] bg-[#f97316] hover:bg-[#44403c] text-white duration-300 rounded-[4px]"
              onClick={resCart}
            >
              CLEAR CART
            </button>
              <button className="h-[50px] xs:w-[250px] 2xs:w-[60vw] bg-[#44403c] hover:bg-[#f97316] text-white duration-300 rounded-[4px]" onClick={handleonDelivery}>
                PAY ON DELIVERY
              </button>
          </div>
        </div>
      </div>
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod={PaymentMethod}
      />
    </Layout>
  );
};

export default Data;
