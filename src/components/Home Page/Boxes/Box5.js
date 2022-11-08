import React, { useState } from "react";
import InputField from '../InputField';
import classes from "./Box5.module.css";

const Box5 = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((prevState) => !prevState);
    console.log(clicked)
  }

  return (
    <div className={classes.outer}>
      <h2>Frequently Asked Questions</h2>
      <ul className={classes.list}>
        <li className={classes.li}>
          <button className={classes.btn} onClick={clickHandler}>
            What is Netflix?
            <svg viewBox="0 0 26 26" focusable="true" className={classes.svg}>
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            How much does Netflix cost?
            <svg viewBox="0 0 26 26" focusable="true" className={classes.svg}>
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            Where can I watch?
            <svg viewBox="0 0 26 26" focusable="true" className={classes.svg}>
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            How do I cancel?
            <svg viewBox="0 0 26 26" focusable="true" className={classes.svg}>
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            What can I watch on Netflix?
            <svg viewBox="0 0 26 26" focusable="true" className={classes.svg}>
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            Is Netflix god for kids?
            <svg viewBox="0 0 26 26" focusable="true" className={classes.svg}>
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
      </ul>
      <div className={classes.form}>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <InputField />
      </div>
    </div>
  );
}

export default Box5;
