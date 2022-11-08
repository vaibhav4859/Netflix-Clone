import { useState } from "react";
import Movie from "./Movie";
import classes from "./TrendingNow.module.css";

const imageData = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Trending%20Now%2FBreaking%20Bad.jpeg?alt=media&token=0d8be63d-77d7-41ce-bcb7-9a2153f24d0f",
    id: 'a20'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Trending%20Now%2FPeaky%20Blinders.jpeg?alt=media&token=2eefcf7b-1afe-4bef-9254-60b199e919be",
    id: 'a21'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Trending%20Now%2FEmily%20in%20Paris.jpeg?alt=media&token=0ef7f5f2-308a-4898-9c41-938df92942eb",
    id: 'a22'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Trending%20Now%2FDynasty.jpeg?alt=media&token=2265b640-6c8a-4faf-bf86-43350a8cdb55",
    id: 'a23'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Trending%20Now%2FDubai%20Bling.jpg?alt=media&token=bf217bae-eeb5-4daf-b1dd-92d27fc90550",
    id: 'a24'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Trending%20Now%2FBrooklyn%20Nine-Nine.jpg?alt=media&token=109d99cf-26bc-4242-8bdc-26ba7d7dfc51",
    id: 'a25'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Trending%20Now%2FBridgerton.jpeg?alt=media&token=a62e2896-8b1e-4681-a52c-82e02994090b",
    id: 'a26'
  }
];

const TrendingNow = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(true);
  const toggleHandler2 = () => setToggle(false);

  const toggleclasses = `${classes.carousalbox} ${toggle ? classes.toggle : ''}`;
  const visibleclass = `${classes.switchleft} ${toggle ? classes.visible : ""}`;
  const switchClasses = `${classes.switchright} ${toggle ? classes.invisible : ''}`;

  return (
    <div className={classes.container}>
      <h2>Trending Now</h2>
      <div className={classes.outer}>
        <div className={toggleclasses}>
          {imageData.map((image) => (
            <Movie key={image.id} src={image.src} popup={props.popup} />
          ))}
        </div>
        <span className={visibleclass} onClick={toggleHandler2}>
          <div className={classes.lt}>&lt;</div>
        </span>
        <span className={switchClasses} onClick={toggleHandler}>&gt;</span>
      </div>
    </div>
  );
}

export default TrendingNow;
