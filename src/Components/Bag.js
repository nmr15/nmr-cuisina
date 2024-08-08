import { useState } from "react"
import { useForm } from "react-hook-form"
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

  const
  {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  let paymentInfo = (e) =>
  {
    setPayment({ ...payment, [e.target.name]: e.target.value});
    console.log(payment);
  }

  const onSubmit = () =>
  {

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="form-label">Name on Card</label>
            <input 
              type="text" 
              className="form-control mb-3" 
              name="name" 
              id="name"
              onChange={(e) => paymentInfo(e)}
              {...register("name", {
                required: true,
              })}
              />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg text-danger">Name is required.</p>
            )}

            <label htmlFor="card" className="form-label">Card Number</label>
            <input 
              type="number" 
              className="form-control mb-3" 
              name="card" 
              id="card"
              onChange={(e) => paymentInfo(e)}
              {...register("card", {
                required: true,
                valueAsNumber: true,
                maxLength: 12,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg text-danger">Card number is required.</p>
            )}
            {errors.name && errors.name.type === "valueAsNumber" && (
              <p className="errorMsg text-danger">Numbers only.</p>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <p className="errorMsg text-danger">Card number must be 12 digits.</p>
            )}

            <p className="form-label">Expires on</p>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="month" className="form-label">Month</label>
                <select 
                  name="month" 
                  id="month" 
                  className="form-select" 
                  onChange={(e) => paymentInfo(e)}
                  {...register("month", {
                    required: true
                  })}
                  >
                  <option value=""></option>
                  {
                    months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))
                  }
                </select>
                {errors.month && errors.month.type === "required" && (
                  <p className="errorMsg text-danger">Month is required.</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="year" className="form-label ">Year</label>
                <select 
                  name="year" 
                  id="year" 
                  className="form-select" 
                  onChange={(e) => paymentInfo(e)}
                  {...register("year", {
                    required: true
                  })}
                  >
                  <option value=""></option>
                  {
                    years.map((years) => (
                      <option key={years} value={years}>{years}</option>
                    ))
                  }
                </select>
                {errors.year && errors.year.type === "required" && (
                  <p className="errorMsg text-danger">Location is required.</p>
                )}
              </div>
              
            </div>
            

            <label htmlFor="cvv" className="form-label">CVV</label>
            <input 
              type="number"  
              className="form-control mb-3" 
              name="cvv" 
              id="cvv"
              onChange={(e) => paymentInfo(e)}
              {...register("cvv", {
                required: true,
                valueAsNumber: true,
                maxLength: 3,
              })}
            />
            {errors.cvv && errors.cvv.type === "required" && (
              <p className="errorMsg text-danger">CVV is required.</p>
            )}
            {errors.cvv && errors.cvv.type === "valueAsNumber" && (
              <p className="errorMsg text-danger">Numbers only.</p>
            )}
            {errors.cvv && errors.cvv.type === "maxLength" && (
              <p className="errorMsg text-danger">CVV must be 3 digits.</p>
            )}

            <button className="btn-red-small" type="submit">Checkout</button>
          </form>
        </div>
        
      </div>
    </>
  )
}

export default Bag