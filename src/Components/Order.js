import { useState, useEffect } from 'react';

const StartOrder = () =>
{
  const [isSelected, setIsSelected] = useState('pickup');

  const isPickup = isSelected === "pickup";
  const isDelivery = isSelected === "delivery";

  const handleClick = () =>
  {

  }

  return (
    <>
      <div className="container orderstart">
        <h1 className="heading text-center">Start Your Order</h1>
        <div className="ordertype d-flex justify-content-center">
          <div className={isPickup ? "ordertype-card-selected" : "ordertype-card"} id="pickup" tabIndex="1" onClick={() => setIsSelected('pickup')}>
            <i class="bi bi-bag-fill" style={{fontSize: "2rem"}}></i>
            <h5>Pickup</h5>
          </div>
          <div className={isDelivery ? "ordertype-card-selected" : "ordertype-card"} id="delivery" tabIndex="2" onClick={() => setIsSelected('delivery')}>
            <i class="bi bi-scooter" style={{ fontSize: "2rem" }}></i>
            <h5>Delivery</h5>
          </div>
        </div>
        <div className="orderlocation d-flex justify-content-center">
          <select name="location" className="form-select reserve-form">
            <option>Select Location</option>
            <option value="Pomona">Pomona</option>
            <option value="Chino">Chino</option>
            <option value="Glendora">Glendora</option>
            <option value="Rancho Cucamonga">Rancho Cucamonga</option>
          </select>
          <button className="btn-red-small">Continue</button>
        </div>
      </div>
    </>
  )
}

const Order = () => 
{
  return (
    <>
      <StartOrder />
    </>
  )
}

export default Order