import React,{useState} from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import Footer from './Footer';
function Login(props){
  
    const [errorMsg,seterrorMsg]=useState({});
    const [isSubmitted,setIsSubmitted]=useState(false);


    const database=[{
        username:"user1",
        password:"pass1",
    },{
        username:"user2",
        password:"pass2",
    }];

    const errors={
        uname:"invalid username",
        pass:"invalid password",
    };

   const handleSubmit=(e)=>{ e.preventDefault();
   
   var {uname,pass}=document.forms[0];

   const userData=database.find((user)=>user.username===uname.value)

   if(userData){
    if(userData.password!==pass.value){
        seterrorMsg({name:"pass",message:errors.pass});
    }
    else{
        setIsSubmitted(true);
    }
   }
   else{
    seterrorMsg({name:"uname",message:errors.uname})
   }
   
};

const ErrorMessage=(name)=>
 name===errorMsg.name && (
    <div className='error'>{errorMsg.message}</div>
 );

 const renderForm = (
    <div className="loginform">
     <h1  style={{color:"white"}}>Login</h1>
      <form  style={{ display:'grid',
 justifyItems:'center',padding:"30px"}}onSubmit={handleSubmit}>
        <div className="input-container">
          <label style={{textAlign: "center",padding:"0",color:"white"}}htmlFor="uname">User name </label>
          <input type="text" id="uname" name="uname" required onChange={props.handleInput} />
          {ErrorMessage("uname")}
    
      
          <label  style={{textAlign: "center",padding:"0",color:"white",zIndex:"100"}} htmlFor="pass">Password </label>
          <input type="password" name="pass" id="pass" required />
          {ErrorMessage("pass")}
          </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
return(
<>
<Nav/>
<div className="loginform" style={{padding:"14%"}}>

{isSubmitted ? <div >
 
  <p style={{color:"white",fontSize:"30px"}}>Successfully logged in as {props.input} </p>
  <div className="loggedbutton">
  <button><Link to ='/order'>Order online</Link></button>
  <button ><Link to ='/booking'>Book your table</Link></button> </div>
  
    </div> : renderForm}
  
</div>
<Footer/>
</>
    );
}
export default Login;
