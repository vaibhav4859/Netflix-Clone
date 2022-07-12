import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import EmailContext from '../../store/email-conttext';
import classes from './InputField.module.css';

const initialValues = {
    email: ''
}

const validate = values => {
    let errors = {};

    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Please enter a valid email address.'

    return errors;
}

const InputField = () => {
    const navigate = useNavigate();
    const emailCtx = useContext(EmailContext);

    const onSubmit = values => {
        console.log(values);
        emailCtx.email = values.email;
        navigate('/signup');
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <div className={classes.container}>
            <form onSubmit={formik.handleSubmit}>
                <input type='email' placeholder='Email address' name='email' {...formik.getFieldProps('email')} />
                <button type='submit' className={classes.button}>Get Started &gt;</button>
                {formik.touched.email && formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
            </form>
        </div>
    );
};

export default InputField;