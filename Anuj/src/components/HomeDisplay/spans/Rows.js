import React from "react";
import Box6 from "../../Home Page/Boxes/Box6";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import classes from "./Rows.module.css";

function Rows(props) {
  return (
    <div className={classes.outer}>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Box6 />
    </div>
  );
}

export default Rows;
