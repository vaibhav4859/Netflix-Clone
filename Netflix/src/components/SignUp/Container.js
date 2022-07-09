import React from 'react'
import Devices from '../../images/Devices.png';
import classes from './Container.module.css';
const Container=(props)=>{
return(
    <div className={classes.overall}>
    <img alt='error'src={Devices} className={classes.image}/>
    <span>STEP
     <b> 1 </b>
     OF
     <b> 3 </b>
 </span>
 <h1 >Finish setting up your 
    <br/>account</h1>
    <p>Netflix is personalised for you.<br/> Create a password to watch on any<br/>device at any time.</p>
   <button className={classes.button} onClick={props.onClicked}>Next</button>
    </div>
    
)
}
export default Container;