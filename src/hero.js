import React from 'react';
import './App.js';
import restauranfood from'./restauranfood.jpg';
import Specials from './Specials';
function Hero(){
    return(

        <>
        <main  className='sub'>

        <description  
        class="desc">
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>We are family owned <br/>
   Mediterranean restaurant, <br/>
   focused on traditional  <br/>
   recipes served with a modern <br/>
   twist.</p>
   <button
    style={{
   //   display:'flex',
   //  maxWidth:'150px',
   //  maxHeight:'40px',
   //  borderRadius:'16px',
   //  alignItems:'center'
    }}>Reserve a table</button>
   </description>
   
   <img src={restauranfood} alt="restaurant"  />
   
   </main>
   <Specials/>
   
     </>
    )
}
export default Hero;
