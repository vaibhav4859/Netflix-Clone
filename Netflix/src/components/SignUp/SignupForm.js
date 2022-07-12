import React, { useState } from 'react'
import { addUser, isValidUser } from '../../lib/api';
import classes from './SignupForm.module.css';
import { useFormik } from 'formik';

const initialValues = {
    email: '',
    password: ''
};


const SignupForm = () => {
    const [emailError, setEmailError] = useState(false);


    const onSubmit = async values => {
        console.log(values);
        if (await isValidUser(values)) setEmailError(true);
        else await addUser(values);
    }
    const validate = values => {
        let errors = {};
        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
            errors.email = 'Please enter a valid email address.'

        if (!values.password || values.password.length < 6)
            errors.password = 'Password is required.'
        return errors;

    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    return (

        <div className={classes.overall}>
            {emailError && <div className={classes.message}>
                <span>&#9888; </span>
                <b >Looks like that account already exists.</b>
                <a href='/login'> Sign into that account </a>
                or try using a different email.
            </div>}
            <div className={classes.name}>
                <span>STEP
                    <b> 1 </b>
                    OF
                    <b> 3 </b>
                </span>
                <h1>Create a password to start<br /> your membership</h1>
            </div>
            <div className={classes.content}>
                Just a few more steps and you're done!
                <br />We hate paperwork, too.
                <form onSubmit={formik.handleSubmit} className={classes.form}>

                    <input placeholder='Email' type='email' name='email' className={formik.errors.email ? classes.invalid : ''}
                        {...formik.getFieldProps('email')}
                    ></input>
                    {formik.touched.email && formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
                    <input type='password' placeholder='Add a password' name='password' className={formik.errors.password ? classes.invalid : ''}
                        {...formik.getFieldProps('password')}></input>
                    {formik.touched.password && formik.errors.password && <div className={classes.error}>{formik.errors.password}</div>}
                    <button className={classes.button} type='submit'>Next</button>
                </form>
            </div>
        </div>
    )
}
export default SignupForm;