import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='order' element={<Order />} />
        <Route path='reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
