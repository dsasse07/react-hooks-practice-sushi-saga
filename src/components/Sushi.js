import React, { useState } from "react";

function Sushi({ sushi, onEatSushi, credit }) {

  const {name, id, img_url, price, isEaten = false} = sushi
  const [ate, setAte] = useState(isEaten)


  function eatSushi () {
    if (credit < price) return
    setAte(true)
    onEatSushi({name, price, isEaten: true, id})
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {ate ? "Eaten" : null }
        {ate ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
