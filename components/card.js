import React from 'react'

function Card({name, feedback}) {

  return (
      <div className="relative">
        <div className="px-2">
          <div className="flex h-8 w-full rounded-t-lg border-b-2 border-blue-300 bg-blue-100 pl-[90px] shadow-lg">
            <small className="my-auto items-center text-2xl font-light tracking-tight text-blue-500">{name}</small>
          </div>
        </div>
        <div className="flex h-12 w-full rounded-lg bg-blue-100 pl-[98px] shadow-xl">
          <small className="my-auto text-2xl font-medium text-black">{feedback}</small>
        </div>
      </div>
  )
}

export default Card