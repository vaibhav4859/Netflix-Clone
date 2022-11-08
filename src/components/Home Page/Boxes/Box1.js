import React from "react";
import classes from "./Box1.module.css";

const Box1 = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.bar}>
        <div className={classes.inner}>
          <h1 className={classes.heading}>Enjoy on your TV</h1>
          <h3>
            Watch on smart TV's, Playstation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </h3>
        </div>

        <div className={classes.side}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className={classes.image} />
          <div className={classes.innerst}>
            <video autoPlay playsInline muted loop className={classes.video}>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box1;
