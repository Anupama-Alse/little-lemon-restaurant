import React from "react";
import "./App.js";
import Nav from "./Nav.js";
import Hero from "./hero.js";
import CustomerSay from "./CustomersSay.js";
import Chicago from "./Chicago.js";
import Footer from "./Footer.js";
function HomePage(){
    return (
       <>
       <Hero/>
       <CustomerSay/>
       <Chicago/>
      
       </>
    );
}

export default HomePage;