import React from 'react'


function button({getData}) {
  return (
    <div>
        <button onClick= {()=> getData('https://getpantry.cloud/apiv1/pantry/0e12a1da-6eeb-4bd9-985c-28217a25f86c/basket/finaldatajson')}
         className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
         UPDATE
        </button>
    </div>
  )
}

export default button