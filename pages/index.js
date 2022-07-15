import React, { useState, useEffect } from 'react';
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
    const data = await response.json();
    setList(data.data.map(board=> ({OUT: board.name, Links: board.items.map(item=> ({Reporter: item.title, Retorno: item.feedback}))})))
    console.log(list)
  }

  return (
    <div className="grid grid-cols-6 gap-1 my-5">
      <Button getData={getData} />
    </div>
  )
}