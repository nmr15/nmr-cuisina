import { useState } from 'react';
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Ordermenu from './Components/Ordermenu';
import Bag from './Components/Bag';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';
import Checkout from "./Components/Checkout";

function App() 
{
  const [isSelected, setIsSelected] = useState("pickup");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [bagItems, setBagItems] = useState([]);

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

  const handleLocation = () => 
  {
    if (location === "" || location === "Select location") {
      alert("Please select a location");
    }
    else {
      navigate("/order/menu");
    }
  }

  const handleAddress = () => 
  {
    if (address === "") {
      alert("Please enter delivery address");
    }
    else {
      navigate("/order/menu");
    }
  }

  const addToBag = (menuItem) => 
    {
    const alreadyInBag = bagItems.find(item => item.product.id === menuItem.id);
    if (alreadyInBag) 
    {
      const latestBagUpdate = bagItems.map(item =>
        item.product.id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setBagItems(latestBagUpdate);
    }
    else 
    {
      setBagItems([...bagItems, { product: menuItem, quantity: 1 }]);
    }
    // console.log(bagItems);
  }

  const removeFromBag = (menuItem) =>
  {
    const updatedCart = bagItems.filter(item => item.product.id !== menuItem.id);
    setBagItems(updatedCart);
  }

  const totalAmount = () =>
  {
    return bagItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  return (
    <div className="site-container">
      <Navbar bagItems={bagItems} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='order' element={<Order isSelected={isSelected}
                                            setIsSelected={setIsSelected}
                                            isPickup={isPickup}
                                            isDelivery={isDelivery}
                                            changeLocation={changeLocation}
                                            changeAddress={changeAddress}
                                            handleLocation={handleLocation}
                                            handleAddress={handleAddress} />} />
        <Route path='order/menu' element={<Ordermenu addToBag={addToBag} />} />
        <Route path='order/bag' element={<Bag bagItems={bagItems}
                                              location={location}
                                              address={address}
                                              setBagItems={setBagItems} 
                                              removeFromBag={removeFromBag} 
                                              totalAmount={totalAmount}
                                              isSelected={isSelected} />} />                                     
        <Route path='reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
