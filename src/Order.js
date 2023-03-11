import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './order.css';
const items = [
  {
    id: 1,
    name: "Greek salad",
    price: 25,
    url:"greek salad.jpg",
  
   
  },
  {
    id: 2,
    name: "Lemon dessert",
    price: 20,
    url:"lemon dessert.jpg",
  },
  
  {
    id: 3,
    name: "Chocolate milkshake",
    price: 20,
    url:"coffee.jpg",
  },
  {
    id: 4,
    name: "Margerita",
    price: 30,
    url:"pizza.jpg",
  },
  {
    id: 5,
    name: "French fries",
    price: 30,
    url:"fries.jpg",
  },
  {
    id: 6,
    name: "Bruchetta",
    price: 25,
    url:"restauranfood.jpg",
  },
];
function Order(){
 
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;


  function listItemsToBuy(){

    return(
      <>
          {items.map((item)=> <section className="add" key={item.id}>
           
          <img  src={require(`./assets/${item.url}`)} alt="img-menu" className="order-img"/> 
          <div className="item-desc">
         
         <h4> {item.name}:<span style={{color:"orange",fontSize:20,}}> ${item.price}</span></h4>
         <p> ({amountOfItems(item.id)} x ${item.price})</p> </div>
         <button className="addbutton">
        <button type="submit" onClick={() => addToCart(item)}  >  +  </button> {amountOfItems(item.id)}
         <button type="submit" onClick={() => removeFromCart(item)}>-</button> 
         </button>
          </section>)}
         
      </>
    
    )
  }

    return(
        <>
        <Nav/>
       
     
    <div className="buy" >
          <h2 style={{margin:0}}>Online Menu</h2>
      <div >{listItemsToBuy()}</div>
      
      <h4>Total: ${cartTotal} <span> <button style={{margin:"10px"}}onClick={() => setCart([])}>Clear</button></span> </h4>
      
      <button className="paymentbutton" style={{padding:"30px",}} >Make Payment</button>
        
     
    </div>






        <Footer/>
        </>

    );
}
export default Order;