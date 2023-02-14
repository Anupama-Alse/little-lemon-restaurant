 import React from 'react';
 import  './App.js';
 import salad from "./greek salad.jpg";
import bruchetta from "./bruchetta.svg";
import dessert from "./lemon dessert.jpg";
 function specials(){
    return(
 <article class="specials">
 
  <div class="heading"
  style={{ 
  //   display:'flex',
  // flexDirection:'row',
  }}>
    <p>This weeks specials!</p>
    <button>Order Menu</button>
  </div>
  <div class="card">
    <div class="card1">
      <img src={salad}  width="max-width" height="200px" alt="food"/>
      <div class="menu">
      <p>Greek salad</p>
      <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
      <p>order a delivery</p>
      </div>
    </div>
    <div class="card1">
      <img src={bruchetta}  width="max-width" height="200px" alt="food"/>
      <div class="menu">
      <p>Bruchetta</p>
      <p>Our Bruschetta is made from grilled bread that has been smeared  with  garlic and seasoned with salt and olive oil. </p>
      <p>order a delivery</p>
      </div>
    </div>
    <div class="card1">
      <img src={dessert}  width="max-width" height="200px" alt="food"/>
      <div class="menu">
      <p>Lemon dessert</p>
      <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
      <p>order a delivery</p>
      </div>
    </div>
    <div class="card1">
      <img src={salad}  width="max-width" height="200px" alt="food"/>
      <div class="menu">
      <p>Greek salad</p>
      <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
      <p>order a delivery</p>
      </div>
      </div>
  </div>
</article> 
    )
 }

 export default specials;