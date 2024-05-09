'use client'

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='mt-20 flex-col w-full h-fit'>
    <div className='text-white flex  w-full h-fit justify-between'>
        <div className='flex flex-col text-[5vw]'>
            <p>Nice to meet you!</p>
            <p className=' underline decoration-lime-400'>I'm Arsenii</p>
        </div>
            <p>

            </p>

            <p>

            </p>
        <div>
          <Image 
            src="/hero.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            
          />
        </div>
    </div>
    <hr className='my-20 w-[80%] border-gray-500 static border-[1px] m-auto'/>
    </div>
  )
}

export default Hero