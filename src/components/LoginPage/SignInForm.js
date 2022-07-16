import { useState } from 'react';
import { useFormik } from 'formik';
import { isValidSignin, signInUser } from '../../lib/api';
import { useNavigate } from 'react-router-dom';

import classes from './SignInForm.module.css';

const initialValues = {
    email: '',
    password: ''
};

const validate = async values => {
    let errors = {};

    if (!values.email || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)))
        errors.email = 'Please enter a valid email address.';

    if (!values.password || values.password.lenght < 6)
        errors.password = 'Your password must contain between 6 and 60 characters.';

    return errors;
};

const SignInForm = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [learnMore, setLearnMore] = useState(false);
    const learnMoreHandler = () => setLearnMore(true);

    const onSubmit = async values => {
        const validation = await isValidSignin(values); 
        if (validation.email) setEmailError(true);
        else if(validation.password) setPasswordError(true);
        else {
            await signInUser(values);
            navigate('/home');
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    const signUpClasses = `${classes['sign-up']} ${(formik.touched.email && formik.errors.email) || (formik.touched.password && formik.errors.password)  ? classes.oops : ''} ${emailError || passwordError ? classes.errorState : ''}`;

    return (
        <div className={classes.box}>
            <div className={classes['form-content']}>
                <div className={classes['login-form']}>
                    <h1>Sign In</h1>
                    {(emailError || passwordError) && <div className={classes['error-box']}>
                        {emailError && <p>Sorry, we can't find an account with this email address. Please try again or <a href='/'>create a new account</a>.</p>}
                        {passwordError && <p><b>Incorrect password.</b> Please try again or you can <a href='/LoginHelp'>reset your password.</a></p>}
                    </div>}
                    <form className={classes['form-control']} onSubmit={formik.handleSubmit}>

                        <input type='email' placeholder='Email'  name='email' {...formik.getFieldProps('email')} className={(formik.touched.email && formik.errors.email) || emailError ? classes.invalid : ''} />
                        {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}

                        <input type='password' placeholder='Password' name='password' {...formik.getFieldProps('password')} className={(formik.touched.password && formik.errors.password) || passwordError ? classes.invalid : ''} />
                        {formik.touched.password && formik.errors.password ? <div className={classes.error}>{formik.errors.password}</div> : null}

                        <button type='submit' className={`${classes.btn} ${emailError || passwordError ? classes['btn-error'] : ''}`}>Sign In</button>
                        <div className={classes.help}>
                            <input type='checkbox' id='rememberMe' defaultChecked={true} />
                            <label htmlFor='rememberMe'>Remember Me</label>
                            <a href='/LoginHelp'>Need help?</a>
                        </div>
                    </form>

                    <div className={signUpClasses}>
                        <span>New to Netflix? <a href='/'>Sign up now.</a></span>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. {!learnMore && <span onClick={learnMoreHandler}>Learn more.</span>}</p>
                        {learnMore && <p>The information collected by Google reCAPTCHA is subject to the Google <a href='https://policies.google.com/privacy' target='_blank' rel="noopener noreferrer">Privacy Policy</a> and <a href='https://policies.google.com/terms' target='_blank' rel="noopener noreferrer">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;