import { useNavigate } from 'react-router-dom';
import classes from './ChoosePlan.module.css';

const ChoosePlan = () => {
    const navigate = useNavigate();
    const btnClickHandler = () => navigate('/home');

    const tick = <span className={classes.tick}>&#10004;</span>

    return (
        <div className={classes.contain}>
            <div className={classes.box}>

                <p className={classes.step}>STEP <b> 3</b> OF <b> 3</b></p>
                <h1>Choose your plan.</h1>
                <p>{tick} No commitments, cancel<br /><span className={classes.newLine}>anytime.</span></p>
                <p>{tick} Everything on Netflix for one <br /> <span className={classes.newLine}>low price.</span></p>
                <p>{tick} No ads and no extra fees. Ever.</p>
            </div>
            <button className={classes.button} onClick={btnClickHandler}>Next</button>
        </div>
    );
};

export default ChoosePlan;