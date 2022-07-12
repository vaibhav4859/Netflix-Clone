import Devices from '../../images/Devices.png';
import classes from './TxtContainer.module.css';

const Container = (props) => {
    return (
        <div className={classes.content}>
            <img alt='error' src={Devices} />
            <span>STEP<b> 1 </b>OF<b> 3 </b></span>
            <h1 >Finish setting up your <br />account</h1>
            <p>Netflix is personalised for you.<br /> Create a password to watch on any<br />device at any time.</p>
            <button className={classes.btn} onClick={props.onClicked}>Next</button>
        </div>
    );
};

export default Container;