import React from 'react';
import restauranfood from'./restauranfood.jpg';
import salad from "./greek salad.jpg";
import bruchetta from "./bruchetta.svg";
import dessert from "./lemon dessert.jpg";
import Specials from "./Specials.js";
function Main1(){
    return(
     <>
      <main  
    className='sub'
     style={{
//         display:'flex',
//   backgroundColor:'#6E6F6E',
//   justifyContent:'left',
//   padding:'3%',
//  position: 'relative',
//  top: 0,
//  left: 0,

      }}>
      
    {/* //   display:'flex',
    //   backgroundColor:'lightgreen',
    // // gridTemplateAreas:"description foodimage",
    // // gridTemplateColumns:"auto auto",
    // //  gridTemplateRows:"none",
    //  justifyContent:'space-between'
    //  }} */} 
   
   {/* <reserve class="desc"
    //   style={{
      
    //   // display:'flex',
    //   // flexDirection:'row',
    //   // backgroundColor:'green',
    //   // justifyContent:'space-between'
    // }}> */}
     <description  
     class="desc1"
     style={{
      paddingLeft:'100px',
     flexDirection:'column',
     }}>
     <h2>Little Lemon</h2>
     <h4>Chicago</h4>
     <p>We are family owned <br/>
Mediterranean restaurant, <br/>
focused on traditional  <br/>
recipes served with a modern <br/>
twist.</p>
<button
 style={{display:'flex',
 maxWidth:'150px',
 maxHeight:'40px',
 borderRadius:'16px',
 alignItems:'center'}}>Reserve a table</button>
</description>
{/* <foodimage 
// class="subtitle"  */}
{/* style={{


  }}> */}
<img src={restauranfood} alt="restaurant"  />
{/* </foodimage> */}
</main>
<Specials/>

  </>
    )
}
export default Main1;