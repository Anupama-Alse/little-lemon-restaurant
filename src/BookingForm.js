import React,{useState,useReducer} from "react";
import "./App.js";
import Main from "./Main.js";
import BookingPage from "./BookingPage.js";
function BookingForm(props){

    const [date,setDate]=useState();
    const  [time,setTime]=useState(
        props.availableTimes.map((options)=><option key={options.key}>{options.label}</option>)
    );
   
               

   
    const handleSubmit=(e)=>{
        e.preventDefault();
        setDate();
        console.log("submitted");

       
    }
     
   
    return (
        <>

        <div className="bookingform">
        <form onSubmit={handleSubmit} >
        <fieldset>
        <label htmlFor="res-date">Choose date</label>
        <input 
        type="date"
         id="res-date"
         placeholder="dd-mm-yyyy"
         value={date}
         date="res-date"
         onChange={(e)=>setDate(e.target.value)}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
        
       
       {time}
       
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
        </fieldset>
     </form>
     </div>
     </>
    )
}

export default BookingForm;