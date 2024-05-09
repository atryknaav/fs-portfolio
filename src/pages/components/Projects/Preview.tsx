import Image from 'next/image';
import React from 'react'

interface Props{
    name: string,
    url: string,
    img: string,
    features: string,
    description: string
}

const Preview = (props: Props) => {
    const {name, url, img, features, description} = props;
  return (
    <div className=' bg-neutral-900 flex flex-col gap-3 select-none p-2 shadow-inner border-[1px] border-gray-700 w-fit hover:scale-110 transition-all hover:cursor-pointer rounded-lg max-w-[500px]'>
        <div className='border-gray-800 border-[1px] p-1'>
            <Image 
                src={img}
                width={500}
                height={500}
                alt="Picture of the author"
                
            />
        </div>

        <div className=' m-auto font-bold text-xl text-lime-400'>
            {name}
        </div>

        <div>
            <span className=' font-medium text-gray-200'>
                Features: <span className='text-gray-500'>
                            {features}
                            <div className='mt-4'>
                                <span className=' text-gray-200'>What is it about?</span> {description}
                            </div>
                          </span>
            </span>
        </div>
    </div>
  )
}

export default Preview