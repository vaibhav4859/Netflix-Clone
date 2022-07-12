import { useContext } from 'react';
import { addUser, isValidUser } from '../../lib/api';
import { useFormik } from 'formik';

import EmailContext from '../../store/email-conttext';
import classes from './SignupForm.module.css';

const SignupForm = () => {
    const emailCtx = useContext(EmailContext);

    const initialValues = {
        email: emailCtx.email,
        password: ''
    };

    const onSubmit = async values => {
        console.log(values);
        await addUser(values);
    }

    const validate = async values => {
        let error = await isValidUser(values);
        let errors = {};
        console.log(error);

        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) || error)
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
        <div className={classes.container}>
            <div className={classes.name}>
                <span>STEP<b> 1 </b>OF<b> 3 </b></span>
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