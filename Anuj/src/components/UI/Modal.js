import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closepopup}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const path = document.getElementById("overlays");
function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop closepopup={props.closepopup}/>, path)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        path
      )}
    </Fragment>
  );
}

export default Modal;
