import React from 'react'
import logo from '../../images/logo.svg';
import classes from './Head.module.css'
const Head=()=>{
return (
    <div className={classes.page}>
        <img alt='error'src={logo} className={classes.image}/>
        <a href='/login' className={classes.name}>Sign In</a>
    </div>
)
}
export default Head;