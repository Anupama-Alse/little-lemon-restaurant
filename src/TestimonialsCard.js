import React from "react";
import "./App.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function TestimonialsCard(props){
    return (
     
        <section className="testimonialsCard">
           
            <div className="testimonial-rating">
                <span>
                    <FontAwesomeIcon icon={props.star}/>
                    <FontAwesomeIcon icon={props.star}/>
                    <FontAwesomeIcon icon={props.star}/>
                    <FontAwesomeIcon icon={props.star}/>
                    <FontAwesomeIcon icon={props.star}/>
                </span>       </div>
            <div className="testimonial-person">
                <FontAwesomeIcon icon={props.person}/>
            </div>
            <p>{props.user}</p>
            <div className="testimonial-review">{props.review}</div>
        
  </section>

    )
}

export default TestimonialsCard;