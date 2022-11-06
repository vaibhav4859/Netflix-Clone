import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RowItem.module.css";

function RowItem(props) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/play");
  };

  const popupHandler = () => {
    props.popup(props.src);
  };
  let bool = false;
  if (props.idm === "a1") bool = true;
  return (
    <Fragment>
      <div className={classes.inner} onMouseOver={popupHandler} onClick={navigateHandler}>
        <img src={props.src} className={classes.image} />
        {bool && (
          <div className={classes.progress}>
            <div className={classes.span}></div>
          </div>
        )}
        <div className={classes.container}>
          <div >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Hawkins-Icon Hawkins-Icon-Standard"
              onClick={navigateHandler}
            >
              <path
                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Hawkins-Icon Hawkins-Icon-Standard"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Hawkins-Icon Hawkins-Icon-Standard"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

         <span className={classes.span2}>96% Match</span>
         <span className={classes.span3}>U/A 16+</span>
         <span className={classes.span4}>5 Seasons</span>
         {/* <span className={classes.f}>Funny</span> */}
        </div>
      </div>
    </Fragment>
  );
}

export default RowItem;
