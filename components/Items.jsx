import Image from 'next/image'
import React from 'react'
import {data} from "./ItemsData"



const Items = () => {
  return (
    <div className='flex flex-row justify-center items-center p-20 gap-12'>
      {data.map((items, index)=>{
        return(
            <div className='flex flex-col justify-center items-center h-[190px] w-[190px] border-2	border-black rounded-[100px] gap-3' key={index}>
                <Image src={items.image} alt="items" width={70} height={70}/>
                <b>{items.title}</b>
            </div>   
        )
      })}
    </div>
  )
}

export default Items
