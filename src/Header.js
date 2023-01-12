 import React from 'react';
 import './App.js';
 
 function Header(){
    return(
        <>    
         <img src={require('./Logo.svg').default} alt='restaurant logo' /> 
        </>
    );
 }

 export default Header;