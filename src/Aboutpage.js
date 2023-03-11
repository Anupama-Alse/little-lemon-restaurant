import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
function Aboutpage(){
    
    return (
        <>
        <Nav/>
        <section className="aboutpage" ><h1>Our Story</h1>
        <About/>
        </section>
        <Footer/>
       </>
    );
}
export default Aboutpage;