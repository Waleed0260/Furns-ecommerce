import Image from "next/image";
import React, {useState} from "react";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import { useStore } from "../../store";


export async function getStaticPaths() {
  const paths = await client.fetch(
    '*[_type == "post" && defined(slug.current)][].slug.current'
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const details = await client.fetch(
    `*[_type == "post" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      details,
    },
  };
}

const product = ({ details }) => {
  const [clickCount, setClickCount] = useState(1);
  const [Quantity, setQuantity] = useState(1);
  const [pizza, setPizza] = useState({});

  const handleQuantity = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  const src = urlFor(details.image).url();

  const addPizza = useStore((state) => state.addItem);
  const handleCart= ()=>{
    console.log("details:", details);
    console.log("clickCount:", clickCount);
    setClickCount(prevCount => prevCount + 1);
    const newTotal = details.price * Quantity;
    if (clickCount === 1) {
      addPizza({...details, quantity: Quantity, total: newTotal});
      setClickCount(0);

    } else {
      const previousTotal = details.total - (details.price * details.quantity);
      addPizza({...details, quantity: Quantity, total: previousTotal + newTotal});
      setClickCount(0);

    }
    // setDoto({ ...details, total: 0 });
  }




  return (
    <Layout>
      <div className="w-screen h-[250px] bg-[#ccfbf1] flex flex-col justify-center items-center gap-3 mb-4">
        <h2 className="text-5xl font-bold">{details.name}</h2>
        <p>HOME/PRODUCTS/{details.name.slice(0, 30)}...</p>
      </div>
      <div className="flex flex-row justify-between p-20 gap-4">
        <div>
          <Image
            loader={() => src}
            src={src}
            alt="products-image"
            height={700}
            width={1100}
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <p>SKU: LBED</p>
          <p>Availability: In Stock</p>

          <b className="text-3xl">{details.name}</b>
          <p className="text-2xl">{details.price}.0 $</p>
          <p>{details.detail}</p>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row justify-between items-center p-2 ">
              <span className="border-[#f97316] border-[1px] h-[50px] w-[30px] flex justify-center items-center duration-500 hover:bg-[#f97316] hover:text-white cursor-pointer" onClick={()=>handleQuantity("dec")}>-</span>
              <span className="border-[#f97316] border-[1px] h-[50px] w-[100px] border-l-0 flex justify-center items-center">{Quantity}</span>
              <span className="border-[#f97316] border-[1px] h-[50px] w-[30px] border-l-0 flex justify-center items-center duration-500 hover:bg-[#f97316] hover:text-white cursor-pointer" onClick={()=>handleQuantity("inc")}>+</span>
            </div>
            <button className="h-[50px] w-[150px] bg-[#f97316] text-white hover:bg-black hover:text-[#f97316] duration-500 mt-2" onClick={handleCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default product;
