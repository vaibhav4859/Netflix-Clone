import { useState } from "react";
import Movie from "./Movie";
import classes from "./CrimeTVShows.module.css";

const imageData = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Crime%20TV%20Shows%2FWho%20Killed%20Sara.jpg?alt=media&token=c7187fad-8d11-4a8f-be19-0f71afbe722a",
    id: "a40",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Crime%20TV%20Shows%2FPeaky%20Blinders.jpeg?alt=media&token=76c1c609-565b-4752-b459-9b585bf26010",
    id: "a41",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Crime%20TV%20Shows%2FMoney%20Heist.jpeg?alt=media&token=ef62d7e5-b84e-47a3-9908-647cfba7d6de",
    id: "a42",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Crime%20TV%20Shows%2FDahmer.jpg?alt=media&token=8aca2ba0-f5c0-4def-881b-312771d3d28b",
    id: "a43",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Crime%20TV%20Shows%2FMindhunter.jpg?alt=media&token=4db2ec2f-3fd7-4a99-abe0-7ee82096f66d",
    id: "a44",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Crime%20TV%20Shows%2FLucifer.jpg?alt=media&token=099f5624-12ec-40eb-b50c-c0775d9933bd",
    id: "a45",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Crime%20TV%20Shows%2FSuits.jpg?alt=media&token=8168a499-36d3-47ef-95f9-5db9ba6299f3",
    id: "a46",
  }
];

const CrimeTVShows = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(true);
  const toggleHandler2 = () => setToggle(false);

  const toggleclasses = `${classes.carousalbox} ${toggle ? classes.toggle : ""}`;
  const visibleclass = `${classes.switchleft} ${toggle ? classes.visible : ""}`;
  const switchClasses = `${classes.switchright} ${toggle ? classes.invisible : ''}`;

  return (
    <div className={classes.container}>
      <h2>Crime TV Shows</h2>
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

export default CrimeTVShows;
