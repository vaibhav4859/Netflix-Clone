import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import classes from './Header.module.css';

const Header = (props) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        if (!props.homeHeader) navigate('/');
    }

    return (
        <div className={classes.header}>
            <img alt='Error loading' src={logo} className={classes.logo} onClick={clickHandler} />
            {props.homeHeader && <a href='/login' className={classes['sign-in']}>Sign In</a>}
            {props.forgotHeader && <a href='/login' className={classes.forgot}>Sign In</a>}
        </div>

    )
}
export default Header;