import Image from 'next/image'
import React from 'react'
import {data} from "./ItemsData"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Items = () => {
  return (
    <div className='flex flex-row md:justify-center md:items-center md:p-20 md:gap-12 '>
      <Splide
            options={{
              type: "loop",
              breakpoints: {
                1024: {
                    perPage: 4,
                },
                768: {
                    perPage: 3,
                },
                580: {
                    perPage: 2,
                }
            },
              perPage: 4,
              pagination: false,
              arrows: false,
              drag: "free",
              rewind: true, // Add rewind option
       }}
       className='md:w-[60rem] sm:w-[96vw] sm:mt-3 2xs:w-[90vw] xs:mt-0 md:mt-4'
            >
      {data.map((items, i)=>{
        return(
          <SplideSlide className='flex justify-center items-center' key={i}>

            <div className='flex flex-col justify-center items-center md:h-[190px] md:w-[190px] 2xs:h-[120px] 2xs:w-[120px] border-2	border-black rounded-[100px] gap-3' >
                <Image src={items.image} alt="items" className='h-[60px] w-[60px]'/>
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
