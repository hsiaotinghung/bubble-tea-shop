import OrderMenu from "../components/OrderMenu";
import Navigation from "../components/Navigation";
import Cart from "./Cart";

import classes from "./OrderInStore.module.css";
import Card from "../components/Card";

const OrderInStore = () => {
  return (
    <main className={classes.main}>
      <Navigation></Navigation>
      <div className={classes.order}>
        <OrderMenu isInStore={true} />
        <div className={classes.cart}>
          <Card>
            <Cart isInStore={true}></Cart>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default OrderInStore;
