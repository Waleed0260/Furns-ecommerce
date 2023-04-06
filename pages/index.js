import Head from "next/head";
import { Inter } from "next/font/google";
import { client } from "../lib/client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic'
const Main = dynamic(() => import('../components/Main'))
const Items = dynamic(() => import('../components/Items'))
const Products = dynamic(() => import('../components/Products'))
const Sale = dynamic(() => import('../components/Sale'))
const Layout = dynamic(() => import('../components/Layout'))




const inter = Inter({ subsets: ["latin"] });

export default function Home({post, category, trending}) {


  return (
    <Layout>
    <div className="container">
      <Head>
        <title>Furns | ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
      >
        <Main/>
         <Items/>
          <Products post={post} category={category} trending={trending}/>
        <Sale/>
      </motion.main>
    </div>
    </Layout>
  );
}



export const getServerSideProps = async()=>{
  const query = '*[_type == "post"]';
  const post = await client.fetch(query);
  const url = '*[_type == "category"]';
  const category = await client.fetch(url);
  const items = '*[_type == "trending"]';
  const trending = await client.fetch(items);
  return {
    props: {
      post,
      category,
      trending,
    }
  }
}


