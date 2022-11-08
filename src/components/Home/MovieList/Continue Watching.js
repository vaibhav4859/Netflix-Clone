import { useEffect, useState } from "react";
import { getImages } from "../../../lib/api";
import classes from "./ContinueWatching.module.css";
import Movie from "./Movie";

const imageData = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Continue%20Watching%2FFriends.jpeg?alt=media&token=3a9c6d50-ac0b-4d75-b2f4-63a8322c4019",
    id: "a11",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Continue%20Watching%2FMismatched.jpeg?alt=media&token=01cfb40a-654b-4106-a888-64b837cea24d",
    id: "a12",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Continue%20Watching%2FMoney%20Heist.jpeg?alt=media&token=8b014eb9-78d0-4b16-95c2-17a1d7a93f14",
    id: "a13",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Continue%20Watching%2FThe%20Vampire%20Diaries.jpg?alt=media&token=3af1a54b-16f1-40f4-86d4-e91056c6ea11",
    id: "a14",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Continue%20Watching%2FPeaky%20Blinders.jpeg?alt=media&token=d8c26e98-f532-4e96-b141-da85a6b0922e",
    id: "a15",
  }
];

const ContinueWatching = props => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(true);
  const toggleHandler2 = () => setToggle(false);


  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const urls = await getImages("Continue Watching");
      // const arr = [...urls];
      console.log(urls);
      // console.log(arr);
      // setIsLoaded(true);
    }
    load();
  }, []);

  const toggleleftclasses = `${classes.carousalbox} ${toggle ? classes.toggleleft : ""}`;
  const visibleclass = `${classes.switchleft} ${toggle ? classes.visible : ""}`;
  const switchClasses = `${classes.switchright} ${toggle ? classes.invisible : ''}`;

  return (
    <div className={classes.container}>
      <h2>Continue Watching</h2>

      <div className={classes.outer}>
        <div className={toggleleftclasses}>
          {imageData.map((image) => (
            <Movie key={image.id} src={image.src} popup={props.popup} id={image.id} />
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

export default ContinueWatching;