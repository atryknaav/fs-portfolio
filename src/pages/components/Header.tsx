'use client'

import React from 'react'

const Header = () => {
  return (
    <div className='flex w-screen bg-zinc-950 h-fit fixed left-0 top-0 text-white justify-between py-5 px-[10%] shadow-xl text-xl'>
        <div className='flex justify-between w-[30%]'>
            <div>
                About Me
            </div>
            <div>
                Projects
            </div>
        </div>

        <div>
            Contact
        </div>
    </div>
  )
}

export default Header