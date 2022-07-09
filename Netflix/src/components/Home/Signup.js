import React from 'react'
import classes from './Signup.module.css';
import {useFormik} from 'formik';
const initialValues ={
    email:''
}
const onSubmit=values=>{
    console.log(values);
}
const validate=values=>{
    let errors={};
    if(!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email='Please enter a valid email address.'
    return errors;
    
}
const Signup=()=>{
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
return (
    <div className={classes.signup}>
        <form onSubmit={formik.handleSubmit}>
        <input type='email' placeholder='Email address' name='email'
        {...formik.getFieldProps('email')}
        />
  <button className={classes.button}>Get Started &gt;</button>
  {formik.touched.email && formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
        </form>


    </div>
)
}
export default Signup;