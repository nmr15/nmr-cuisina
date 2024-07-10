import React from 'react'

const Bag = ({bagItems, setBagItems}) => 
{
  return (
    <>
      <div className="container">
        <h1 className="heading text-center">Your Bag</h1>
        {
          bagItems.map((item) => (
            <div key={item.product.id}>
              <h1>{item.product.name}</h1>
              <h2>${item.product.price}</h2>
              <h4>Quantity: {item.quantity}</h4>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Bag