import React, { useEffect, useState } from 'react'
import { client } from '../lib/client'



const ProductsData = ({data}) => {

  const[fetched, setFetched] = useState()

  useEffect(()=>{
    const fetchData  = async ()=>{
      const query = '*[_type == "post"]'
      const data  = await client.fetch(query);
      setFetched(data)
    }
    fetchData();
  }, [])
  
  console.log(fetched);

  return (
    <div>
      {/* {data.map((items, index)=>{
        return (
            <div key={index}>
                <h1>{items.name}</h1>
            </div>
        )
      })} */}
    </div>
  )
}



export default ProductsData
