"use client"
import React from 'react'

const Key = ({className,currentVal,keyVal,OnlyValue}) => {
  return (
    <div className={` ${className} flex justify-center items-center px-3 py-2 w-5 ${keyVal === currentVal? "bg-green-500":"bg-gray-600"} text-white rounded-md shadow-sm shadow-yellow-100 mx-3` }>
        {OnlyValue || keyVal}
    </div>
  )
}

export default Key
