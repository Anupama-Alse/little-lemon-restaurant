 import React from 'react';
 import  './App.js';
 import { Carousel } from 'react-responsive-carousel';
 import Card from './Card';
import { useNavigate } from 'react-router-dom';

 function Specials(props){
  const navigate=useNavigate();
  function handleOrder(event){
   navigate('/menu');
  }
    return(
 <section className="specials">
  <div class="specials-title">
    <h2>This weeks specials!</h2>
    <button onClick={handleOrder}>Online Menu</button>
  </div>
  
  <div class="specials-card">
    <Carousel infiniteLoop={true} showArrows={true} autoPlay={true} Interval={2000} autoFocus={true} centerMode={true} centerSlidePercentage={30} showThumbs={false} arrows>
    <Card img={props.salad} title="Greek salad" price="$20" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
    <Card img={props.bruchetta} title="Bruchetta" price="$20" description="Our Bruschetta  is made  from  grilled   bread that has been smeared  with  garlic   and seasoned with salt  and olive oil. &nbsp; &nbsp; &nbsp;"/>
    <Card img={props.dessert} title="Lemon dessert" price="$16.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>   
    </Carousel>

  </div>

</section> 
    )
 }

 export default Specials;