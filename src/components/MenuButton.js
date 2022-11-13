import MenuIcon from "./MenuIcon";
import classes from "./MenuButton.module.css";

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <MenuIcon />
      </span>
    </button>
  );
};

export default CartButton;
