import React, { useState } from 'react'
import Container from './Container';
import classes from './Signup.module.css';
import Head from '../UI/Head';
import SignupForm from './SignupForm';

const Signup=()=>{
  const[isButtonClicked , setIsButtonClicked]= useState(false);
  const buttonClickedHandler=()=>setIsButtonClicked(true);
  
return (

    <div className={classes.overall}>
        <Head/>
       {!isButtonClicked && <Container onClicked={buttonClickedHandler}/>} 
       {isButtonClicked && <SignupForm/>}
    </div>
)
}
export default Signup;