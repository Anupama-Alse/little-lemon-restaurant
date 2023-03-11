import React from "react";
import Nav from "./Nav.js";
import BookingForm from './BookingForm';
import Footer from "./Footer.js";
 function BookingPage(props){
    
    return (
        <>
          <Nav/>
         <BookingForm availableTimes={props.availableTimes} validation={props.validation} handleSubmit={props.handleSubmit} handleChange={props.handleChange} today={props.dateMin} date={props.date} guests={props.guests} occasion={props.occasion} input={props.input}/ > 
        <Footer/>
        </>
    )
}

export default BookingPage;