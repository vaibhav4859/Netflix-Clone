import React, { Fragment } from "react";
import { useState } from "react";
import classes from "./Row1.module.css";
import RowItem from "./RowItem";

function Row1(props) {
  const imageData = [
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQN1xmgJFDVm4Qc50zqIpk7gv44kQMhZPgRfvjrmvJiqEk9XpPq4Z9OcOHf80g9x3ZXMQG3bnpUSg3TDw3q30ZwLfLBkvBUyrZg.webp?r=d64",
      id: "a1",
    },
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZIpDZ5ULEWPDkujmADI3czBnlXckh6HzsEZG3IvUY2h7grFMYiBeDUORcTscKr7sJ8kzHOKuF4yUL5TKtAkmPDSVk2RbwiMWHU.webp?r=893",
      id: "a1",
    },
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSLGLAxGdABTg8r_XibXpPe5PrwnQGpN49JPjjjWfzq-E-Yp4RcOf0TkB6-CDXbC5EeC4e8-J_BqeuwCJvNob6r4PWUzye0JboA.webp?r=b8a",
      id: "a1",
    },
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV_NWMt2EXvKbtEyKNUnMek75GtGmdaHeMvFwO-CflQhp84m6fO4UF32GPiFWK0l3KF_ey444uZUmPXRlZt8nozoIs3YGZNf38s.webp?r=ac2",
      id: "a1",
    },
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUkulu4fwUrJAaq9r_TF4Wre6031-_XOTrKCchEBzfmY9XK15LjROfm0m5syG8dqD9TW_sH1D8FqvlQT4PA1uX-qil6dToul4iA.webp?r=9f8",
      id: "a1",
    },
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaYPVdKYA7bxsmDZSHk4pGI2y18ksT1XMgHC2X0T6etezJmZUY7fTEoKSikUe3tK7OuELduOLsPlWPJ6qWh9iqGzdmWKp5FyBNNQVRa1hLDdTGzWEEscSWhLz21Wrh5J8K15ppxNrftkCxXkvLXI7UI8_5NaPVzXDXwUkYFmy700iZgiJEra01bBSe1SfDQ.jpg?r=d7d",
      id: "a1",
    },
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaYPVdKYA7bxsmDZSHk4pGI2y18ksT1XMgHC2X0T6etezJmZUY7fTEoKSikUe3tK7OuELduOLsPlWPJ6qWh9iqGzdmWKp5FyBNNQVRa1hLDdTGzWEEscSWhLz21Wrh5J8K15ppxNrftkCxXkvLXI7UI8_5NaPVzXDXwUkYFmy700iZgiJEra01bBSe1SfDQ.jpg?r=d7d",
      id: "a1",
    },
    {
      src: "https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaYPVdKYA7bxsmDZSHk4pGI2y18ksT1XMgHC2X0T6etezJmZUY7fTEoKSikUe3tK7OuELduOLsPlWPJ6qWh9iqGzdmWKp5FyBNNQVRa1hLDdTGzWEEscSWhLz21Wrh5J8K15ppxNrftkCxXkvLXI7UI8_5NaPVzXDXwUkYFmy700iZgiJEra01bBSe1SfDQ.jpg?r=d7d",
      id: "a1",
    },
  ];
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(true);
  };
  const toggleHandler2 = () => {
    setToggle(false);
  };
  const toggleclasses = `${classes.carousalbox} ${
    toggle ? classes.toggle : ""
  }`;
  const visibleclass = `${classes.switchleft} ${
    toggle ? classes.visible : ""
  }`;

  return (
    <Fragment>
      <h2>Continue Watching</h2>

      <div className={classes.outer}>
        <div className={toggleclasses}>
          {imageData.map((image) => (
            <RowItem src={image.src} popup={props.popup} idm={image.id} />
          ))}
        </div>
        <span className={visibleclass} onClick={toggleHandler2}>
          <div className={classes.lt}>&lt;</div>
        </span>
        <span className={classes.switchright} onClick={toggleHandler}>
          &gt;
        </span>
      </div>
    </Fragment>
  );
}

export default Row1;
