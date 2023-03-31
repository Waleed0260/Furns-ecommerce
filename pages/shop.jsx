import React from 'react'
import Layout from '../components/Layout'
import { client, urlFor } from '../lib/client'
import ProductsPage from '../components/ProductsPage'

const shop = ({products}) => {
  console.log(products)
  return (
    <Layout>
      <div className="w-screen h-[250px] bg-[#ccfbf1] flex flex-col justify-center items-center gap-3 mb-4">
        <h2 className="text-5xl font-bold">Product</h2>
        <p>HOME/SHOP</p>
      </div>
      <div className="grid grid-cols-4 gap-12 ml-14 p-6	">

      {products.map((items, i)=>{
        const src = urlFor(items.image).url();
        return(
          <ProductsPage items={items} src={src} key={i}/>
        )
      })}
      </div>
    </Layout>
  )
}

export const getStaticProps = async()=>{
    const query = '*[_type == "total"]';
    const products = await client.fetch(query);
    return {
      props: {
        products,
      }
    }
  }
  

export default shop

