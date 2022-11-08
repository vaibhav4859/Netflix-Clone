import { useState } from "react";
import Movie from "./Movie";
import classes from "./IndianTVShows.module.css";

const imageData = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Indian%20TV%20Shows%2FSacred%20Games.jpg?alt=media&token=a084ed2d-682a-451c-92ab-7e4a7a766c55",
    id: "a40",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Indian%20TV%20Shows%2FMismatched.jpeg?alt=media&token=31716dd4-fa02-458e-9316-b42e35d67987",
    id: "a41",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Indian%20TV%20Shows%2FMimi.jpg?alt=media&token=43e286ab-d920-4e43-b2d5-efb30f671294",
    id: "a42",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Indian%20TV%20Shows%2FKota%20Factory.jpeg?alt=media&token=63d95d22-b649-4e8f-93e7-b2fa5054d189",
    id: "a43",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Indian%20TV%20Shows%2FBombay%20Begums.jpeg?alt=media&token=204cb2b6-e8be-45ab-a0ea-bffd8f282265",
    id: "a44",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Indian%20TV%20Shows%2FLittle%20Things.jpeg?alt=media&token=e52ce23e-8df3-4a0d-9a97-5613a7b3b3e5",
    id: "a45",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Indian%20TV%20Shows%2FMasaba%20Masaba.jpeg?alt=media&token=e3818ffb-cd0e-4536-8cdf-26f3bab9e433",
    id: "a46",
  }
];

const IndianTVShows = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(true);
  const toggleHandler2 = () => setToggle(false);

  const toggleclasses = `${classes.carousalbox} ${toggle ? classes.toggle : ""}`;
  const visibleclass = `${classes.switchleft} ${toggle ? classes.visible : ""}`;
  const switchClasses = `${classes.switchright} ${toggle ? classes.invisible : ''}`;

  return (
    <div className={classes.container}>
      <h2>Indian TV Shows</h2>
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

export default IndianTVShows;
