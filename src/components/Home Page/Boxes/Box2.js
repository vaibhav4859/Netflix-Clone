import React from "react";
import classes from "./Box2.module.css";

const Box2 = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.bar}>
        <div className={classes.inner}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        </div>

        <div className={classes.stranger}>
          <div >
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
          </div>
          <div className={classes.content}>

            <div className={classes.things}>Stranger Things</div>
            <div className={classes.download}>Downloading...</div>
            <div className={classes.animation}></div>
          </div>
        </div>

        <div className={classes.side}>
          <h1 >Download your shows to watch offline</h1>
          <h2>Save your favourites easily and always have something to watch.</h2>
        </div>
      </div>
    </div>
  );
}

export default Box2;
