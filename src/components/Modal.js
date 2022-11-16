import ReactDOM from "react-dom";
import { useContext } from "react";

import ModalContext from "../context/modalContext";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const { hide } = useContext(ModalContext);
  return <div className={classes.backdrop} onClick={hide} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const { modalIsShown } = useContext(ModalContext);

  if (!modalIsShown) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
