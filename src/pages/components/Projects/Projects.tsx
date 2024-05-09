'use client'

import React from 'react'
import Preview from './Preview'

const Projects = () => {
  return (
    <div>
      <div id='projects' className='flex flex-col gap-6 text-white px-20'>
          <div className='text-[2rem] font-bold underline underline-offset-8 decoration-lime-400'>
              Projects
          </div>

          <div className='grid grid-cols-2 justify-between m-auto gap-8'>
              <Preview name='Business Analytics Web Application' url='' img='/salence_prev.png' features='Typescript, React, Tailwind, D3.js, Redux, theme switch' description='Displays interactive grahps of sales and other business information taken from a database. Has the ability to change the theme from dark to light and vice versa by clicking one button. '/>
              <Preview name='YouTube' url='' img='/yt_prev.png' features='Typescript, React, Tailwind, D3.js, Redux' description=''/>  
          </div>
      </div>
      
    <hr className='my-20 w-[80%] border-gray-500 static border-[1px] m-auto'/>
    </div>
  )
}

export default Projects