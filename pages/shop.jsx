import React from 'react'
import Layout from '../components/Layout'
import { client, urlFor } from '../lib/client'
import ProductsPage from '../components/ProductsPage'

const shop = ({products}) => {
  return (
    <Layout>
      <div className="w-screen h-[250px] bg-[#ccfbf1] flex flex-col justify-center items-center gap-3 mb-4">
        <h2 className="text-5xl font-bold">Product</h2>
        <p>HOME/SHOP</p>
      </div>
      <div className="grid lg:grid-cols-4 lg:ml-14 p-6	lg:gap-16 md:grid-cols-3 md:gap-x-[11rem] md:ml-[-3rem] sm:grid-cols-2 sm:gap-x-[7rem] 2xs:ml-[-5rem] 2xs:grid-cols-1">

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

