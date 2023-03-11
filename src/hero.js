import React from 'react';
import './App.js';
import restauranfood from'./restauranfood.jpg';
import { useNavigate } from 'react-router-dom';
function Hero(){
    const navigate = useNavigate();

  function handlebooking(event) {

    navigate('/booking');
  }
    return(

        <>
        <section className='hero'>
        <div class="desc-title">
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <div className='desc-p'>
        <p>We are family owned 
   Mediterranean restaurant, 
   focused on traditional  
   recipes served with a modern 
   twist.</p>
   </div>
   <button onClick={handlebooking}>Reserve a table</button>
   </div>
   <img className="desc-img" src={restauranfood} alt="restaurant"  /> 
   </section>
     </>
    )
}
export default Hero;
