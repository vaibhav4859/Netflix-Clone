import { useState } from "react";
import Movie from "./Movie";
import classes from "./TVDramas.module.css";

const imageData = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/TV%20Dramas%2FDynasty.jpeg?alt=media&token=3f0a79fb-deda-47b7-8912-21ad256d4755",
    id: 'a20'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/TV%20Dramas%2FManifest.jpeg?alt=media&token=93c560f4-588e-4d42-903e-3e233b9d1687",
    id: 'a21'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/TV%20Dramas%2FRiverDale.jpg?alt=media&token=88ae8dc6-0519-435f-80a3-69916292353e",
    id: 'a22'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/TV%20Dramas%2FLucifer.jpg?alt=media&token=e595bd2c-7bb0-45a0-9be3-70ea9d4a265f",
    id: 'a23'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/TV%20Dramas%2FElite.jpg?alt=media&token=5abcbcd4-0a53-4648-86cc-fe9b8380c385",
    id: 'a24'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/TV%20Dramas%2FDubai%20Bling.jpg?alt=media&token=f393115f-fc49-4526-b76c-28770947a53e",
    id: 'a25'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/TV%20Dramas%2FGilmore%20Girls.jpg?alt=media&token=16ff2e28-ce3d-439e-b20e-a2bc37af3b78",
    id: 'a26'
  },
];

const TVDramas = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(true);
  const toggleHandler2 = () => setToggle(false);

  const toggleclasses = `${classes.carousalbox} ${toggle ? classes.toggle : ''}`;
  const visibleclass = `${classes.switchleft} ${toggle ? classes.visible : ""}`;
  const switchClasses = `${classes.switchright} ${toggle ? classes.invisible : ''}`;

  return (
    <div className={classes.container}>
      <h2>TV Dramas</h2>
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

export default TVDramas;
