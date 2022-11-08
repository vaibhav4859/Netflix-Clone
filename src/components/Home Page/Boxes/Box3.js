import React from "react";
import classes from "./Box3.module.css";

const Box3 = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.bar}>
        <div className={classes.inner}>
          <h1 className={classes.heading}>Watch everywhere.</h1>
          <h3 className={classes.small}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </h3>
        </div>

        <div className={classes.side}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            className={classes.image}
            alt="Error"
          />
          <div className={classes.innerst}>
            <video autoPlay playsInline muted loop className={classes.video}>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box3;
