import React from 'react';
import Logo from "./assets/Logo.svg";
import {Link} from "react-router-dom";
import { FaTwitter,FaFacebook,FaInstagram,FaEnvelope} from "react-icons/fa";
import  './App.js';
import ScrollToTop from "react-scroll-to-top";
function Footer(){
   
    return(
        <footer class="footer">
            <img src={Logo} alt="restaurant logo"/>
        <ul>
           
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/menu">Menu</Link></li>
            <li><Link to ="/booking">Reservations</Link></li>
            <li><Link to ="/order">Order Online</Link></li>
            <li><Link to ="/login">Login</Link></li>
        </ul>
        <ul >
            <li style={{textAlign:"center"}}>Contact</li>
            <li>Little lemon restaurant<br/>9th Avenue, Chicago</li>
            <li>+123 456 789</li>
            <li>littlelemon@gmail.com</li>
        </ul>
        <ul>
            <li>Follow our socials</li>
           
            <div style={{display:"flex",gap:"30px",padding:"10px"}}>
            <li><a href="mailto:someone@example.com"><FaEnvelope/></a></li>
            <li><a href="https://www.twitter.com"><FaTwitter/></a></li>
            <li><a href="https://www.instagram.com"><FaInstagram/></a></li>
            <li><a href="https://www.facebook.com"><FaFacebook/></a></li>
            <ScrollToTop title="scroll to top" smooth style={{backgroundColor:"#f4CE14" ,width:"49px",border:"1px solid white", height:"49px", right:"30px" ,bottom:"20px",borderRadius:"30px"}}/>
            
            </div>
          
        </ul>
        
        </footer>
       
    )
}

export default Footer;