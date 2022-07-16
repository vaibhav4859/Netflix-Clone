import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import EmailContext from '../../store/email-conttext';
import classes from './Signout.module.css';

const Signout = () => {
    const emailCtx = useContext(EmailContext);
    const navigate = useNavigate();
    const btnClickHandler = () => {
        navigate('/');
        emailCtx.email = "";
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
            emailCtx.email = "";
        }, 30000);

        return () => clearTimeout(timer);
    }, [navigate, emailCtx]);

    return (
        <div className={classes.content}>
            <h1 className={classes.heading}>Leaving So Soon?</h1>
            <p>Just so you know, you don’t always need to sign <br /> out of Netflix. It’s only necessary if you’re on a <br /> shared or public computer.
                <br />
                <br />
                You’ll be redirected to Netflix.com in 30 seconds.
                <button className={classes.button} onClick={btnClickHandler}>Go Now</button>
            </p>
        </div>
    )
}

export default Signout