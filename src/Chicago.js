import React from "react";
import "./App.js";
import dessert from "./lemon dessert.jpg";
function Chicago(){
    return (
        <>
        <h1>chiacago page</h1>
        <div style={{display:'flex',
            float:'right'
        }}>
        <img src={dessert} alt="img chaicagp" />
        <p style={{ display:'flex'}}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
        </div>
        </>
    )

}

export default Chicago;