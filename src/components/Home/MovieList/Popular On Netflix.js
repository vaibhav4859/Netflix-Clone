import { useState } from "react";
import Movie from "./Movie";
import classes from "./PopularOnNetflix.module.css";

const imageData = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Popular%20On%20Netflix%2FStranger%20Things.jpeg?alt=media&token=e9a878b8-490e-4148-b4c0-35da7d71c339",
    id: 'a30'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Popular%20On%20Netflix%2FThe%20Vampire%20Diaries.jpg?alt=media&token=fc0e7fad-28e1-4a75-bdd7-ad05f5489db9",
    id: 'a31'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Popular%20On%20Netflix%2FFriends.jpeg?alt=media&token=4b9a3bec-2d9c-492f-9db1-4ec9aebfcf99",
    id: 'a32'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Popular%20On%20Netflix%2FNever%20Have%20I%20Ever.jpeg?alt=media&token=960dc7c2-8a50-4e73-9d5a-e8fb5acf5272",
    id: 'a33'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Popular%20On%20Netflix%2FMoney%20Heist.jpeg?alt=media&token=06e9b5f8-9d79-41ff-8670-e98b9f2be5a1",
    id: 'a34'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Popular%20On%20Netflix%2FElite.jpg?alt=media&token=04afe009-6801-4a5c-83bb-b08c653ff101",
    id: 'a35'
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-77825.appspot.com/o/Popular%20On%20Netflix%2FSuits.jpg?alt=media&token=7c553e15-9717-4f9f-9ed3-2db8cb6b1845",
    id: 'a36'
  }
];

const PopularOnNetflix = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(true);
  const toggleHandler2 = () => setToggle(false);

  const toggleclasses = `${classes.carousalbox} ${toggle ? classes.toggle : ''}`;
  const visibleclass = `${classes.switchleft} ${toggle ? classes.visible : ""}`;
  const switchClasses = `${classes.switchright} ${toggle ? classes.invisible : ''}`;

  return (
    <div className={classes.container}>
      <h2>Popular On Netflix</h2>
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

export default PopularOnNetflix;
