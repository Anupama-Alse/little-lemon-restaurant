import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {faStar,faUser} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
function Testimonial(){
    return(
      <section className="testimonials">
        <h1>Testimonials</h1>
   <Carousel infiniteLoop={true} showArrows={true} autoPlay={true} Interval={2000} autoFocus={true} centerMode={true} centerSlidePercentage={20} showThumbs={false}  >
           <TestimonialsCard star={faStar} person={faUser} user="Emma Scott" review="Best pizza I have had in years ,great ambience"/>
            <TestimonialsCard star={faStar} person={faUser} user="Donna Menezes" review="Yummy dessert and excellent healthy fresh green salad"/>
             <TestimonialsCard star={faStar} person={faUser} user="Jay M Shah" review="One of the best Mediterrean restaurants in town"/>
             <TestimonialsCard star={faStar} person={faUser} user="Paige Pinto" review="Ambience was top notch,pizza reminded me of europe"/>
             <TestimonialsCard star={faStar} person={faUser} user="Alex " review="Loved the food,everything tasted fresh and delicious"/>
           </Carousel>
      </section>
    );
}
export default Testimonial;