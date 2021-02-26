import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiWallet from './SushiWallet'

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState([])
  const [sushiIndex, setSushiIndex] = useState(1)
  const [credit, setCredit] = useState(50)
  const [sushiEaten, setSushiEaten] = useState([])
  
  useEffect( () => {
    fetch(`${API}`)
      .then( response => response.json())
      .then( setSushiData )
  }, [] )

  function handleMoreSushi() {
    setSushiIndex( sushiIndex => (sushiIndex + 4) > 100 ? 1 : sushiIndex + 4)
  }

  function handleEatSushi({name, price, isEaten, id}){
    console.log('name', name)
    console.log('price', price)
    console.log('isEaten', isEaten)
    const newSushiList = sushiData.map( sushi => {
      if (sushi.id !== id) return sushi
      return {...sushi, isEaten: isEaten}
    })
    setSushiData(newSushiList)
    setSushiEaten([...sushiEaten, {name, price, isEaten} ])
    setCredit(credit => credit - price)
  } 

  function handleAddCredit(amount){
    setCredit(credit => credit + parseInt(amount) )
  }


  return (
    <div className="app">
      <SushiWallet onFormSubmit={handleAddCredit}/>
      <SushiContainer 
        sushiData={sushiData} 
        onMoreSushi={handleMoreSushi} 
        onEatSushi={handleEatSushi} 
        credit={credit}
        sushiIndex={sushiIndex}
      />
      <Table credit={credit} plates={sushiEaten}/>
    </div>
  );
}

export default App;
