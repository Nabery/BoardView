import React, { useState, useEffect, useCallback } from 'react';
import Button from '../components/button'
import Card from '../components/card'

export default function Home() {
  const [list, setList] = useState(0);


  async function getData(url) {
    const response = await fetch(
      url,
      {
        method: 'GET',
      }
    );
    setList(await response.json());
  }

  return (
  <div className='bg-blue-300'>
    <Button getData = {getData}/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 flex-grow">
     {Object.keys(list).length > 0 ? list.data.map(board => { return (<div className = '' key = {board.name}>
      <h1 className = 'bg-blue-600  col-span-2 p-5'>{board.name}</h1>
      {board.items.map(item => {return (<Card key = {item.title} name = {item.title} feedback = {item.feedback}/>)})}
      </div>)}) : <></> }
    </div>
  </div>
  )
}