import React, { useState } from "react";
import classes from "./Box5.module.css";

function Box5() {
  const[clicked,setClicked] = useState(false);

  const clickHandler = ()=>{
     setClicked((prevState)=>!prevState);
     console.log(clicked)
  }

  return (
    <div className={classes.outer}>
      <h2>Frequently Asked Questions</h2>
      <ul className={classes.list}>
        <li className={classes.li}>
          <button className={classes.btn} onClick={clickHandler}>
            What is Netflix?
            <svg
              // id="thin-x"
              viewBox="0 0 26 26"
              class="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
              className={classes.svg}
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
        
          </button>
        
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            How much does Netflix cost?
            <svg
              // id="thin-x"
              viewBox="0 0 26 26"
              class="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
              className={classes.svg}
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            Where can I watch?
            <svg
              // id="thin-x"
              viewBox="0 0 26 26"
              class="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
              className={classes.svg}
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            How do I cancel?
            <svg
              // id="thin-x"
              viewBox="0 0 26 26"
              class="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
              className={classes.svg}
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            What can I watch on Netflix?
            <svg
              // id="thin-x"
              viewBox="0 0 26 26"
              class="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
              className={classes.svg}
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className={classes.li}>
          <button className={classes.btn}>
            Is Netflix god for kids?
            <svg
              // id="thin-x"
              viewBox="0 0 26 26"
              class="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
              className={classes.svg}
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
      </ul>
      <form className={classes.form}>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className={classes.container}>
        <input type="email" id="email" className={classes.input} placeholder="Email address" />
        <button className={classes.button}>
          <span>Get Started</span>
          <span>
            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
              <desc>chevron</desc>
              <path
                d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      </form>
    </div>
  );
}

export default Box5;
