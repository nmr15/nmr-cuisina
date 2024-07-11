import { Link } from "react-router-dom"

const Bag = ({bagItems, setBagItems, removeFromBag, totalAmount, isSelected, location, address}) => 
{
  return (
    <>
      <div className="container d-flex justify-content-around">
        <div className="orderbag">
          <div>
            <h1 className="heading d-inline">Your Bag</h1>
            <Link to="/order/menu d-inline" className="btn-red-small ms-5">Add more items</Link>
          </div>
          
          {
            bagItems.map((item) => (
              <div className="bag mt-3" key={item.product.id}>
                <div>
                  <div className="d-flex justify-content-between">
                    <p>{item.product.name}</p>
                    <p>${item.product.price}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="ptr" onClick={() => removeFromBag(item.product)}>Remove</h5>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
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
              <h5>Order Type: Delivery</h5>
            )
          }
        </div>
        
      </div>
    </>
  )
}

export default Bag