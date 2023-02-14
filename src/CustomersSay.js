import React from "react";
import "./App.js";
function CustomerSay(){
    return (
        <section class="customersay">
            <div class="he"
            style={{
                display:'flex',
                flexDirection:'row',
                }}>
            <h1 >Testimonials</h1>
            </div>
        <div class="customers" style={{display:'flex'}}>
        <div class="customer">
            <h2>rating</h2>
            <p>name</p>
            <p>review</p>
        </div>
         <div class="customer">
         <h2>rating</h2>
         <p>name</p>
         <p>review</p>
     </div>
      <div class="customer">
      <h2>rating</h2>
      <p>name</p>
      <p>review</p>
  </div>
</div>

  </section>
    )
}

export default CustomerSay;