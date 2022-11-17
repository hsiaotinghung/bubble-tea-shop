import { useContext } from "react";

import classes from "./OrderMenuItem.module.css";
import OrderMenuItemForm from "./OrderMenuItemForm";
import CartContext from "../context/cartContext";

const MenuItem = ({ item }) => {
  const cartContext = useContext(CartContext);

  const price = `$${item.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: item.id,
      name: item.name,
      amount,
      price: item.price,
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={`../assets/${item.id}.JPG`} alt="A cup of tea"></img>
      </div>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.form}>
        <OrderMenuItemForm id={item.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MenuItem;
