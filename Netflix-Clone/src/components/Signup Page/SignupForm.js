import { useContext, useState } from 'react';
import { addUser, isValidUser } from '../../lib/api';
import { useFormik } from 'formik';

import EmailContext from '../../store/email-conttext';
import classes from './SignupForm.module.css';
import { useNavigate } from 'react-router-dom';

const validate = async values => {
    let errors = {};

    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Please enter a valid email address.'

    if (!values.password || values.password.length < 6)
        errors.password = 'Your password must contain between 6 and 60 characters.'

    return errors;
}

const SignupForm = () => {
    const navigate = useNavigate();
    const emailCtx = useContext(EmailContext);
    const [emailError, setEmailError] = useState(false);

    const initialValues = {
        email: emailCtx.email,
        password: ''
    };

    const onSubmit = async values => {
        console.log(values);
        if (await isValidUser(values)) setEmailError(true);
        else {
            setEmailError(false);
            await addUser(values);
            navigate('/signup');
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <div className={classes.container}>
            {emailError && <div className={classes.message}>
                <span>&#9888; </span>
                <div className={classes.text}>
                    <b >Looks like that account already exists.</b>
                    <a href='/login'> Sign into that account</a>
                    &nbsp;or try using a different email.
                </div>
            </div>}
            <div className={classes.name}>
                <span>STEP<b> 2 </b>OF<b> 3 </b></span>
                <h1>Create a password to start<br /> your membership</h1>
            </div>
            <div className={classes.content}>
                <p>Just a few more steps and you're done!<br />We hate paperwork, too.</p>
                <form onSubmit={formik.handleSubmit} className={classes.form}>
                    <input placeholder='Email' type='email' name='email' className={formik.errors.email ? classes.invalid : ''} {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
                    <input type='password' placeholder='Add a password' name='password' className={formik.errors.password ? classes.invalid : ''} {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password && <div className={classes.error}>{formik.errors.password}</div>}
                    <button type='submit' className={classes.button}>Next</button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;