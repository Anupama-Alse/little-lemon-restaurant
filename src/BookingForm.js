import React from "react";
import "./App.js";
import  "./bookingform.css";
import {FaUser} from 'react-icons/fa';
function BookingForm(props,isSubmitted){
   
    

    return (
        <>
        <section className="formsection">

            <h3 style={{fontSize:"30px",color:"white"}}>Booking Form</h3> <span className="logged">{isSubmitted?<p style={{fontSize:"600"}}><FaUser/> {props.input} </p>:""}</span>
        
            <div className="bookingForm">
        <form className="form" onSubmit={props.handleSubmit} >
     
        <label htmlFor="res-date">Choose date</label>
        <input 
        type="date"
         id="res-date"
         placeholder="dd-mm-yyyy"
         value={props.date}
         date="res-date"
         min={props.today}
         onChange={props.handleChange}
         aria-label="date"
         required/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" aria-label="time"
         onChange={props.handleChange}
         required>
        {props.availableTimes ? props.availableTimes.map((options, key) => <option key={key} value={options}>{options}</option>) : []}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" aria-label="guests" placeholder="1" min="1" max="10" id="guests" value={props.guests} onChange={props.handleChange} required/>
        <label htmlFor="occasion" value={props.occasion} onChange={props.handleChange}>Occasion</label>
        <select id="occasion" aria-label="occasion" value={props.occasion} onChange={props.handleChange}>
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <input className="submitbutton" type="submit" role="button" value="Make Your reservation"
        disabled={!props.validation()}/>
       
     </form>
     </div>
     </section>
     </>
    )
}

export default BookingForm;