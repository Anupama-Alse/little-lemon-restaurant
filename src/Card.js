import React from 'react';
import { Link } from 'react-router-dom';
function Card(props){
    return(
    <div className="card">
     
            <img className="card-img" src={props.img} alt={props.alt}/>

        <div className="card-brief">
            <div className="card-title">
                <h5>{props.title}</h5><span>{props.price}</span>
            </div>
       
        <p>{props.description}</p>
        <p ><Link to='/order' >Order a delivery</Link></p>
    </div>
    </div>
   
    )
}
export default Card;