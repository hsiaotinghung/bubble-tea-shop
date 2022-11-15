import classes from "./OrderMenuItem.module.css";
import OrderMenuItemForm from "./OrderMenuItemForm";

const MenuItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {};
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={""} alt="A cup of tea"></img>
      </div>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.form}>
        <OrderMenuItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MenuItem;
