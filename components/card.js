import React from 'react'

function Card({name, feedback}) {

  return (
      <div className="relative">
        <div className="px-2">
          <div className="flex h-8 w-full rounded-t-lg border-b-2 border-slate-300 bg-slate-100 pl-[90px] shadow-lg">
            <small className="my-auto items-center text-2xl font-light tracking-tight text-blue-500">{name}</small>
          </div>
        </div>
        <div className="flex h-12 w-full rounded-lg bg-white pl-[98px] shadow-xl">
          <small className="my-auto text-2xl font-medium text-red-600">{feedback}</small>
        </div>
      </div>
  )
}

export default Card