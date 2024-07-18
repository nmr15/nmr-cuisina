import { Link } from "react-router-dom"

const Bag = ({bagItems, setBagItems, removeFromBag, totalAmount, isSelected, location, address}) => 
{
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
              </>
            )
          }
          <p>Total amount: ${totalAmount()}</p>
        </div>
        
      </div>
    </>
  )
}

export default Bag