import React from 'react'
import Header from '../Home/Header';
import classes from './Terms.module.css'
const Terms = () => {
    return (
        <div className={classes.overall}>
            <Header />
            <div className={classes.contain}>
                <div className={classes.box}>
                  
                    <span className={classes.step}>STEP <b> 2</b> OF <b> 3</b></span>
                    <h1>Choose your plan.</h1>
                    <p><span className={classes.tick}>&#10004;</span>No commitments, cancel<br/>anytime.</p>
                    <p><span className={classes.tick}>&#10004;</span>Everything on Netflix for one <br/> low price.</p>
                    <p><span className={classes.tick}>&#10004;</span>No ads and no extra fees. Ever.</p>
                </div>
                <button className={classes.button}>Next</button>
            </div>
        </div>



    )
}
export default Terms;