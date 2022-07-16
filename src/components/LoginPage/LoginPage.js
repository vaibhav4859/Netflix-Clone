import React from 'react';

import Header from './Header';
import SignInForm from './SignInForm';
import bgImg from '../../images/bgImg.jpg';
import classes from './LoginPage.module.css';
import Footer from '../UI/Footer';

function LoginPage() {
    return (
        <div className={classes.whole}>
            <div className={classes.image}>
                <img alt='Error' src={bgImg} />
            </div>
            <Header />
            <SignInForm />
            <Footer />
        </div>
    );
};

export default LoginPage