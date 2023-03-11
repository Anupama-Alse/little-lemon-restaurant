import React from 'react';
import {Link} from "react-router-dom";
import './App.js';
import Navbar from './Navbar.js';
import { useState } from "react";
import Hamburger from "./assets/hamburger.svg";
import Close from "./assets/eye.svg";
function Nav(){
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }
    return(
        <>
        
    <nav >
      <ul className="navbar">
       <li>
        <Link to="/ "><img src={require('./assets/Logo.svg').default} alt='restaurant logo' /></Link> </li> 
        <li ><Link to="/">Home</Link></li>
          <li ><Link to="/about">About</Link></li>
           <li > <Link to="/menu">Menu</Link></li> 
          <li ><Link to="/booking">Reservations</Link></li>
           <li ><Link to="/order">Order Online</Link></li>   
           <li><Link to="/login">Login</Link></li> 
      </ul>
      <ul className="nav-responsive">
      <li>
                    <Link to="/"><img src={require('./assets/Logo.svg').default} alt="Little Lemon logo" /></Link>
                </li>
                <button onClick={handleToggle}>
          <img className="hamburger" src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
        {navbarOpen ?<Navbar />:""}
      </ul>
     </nav>

        </>
    )

      }
export default Nav;