import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidUser, updatePassword } from '../../lib/api';
import classes from './ForgotPasswordForm.module.css';

const initialValues = {
    email: '',
    password: ''
}

const validate = values => {
    let errors = {};

    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Please enter a valid email address.';

    if (!values.password || values.password.length < 6)
        errors.password = 'Your password must contain between 6 and 60 characters.';

    return errors;
}

const ForgotPasswordForm = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [learnMore, setLearnMore] = useState(true);
    const clickedHandler = () => setLearnMore(false);

    const onSubmit = async values => {
        if (await isValidUser(values)) {
            setEmailError(false);
            await updatePassword(values);
            navigate('/login');
        } else setEmailError(true);
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <h1>Forgot Email/Password</h1>
                {emailError && <div className={classes['email-error']}>
                    <span>&#10006;</span>
                    <p>No account found for this email address.</p>
                </div>}
                <p>Reset Your Password :</p>
                <form onSubmit={formik.handleSubmit}>
                    <input name='email' {...formik.getFieldProps('email')} className={formik.touched.email && formik.errors.email ? classes.errorBorder : ''} placeholder='name@example.com' />
                    {formik.touched.email && formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
                    <input name='password' type='password' {...formik.getFieldProps('password')} className={formik.touched.password && formik.errors.password ? classes.errorBorder : ''} placeholder='Password' />
                    {formik.touched.password && formik.errors.password && <div className={classes.error}>{formik.errors.password}</div>}
                    <button type='submit' className={classes.btn}>Update Password</button>
                </form>
            </div>
            <div className={classes.captcha}>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. {learnMore && <span onClick={clickedHandler}>Learn more.</span>}</p>
                {!learnMore && <p>The information collected by Google reCAPTCHA is subject to the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
            </div>
        </div>
    );
};

export default ForgotPasswordForm;