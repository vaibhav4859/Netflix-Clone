import React from 'react';
import classes from './Home.module.css';
import Header from './Header';
import display from '../../images/display.jpg';
import Heading from './Heading';
import Signup from './Signup';
const Home=()=>{
return (
    <div >
    <div className={classes.image}>
    <img alt='error'src={display}/>
    </div>
    <Header/>
    <Heading/>
    <Signup/>


    
    </div>
)
}
export default Home;