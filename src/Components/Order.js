import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StartOrder = () =>
{
  const [isSelected, setIsSelected] = useState("pickup");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const isPickup = isSelected === "pickup";
  const isDelivery = isSelected === "delivery";

  const changeLocation = (e) =>
  {
    setLocation(e.target.value);
    console.log(location);
  }

  const changeAddress = (e) =>
  {
    setAddress(e.target.value);
    console.log(address);
  }

  const handleSubmit = () =>
  {
    if(location === "" || location === "Select location")
    {
      alert("Please select a location");
    }
    else
    {
      navigate("/order/menu");
    }
  }

  const handleAddress = () =>
  {
    if(address === "")
    {
      alert("Please enter delivery address");
    }
    else 
    {
      navigate("/order/menu");
    }
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
        {isSelected === "pickup" ? <Pickup changeLocation={changeLocation} handleSubmit={handleSubmit} /> : <Delivery changeAddress={changeAddress} handleAddress={handleAddress} />}
      </div>
    </>
  )
}

const Pickup = ({changeLocation, handleLocation}) =>
{
  return (
    <>
      <div className="orderlocation d-flex justify-content-center">
        <select name="location" className="form-select reserve-form" onChange={(e) => changeLocation(e)}>
          <option value=""></option>
          <option value="Pomona">Pomona</option>
          <option value="Chino">Chino</option>
          <option value="Glendora">Glendora</option>
          <option value="Rancho Cucamonga">Rancho Cucamonga</option>
        </select>
        <button className="btn-red-small" onClick={() => handleLocation()}>Continue</button>
      </div>
    </>
  )
}

const Delivery = ({ changeAddress, handleAddress }) =>
{
  return (
    <>
      <div className="orderlocation d-flex justify-content-center">
        <input type="text" className="form-control" placeholder="Enter address" onChange={(e) => changeAddress(e)} />
        <button className="btn-red-small" onClick={() => handleAddress()}>Continue</button>
      </div>
    </>
  )
}

const Order = ({isSelected, setIsSelected, isPickup, isDelivery, changeLocation, changeAddress, handleLocation, handleAddress}) => 
{
  return (
    <>
      <div className="container orderstart">
        <h1 className="heading text-center">Start Your Order</h1>
        <div className="ordertype d-flex justify-content-center">
          <div className={isPickup ? "ordertype-card-selected" : "ordertype-card"} id="pickup" tabIndex="1" onClick={() => setIsSelected('pickup')}>
            <i class="bi bi-bag-fill" style={{ fontSize: "2rem" }}></i>
            <h5>Pickup</h5>
          </div>
          <div className={isDelivery ? "ordertype-card-selected" : "ordertype-card"} id="delivery" tabIndex="2" onClick={() => setIsSelected('delivery')}>
            <i class="bi bi-scooter" style={{ fontSize: "2rem" }}></i>
            <h5>Delivery</h5>
          </div>
        </div>
        {isSelected === "pickup" ? <Pickup changeLocation={changeLocation} handleLocation={handleLocation} /> : <Delivery changeAddress={changeAddress} handleAddress={handleAddress} />}
      </div>
    </>
  )
}

export default Order