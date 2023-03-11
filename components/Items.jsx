import Image from 'next/image'
import React from 'react'
import {data} from "./ItemsData"



const Items = () => {
  return (
    <div className='flex flex-row justify-center items-center p-20 gap-12'>
      {data.map((items, index)=>{
        return(
            <div className='flex flex-col justify-center items-center h-[150px] w-[150px] border-2	border-black rounded-[100px]' key={index}>
                <Image src={items.image} width={50} height={50}/>
                <b>{items.title}</b>
            </div>   
        )
      })}
    </div>
  )
}

export default Items
