import Image from 'next/image'
import React from 'react'
import {data} from "./ItemsData"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Items = () => {
  return (
    <div className='flex flex-row justify-center items-center p-20 gap-12'>
      <Splide
            options={{
              type: "loop",
              perMove: 1,
              perPage: 4,
              pagination: false,
              arrows: false,
              drag: "free",
              rewind: true, // Add rewind option
       }}
       className='w-[60rem]'
            >
      {data.map((items, index)=>{
        return(
          <SplideSlide>

            <div className='flex flex-col justify-center items-center h-[190px] w-[190px] border-2	border-black rounded-[100px] gap-3' key={index}>
                <Image src={items.image} alt="items" width={70} height={70}/>
                <b>{items.title}</b>
            </div>   
          </SplideSlide>
        )
      })}
      </Splide>
    </div>
  )
}

export default Items
