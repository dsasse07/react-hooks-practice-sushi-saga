import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiIndex, sushiData, onMoreSushi, onEatSushi, credit}) {

  const sushiComponents = sushiData.filter( sushi => {
    return (
      sushi.id >= sushiIndex &&
      sushi.id < (sushiIndex + 4) 
      )
  })
  .map( (sushi) => {
    return (
      <Sushi 
        key={sushi.id}
        sushi={sushi}
        onEatSushi={onEatSushi}
        credit={credit}
      />
    )
  })

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onMoreSushi={onMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
