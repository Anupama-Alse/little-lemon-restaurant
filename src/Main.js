import React,{useReducer, useState} from 'react';
import Specials from "./Specials.js";
import HomePage from './Homepage';
import BookingPage from './BookingPage';
import {Route,Routes} from "react-router-dom";
import Chicago from './Chicago';
import Footer from './Footer';
import CustomerSay from './CustomersSay';
import BookingForm from './BookingForm.js';

function Main(){
    // const [availableTimes,setavailableTimes]=useState([
        // { key:1,
        // label:"17:00",
        // times:"17:00"
        // },
        // {key:2,
        // label:"18:00",
        // times:"18:00"
        // },
        // { key:3,
        // label:"19:00",
        // times:"19:00"
        // },
        // {key:4,
        // label:"20:00",
        // times:"20:00"
        // },
        // {key:5,
        // label:"21:00",
        // times:"21:00"
        // },
        // {key:6,
        // label:"22:00",
        // times:"22:00"
        // },
                   
    
    //     ]);


       
        //  availableTimes.map((option)=>
        //     <option value={option.times} key={option.key}>{option.label}</option>)
    
    
    // availableTimes.map((options)=>
    //     <option key={options.key} >{options.label}</option>)
    // const de=availableTimes.map((options)=>
    // <option >{options.times}</option>);
    const initialTimes={
     availableTimes:[{ key:1,
        label:"17:00",
        times:"17:00"
        },
        {key:2,
        label:"18:00",
        times:"18:00"
        },
        { key:3,
        label:"19:00",
        times:"19:00"
        },
        {key:4,
        label:"20:00",
        times:"20:00"
        },
        {key:5,
        label:"21:00",
        times:"21:00"
        },
        {key:6,
        label:"22:00",
        times:"22:00"
        },]}
    
    const  [state,dispatch]=useReducer(updateTimes,initialTimes);
     
    

    
   
    const  updateTimes=(state,action)=>{
         if(action.value==="17-02-2023") return {availableTimes:state.availableTimes}
         if(action.value==="18-02-2023") return {availableTimes:"19.00"}
       
           
           
            
    }
    return(
     <>
      {/* {<BookingForm availableTimes={availableTimes?.map((options)=>
               <option key={options.key} >{options.label}</option>)}/>} */}
      
 </>
    )}

export default Main;