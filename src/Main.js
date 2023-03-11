import React,{useReducer, useState} from 'react';
import Specials from "./Specials.js";
import About from './About.js';
import Hero from './Hero.js';
import salad from "./assets/greek salad.jpg";
import bruchetta from "./assets/bruchetta.svg";
import dessert from "./assets/lemon dessert.jpg";
import Testimonial from './Testimonial.js';

function Main(){
   return (
    <>
    <Hero/>
    <Specials salad={salad} bruchetta={bruchetta} dessert={dessert}/>
    <Testimonial/>
    <About/>

    </>
   );
   }
export default Main;