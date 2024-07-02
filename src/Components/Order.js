import { useState, useEffect } from 'react';

const StartOrder = () =>
{

  return (
    <>
      <div className="container p-5">
        <h1 className="heading text-center">Start Your Order</h1>
        <div className="ordertype d-flex justify-content-center">
          <div className="ordertype-card" tabIndex="1">
            <i class="bi bi-bag-fill" style={{fontSize: "2rem"}}></i>
            <h5>Pickup</h5>
          </div>
          <div className="ordertype-card" tabIndex="2">
            <i class="bi bi-scooter" style={{ fontSize: "2rem" }}></i>
            <h5>Delivery</h5>
          </div>
        </div>
        <div className="orderlocation">
          <select name="location" className="form-select reserve-form">
            <option>Select Location</option>
            <option value="Pomona">Pomona</option>
            <option value="Chino">Chino</option>
            <option value="Glendora">Glendora</option>
            <option value="Rancho Cucamonga">Rancho Cucamonga</option>
          </select>
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