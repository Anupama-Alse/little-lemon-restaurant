 import React from 'react';
 import './App.js';
 import Nav from './Nav.js'
 function Header(){
    return(
        <navigation class="gridd">
        <header 
        style={{
        }}>  
       <img 
    //    style={{display:'inline-flex'}}
        src={require('./Logo.svg').default} alt='restaurant logo' /> 
        
        </header>
        <Nav/>
        </navigation>
    );
 }

 export default Header;