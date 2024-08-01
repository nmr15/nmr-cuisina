import { useState } from "react"
import { Link } from "react-router-dom"

const Bag = ({bagItems, setBagItems, removeFromBag, totalAmount, isSelected, location, address}) => 
{
  const [payment, setPayment] = useState({
    name: "",
    card: "",
    month: "",
    year: "",
    cvv: ""
  })

  let paymentInfo = (e) =>
  {
    setPayment({ ...payment, [e.target.name]: e.target.value});
    console.log(payment);
  }
  

  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  return (
    <>
      <div className="container d-flex justify-content-around">
        <div className="orderbag">
          <div>
            <h1 className="heading d-inline">Your Bag</h1>
            <Link to="/order/menu" className="btn-red-small ms-5">Add more items</Link>
          </div>
          
          {
            bagItems.map((item) => (
              <div className="bag mt-3 " key={item.product.id}>
                <div className="d-flex justify-content-between">
                  <div className="bag-details">
                    <img src={item.product.image} className="bag-img w-50 d-inline" alt="" />
                    <p className="bag-name px-3 d-inline">{item.product.name}</p>
                  </div>
                  <div>
                    <p className="bag-price">${item.product.price}</p>
                  </div>
                  
                  <div>
                    <p>Quantity: {item.quantity}</p>
                    
                    
                  </div>
                </div>
                <h5 className="bag-remove ptr" onClick={() => removeFromBag(item.product)}>Remove</h5>
              </div>
            ))
          }
          
        </div>
        <div className="orderdetails">
          {
            isSelected === "pickup" ? 
            (
              <>
                <h5>Order Type: Pickup</h5>
                <p>Location: {location}</p>
              </>
            )

            :

            (
              <>
                  <h5>Order Type: Delivery</h5>
                  <p>Address: {address}</p>
              </>
            )
          }
          <p className="pb-3 border-bottom border-2">Total amount: ${totalAmount()}</p>
          <h5>Payment Information</h5>
          <form>
            <label htmlFor="name" className="form-label">Name on Card</label>
            <input 
              type="text" 
              className="form-control mb-3" 
              name="name" 
              id="name"
              onChange={(e) => paymentInfo(e)}
              />

            <label htmlFor="card" className="form-label">Card Number</label>
            <input 
              type="tel" 
              className="form-control mb-3" 
              name="card" 
              id="card"
              maxLength="12"
              onChange={(e) => paymentInfo(e)}
            />

            <p className="form-label">Expires on</p>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="month" className="form-label">Month</label>
                <select name="month" id="month" className="form-select" onChange={(e) => paymentInfo(e)}>
                  <option></option>
                  {
                    months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))
                  }
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="year" className="form-label ">Year</label>
                <select name="year" id="year" className="form-select" onChange={(e) => paymentInfo(e)}>
                  <option value=""></option>
                  {
                    years.map((years) => (
                      <option key={years} value={years}>{years}</option>
                    ))
                  }
                </select>
              </div>
              
            </div>
            

            <label htmlFor="cvv" className="form-label">CVV</label>
            <input 
              type="tel"  
              className="form-control mb-3" 
              name="cvv" 
              id="cvv"
              maxLength="3"
              onChange={(e) => paymentInfo(e)}
            />

            <button className="btn-red-small" type="submit">Checkout</button>
          </form>
        </div>
        
      </div>
    </>
  )
}

export default Bag