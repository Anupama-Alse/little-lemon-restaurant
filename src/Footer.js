import React from 'react';
import  './App.js';
function Footer(){
    return(
        <footer class="footer">
        <ul style={{ display:'inline',listStyleType:'none',}}>
            <li>Doormat Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul style={{ listStyleType:'none',}}>
            <li>Contact</li>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        <ul style={{ listStyleType:'none',}}>
            <li>Social media links</li>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        </footer>
       
    )
}

export default Footer;