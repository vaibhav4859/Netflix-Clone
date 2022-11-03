import React from "react";
import classes from "./Box6.module.css";

function Box6() {
  return (
    <div className={classes.outer}>
      <div className={classes.inner}>
        <p className={classes.para}>
          Questions? Call{" "}
          <a href="tel:000-800-040-1843" className={classes.anchor}>
            000-800-040-1843
          </a>
        </p>
        <ul className={classes.list}>
          <li className={classes.item}>
            <a
              href="https://help.netflix.com/support/412"
              className={classes.anchor}
            >
              <span>FAQ</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="https://help.netflix.com" className={classes.anchor}>
              <span>Help Centre</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="/youraccount" className={classes.anchor}>
              <span>Account</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="https://media.netflix.com/" className={classes.anchor}>
              <span>Media Centre</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="http://ir.netflix.com/" className={classes.anchor}>
              <span>Investor Relations</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="https://jobs.netflix.com/jobs" className={classes.anchor}>
              <span>Jobs</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="/watch" className={classes.anchor}>
              <span>Ways to Watch</span>
            </a>
          </li>
          <li className={classes.item}>
            <a
              href="https://help.netflix.com/legal/termsofuse"
              className={classes.anchor}
            >
              <span>Terms of Use</span>
            </a>
          </li>
          <li className={classes.item}>
            <a
              href="https://help.netflix.com/legal/privacy"
              className={classes.anchor}
            >
              <span>Privacy</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="#" className={classes.anchor}>
              <span>Cookie Preferences</span>
            </a>
          </li>
          <li className={classes.item}>
            <a
              href="https://help.netflix.com/legal/corpinfo"
              className={classes.anchor}
            >
              <span>Corporate Information</span>
            </a>
          </li>
          <li className={classes.item}>
            <a
              href="https://help.netflix.com/contactus"
              className={classes.anchor}
            >
              <span>Contact Us</span>
            </a>
          </li>
          <li className={classes.item}>
            <a href="https://fast.com" className={classes.anchor}>
              <span>Speed Test</span>
            </a>
          </li>
          <li className={classes.item}>
            <a
              href="https://help.netflix.com/legal/notices"
              className={classes.anchor}
            >
              <span>Legal Notices</span>
            </a>
          </li>
          <li className={classes.item}>
            <a
              href="https://www.netflix.com/in/browse/genre/839338"
              className={classes.anchor}
            >
              <span>Only on Netflix</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Box6;
