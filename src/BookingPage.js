import React from "react";
import "./App.js";
import { useState } from "react";
import BookingForm from './BookingForm';
function BookingPage(){
    function updateTimes(date){
        return date;
    }
    const initialState="19:00";
    // const [availableTimes,dispatch]=useReducer(updateTimes,initialState)
    const [availableTimes]=useState([
    { key:1,
    label:"17:00"
  
    },
    {key:2,
    label:"18:00",
   
    },
    { key:3,
    label:"19:00"
    },
    {key:4,
    label:"20:00"
    },
    {key:5,
    label:"21:00"
    },
    {key:6,
    label:"22:00"
    },
    ]);
    return (
        <>
         <BookingForm availableTimes={availableTimes}/ > 
        </>
    )
}

export default BookingPage;