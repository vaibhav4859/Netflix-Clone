import { useState } from 'react';
import { useFormik } from 'formik';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';

import classes from './SignInForm.module.css';

const initialValues = {
    email: '',
    password: ''
};

const onSubmit = async values => {
    // console.log(values);
    const q = query(collection(db, 'users'), where('email', '==', values.email));

    const documents = await getDocs(q);
    documents.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
};

const validate = values => {
    let errors = {};

    if (!values.email || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)))
        errors.email = 'Please enter a valid email address.';

    if (!values.password)
        errors.password = 'Your password must contain between 4 and 60 characters.';

    return errors;
};

const SignInForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    const [learnMore, setLearnMore] = useState(false);
    const learnMoreHandler = () => setLearnMore(true);

    const signUpClasses = `${classes['sign-up']} ${(formik.touched.email && formik.errors.email) || (formik.touched.password && formik.errors.password) ? classes.oops : ''}`;

    return (
        <div className={classes.box}>
            <div className={classes['form-content']}>
                <div className={classes['login-form']}>
                    <h1>Sign In</h1>
                    <form className={classes['form-control']} onSubmit={formik.handleSubmit}>

                        <input type='email' placeholder='Email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className={(formik.touched.email && formik.errors.email) ? classes.invalid : ''} />
                        {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}

                        <input type='password' placeholder='Password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className={formik.touched.password && formik.errors.password ? classes.invalid : ''} />
                        {formik.touched.password && formik.errors.password ? <div className={classes.error}>{formik.errors.password}</div> : null}

                        <button type='submit' className={classes.btn}>Sign In</button>
                        <div className={classes.help}>
                            <input type='checkbox' id='rememberMe' checked />
                            <label htmlFor='rememberMe'>Remember Me</label>
                            <a href='/'>Need help?</a>
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