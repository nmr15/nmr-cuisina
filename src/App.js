import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Location, Menu, Order, Reservation, Navbar, Footer } from './components';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/location" element={<Location />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      {/* <Footer /> */}
    </>
    
  );
}

export default App;
