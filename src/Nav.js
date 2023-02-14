import React from 'react';
import {Link} from "react-router-dom";
import './App.js';
function Nav(){
    return(
        <>
          <nav class="gridd">
        <header 
        style={{
        }}>  
       <img 
        src={require('./Logo.svg').default} alt='restaurant logo' /> 
        
        </header>
       
        <ul> 
         
        <li ><Link to="/">Home</Link></li>
          <li ><Link to="/about">About</Link></li>
           <li > <Link to="/menu">Menu</Link></li> 
          <li ><Link to="/booking">Reservations</Link></li>
           <li ><Link to="/order">Order Online</Link></li>   
           <li><Link to="/login">Login</Link></li> 
        </ul>   
        </nav>
     
     
        </>
    )
}

export default Nav;