import { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../context/cartContext";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
