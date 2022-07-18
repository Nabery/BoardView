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
    setList(await response.json());
    Object.keys(list).length > 0 ?
    console.log(list.data.map(board=> ({nome: board.name, items: board.items.map(item=>({nome: item.title, feedback: item.feedback}))})))
    : {}
  }

  return (
  <div>

    <div className="grid grid-cols-6 gap-1 my-5">
     {Object.keys(list).length > 0 ? list.data.map(board => { return (<div className = '' key = {board.name}>
      <h1 className = 'text-red-500'>{board.name}</h1>
      {board.items.map(item => {return (<Card key = {item.title} name = {item.title} feedback = {item.feedback}/>)})}
      </div>)}) : console.log('Waiting for button press')}
    </div>
    <Button getData={getData} />
  </div>
  )
}