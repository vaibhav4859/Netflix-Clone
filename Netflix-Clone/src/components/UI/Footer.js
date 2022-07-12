import classes from './Footer.module.css';

function Footer(props) {
    return (
        <div className={`${classes.footer} ${props.signup ? classes.signup : ''}`} >
            <div className={classes.content}>
                <p className={classes.top}>Questions? Call <a href='tel:000-800-040-1843'>000-800-040-1843</a></p>
                <div className={classes.line1}>
                    <a href='https://help.netflix.com/en/node/412' target='_blank' rel="noopener noreferrer">FAQ</a>
                    <a href='https://help.netflix.com/en/' target='_blank' rel="noopener noreferrer">Help Center</a>
                    <a href='https://help.netflix.com/legal/termsofuse' target='_blank' rel="noopener noreferrer">Terms of Use</a>
                    <a href='https://help.netflix.com/legal/privacy' target='_blank' rel="noopener noreferrer">Privacy</a>
                </div>
                <div className={classes.line2}>
                    <a href='https://help.netflix.com/legal/privacy' target='_blank' rel="noopener noreferrer">Cookie Preferences</a>
                    <a href='https://help.netflix.com/legal/corpinfo' target='_blank' rel="noopener noreferrer">Corporate Information</a>
                </div>
            </div>
        </div>
    );
};

export default Footer