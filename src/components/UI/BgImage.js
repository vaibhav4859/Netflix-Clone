import bgImage from '../../images/bgImg.jpg';
import bgImage2 from '../../images/bgImg2.jpg';
import classes from './BgImage.module.css';

const BgImage = (props) => {
    return (
        <div className={`${classes['bg-image']} ${props.forgotPage ? '' : classes.opacity} ${props.signIn ? classes.bg : ''}`}>
            <img alt='error' src={props.forgotPage ? bgImage2 : bgImage} />
        </div>
    );
}

export default BgImage;