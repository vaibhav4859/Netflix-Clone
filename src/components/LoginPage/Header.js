import Logo from '../../images/logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <a href='/' className={classes.logo}>
                <img alt='Error' src={Logo} />
            </a>
        </div>
    )
}

export default Header;