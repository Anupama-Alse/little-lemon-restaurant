import React from 'react';
import Specials from "./Specials.js";
import HomePage from './Homepage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import Footer from './Footer';
import CustomerSay from './CustomersSay';
import BookingForm from './BookingForm.js';
import {Route,Routes} from "react-router-dom";
function Routing (){
    return (
<Routes> 
<Route path="/" element={<HomePage />}></Route>
<Route path="/about" element={<Chicago/>}></Route> 
<Route path="/menu" element={<Specials/>}></Route>
<Route path="/booking" element={<BookingPage/>}></Route>
 <Route path="/order" element={<CustomerSay/>}></Route>  
<Route path="/login" element={<Footer/>}></Route>

</Routes>
    )
}

export default Routing;