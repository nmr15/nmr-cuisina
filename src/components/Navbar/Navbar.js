import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.scss';

const navLinks = [
  {
    id: 1,
    name: "Menu",
    route: "/menu",
  },
  {
    id: 2,
    name: "Order Online",
    route: "/order",
  },
  {
    id: 3,
    name: "Locations",
    route: "/location",
  },
  {
    id: 4,
    name: "Reservations",
    route: "/reservation",
  },
]

const Navbar = () => 
{
  const [menu, setMenu] = useState("0px");

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar__top">
            <Link to="/">
              <h1 className="navbar__logo">Cuisina</h1>
            </Link>
          </div>
          <div className="navbar__links">
            {navLinks.map((navLink) =>
            {
              const { id, name, route } = navLink;

              return (
                <Link to={route}>{name}</Link>
              );
            })}
          </div>
          <div className="navbar__toggle" onClick={() => setMenu("250px")}>
            <MenuIcon fontSize="large" />
          </div>
          <div className="navbar__responsive" style={{width: menu}}>
            <div className="navbar__responsive-btn-close" onClick={() => setMenu("0px")}>
              <CloseIcon fontSize="large" />
            </div>
            {navLinks.map((navLink) => {
              const { id, name, route } = navLink;

              return (
                <div className="navbar__responsive-container-links">
                  <Link to={route}>{name}</Link>
                </div>
                
              );
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar