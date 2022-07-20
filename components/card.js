import React from 'react'

function Card({name, feedback}) {

  return (
      <div className="relative">
        <div className="px-2">
          <div className="flex h-8 w-2/3 rounded-t-lg border-b-2 border-blue-300 bg-blue-100 pl-[10px] shadow-lg">
            <small className="my-auto items-center text-xl marker:font-light tracking-tight text-red-500 overflow-hidden">{name}</small>
          </div>
        </div>
        <div className="flex h-12 w-2/4 rounded-lg bg-blue-100 pl-[10px] shadow-xl">
          <h2 className="my-auto text-start text-xl font-medium text-black">{feedback}</h2>
        </div>
      </div>
  )
}

export default Card