import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import menu from "./assets/menu.png";
import beverage from "./assets/beverage.jpg";
import { Carousel } from 'react-responsive-carousel';
function Menu(){
    return (
        <>
<Nav/>
<div className="menu" >
<Carousel  showArrows={true} infiniteLoop={true}>
<img src={menu} alt="restaurant menu"  />
<img src={beverage} alt="restaurant beverage"  />
</Carousel>
</div>
<Footer/>
</>
    );
}
export default Menu;