import { useEffect, useState, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import classes from "./OrderConfirmation.module.css";

const OrderItem = ({ item }) => {
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes["order-item"]}>
      <div className={classes.image}>
        <img src={`../assets/${item.id}.JPG`} alt="A cup of tea"></img>
      </div>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <span className={classes.amount}>{item.amount}</span>
    </li>
  );
};
const OrderConfirmation = (props) => {
  const [order, setOrder] = useState(() => ({ items: [] }));
  const { orderId } = useParams();
  const docRef = useMemo(() => doc(db, "orders", orderId), [orderId]);

  useEffect(() => {
    async function getData() {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setOrder({ ...docSnap.data(), id: orderId.slice(0, 4) });
      } else {
        console.log("No such document!");
      }
    }
    getData();
  }, [docRef, orderId]);

  const totalAmount = `$${order.totalAmount?.toFixed(2)}` ?? 0;
  const orderItems = (
    <ul className={classes["cart-items"]}>
      {order.items.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </ul>
  );

  if (!order) {
    return null;
  }

  return (
    <section className={classes["order-confirmation"]}>
      <h1>Order Confirmation</h1>

      <Card>
        <h2>
          Order Number:{" "}
          <span className={classes["order-number"]}>{order.id}</span>
        </h2>
        {orderItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      </Card>
    </section>
  );
};

export default OrderConfirmation;
