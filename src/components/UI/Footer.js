import React from "react";
import classes from "./Footer.module.css";

const Footer = props => {
  const outerClasses = `${classes.outer} ${props.signup ? classes.bg : ''}`
  return (
    <div className={outerClasses}>
      <div className={classes.inner}>
        <p className={classes.para}>Questions? Call{" "}
          <a href="tel:000-800-040-1843" className={classes.anchor}>000-800-040-1843</a>
        </p>
        <ul className={classes.list}>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>FAQ</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Help Centre</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Account</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Media Centre</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Investor Relations</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Jobs</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Ways to Watch</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Terms of Use</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Privacy</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Cookie Preferences</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Corporate Information</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Contact Us</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Speed Test</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Legal Notices</a>
          </li>
          <li className={classes.item}>
            <a href="/" className={classes.anchor}>Only on Netflix</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;