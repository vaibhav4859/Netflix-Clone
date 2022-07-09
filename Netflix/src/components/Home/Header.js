import React from 'react';
import logo from '../../images/logo.svg';
import classes from './Header.module.css';
const Header=()=>{
return(
    <div className={classes.header}>
    <img alt='error'src={logo} className={classes.title}/>
    <button className={classes.button}>Sign in</button>
    </div>

)
}
export default Header;