import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Ordermenu from './Components/Ordermenu';
import Bag from './Components/Bag';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';

function App() 
{
  const [bagItems, setBagItems] = useState([]);

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

    console.log(bagItems);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='order' element={<Order />} />
        <Route path='order/menu' element={<Ordermenu addToBag={addToBag} />} />
        <Route path='order/bag' element={<Bag bagItems={bagItems} setBagItems={setBagItems} />} />
        <Route path='reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
