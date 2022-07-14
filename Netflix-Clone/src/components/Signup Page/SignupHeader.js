import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import classes from './SignupHeader.module.css';

const SignupHeader = (props) => {
    const navigate = useNavigate();
    const clickHandler = () => navigate('/');
    return (
        <div className={classes.page}>
            <img onClick={clickHandler} alt='error' src={logo} />
            <a href={props.signout ? '/logout' : '/login'}>{props.signout ? 'Sign Out' : 'Sign In'}</a>
        </div>
    );
};

export default SignupHeader;