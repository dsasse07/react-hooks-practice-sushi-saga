import React, { useState } from 'react'

function SushiWallet( {onFormSubmit}) {

  const [amount, setAmount] = useState(0)

  function handleSubmit (event) {
    event.preventDefault()
    if( !amount ) return
    onFormSubmit(amount)
    setAmount(0)
  }

  function handleFormChange(event){
    setAmount(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          How much money would you like to add to your account?
          <input type="number" name="amount" value={amount} onChange={handleFormChange} />
          <input type="submit" value="Deposit"/>
        </label>
    </form>
  )
}

export default SushiWallet
