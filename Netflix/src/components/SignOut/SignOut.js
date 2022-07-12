import React from 'react'
import background from '../../images/background.jpg'
import classes from './SignOut.module.css'
const SignOut = () => {
    return (
        <div className={classes.overall}>
            <div className={classes.image}>
                <img alt='error' src={background} />
            </div>
            <div className={classes.content}> 
                <h1 className={classes.heading}>Leaving So Soon?</h1>
                <p>Just so you know, you don’t always need to sign <br/> out of Netflix. It’s only necessary if you’re on a <br/> shared or public computer.
                <br/>
                <br/>
                You’ll be redirected to Netflix.com in 30 seconds.
                <button className={classes.button}>Go Now</button>
            </p></div>
        </div>

    )
}
export default SignOut;