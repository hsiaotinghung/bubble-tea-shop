import classes from "./Drawer.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.drawer}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Drawer = (props) => {
  if (!props.drawerIsShown) {
    return null;
  }

  return (
    <>
      <Backdrop onClose={props.handleHide} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Drawer;
