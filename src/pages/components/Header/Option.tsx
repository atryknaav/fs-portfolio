import React from 'react'

const Option = ({name}:{name: string}) => {
  return (
    <div className=' hover:cursor-pointer select-none hover:text-gray-100 active:text-gray-200'>
        <a href={`#${name.toLowerCase().replace(/\s/g, "")}`}>{name}</a>
    </div>
  )
}

export default Option