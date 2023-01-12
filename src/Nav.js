import React from 'react';
import './App.js';
function Nav(){
    return(
        <>
        <nav>
        <ul style={{listStyleType:'none',
       display:'flex',
       justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh',
       }}>
          <li><a href="/home">Home</a></li>
          <li><a href="/homee">home</a></li>
          <li> <a href="www.google.com">Home</a></li>
          <li><a href="www.google.com">Home</a></li>
        </ul>
        
        </nav>
        </>
    )
}

export default Nav;