import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Card from "../components/Card";
import ViewOrdersActions from "../components/ViewOrdersActions";
import OrderPieChart from "../components/OrderPieChart";

import classes from "./ViewOrders.module.css";

const COLORS = {
  "Green tea": "#4E6C50",
  "Black tea": "#4E3620",
  "Oolong tea": "#AA8B56",
  "Brown sugar latte": "#DFBB9D",
};

const formatPrice = (price) => `$${price.toFixed(2)}`;

const sortByOrderPlacedAt = (a, b) => b.createdAt - a.createdAt;

const ViewOrders = () => {
  const [orders, setOrders] = useState(() => []);
  const [filteredOrders, setFilteredOrders] = useState(() => []);
  const [filter, setFilter] = useState(() => () => true);
  const [pieChartData, setPieChartData] = useState(() => []);
  const totalOrders = filteredOrders.length;
  const totalSales = filteredOrders.reduce(
    (pre, cur) => cur.totalAmount + pre,
    0
  );

  const ordersList = orders
    .filter(filter)
    .sort(sortByOrderPlacedAt)
    .map((order) => (
      <tr key={order.id} className={classes["list-item"]}>
        <td> {new Date(order.createdAt.seconds * 1000).toLocaleString()}</td>
        <td>{order.id}</td>
        <td>{order.orderType}</td>
        <td>{formatPrice(order.totalAmount)}</td>
      </tr>
    ));

  const handleButtonClick = (dayCompareFunction) => {
    setFilter(() => dayCompareFunction);
  };

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const allOrders = [];

      querySnapshot.forEach((doc) => {
        allOrders.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setOrders(allOrders);
    }
    getData();
  }, []);

  useEffect(() => {
    const itemMap = new Map();
    const _pieChartData = [];
    const _filteredOrders = orders.filter(filter);
    _filteredOrders.forEach((order) => {
      order.items.forEach((item) => {
        if (!itemMap.get(item.name)) {
          itemMap.set(item.name, 1);
        } else {
          itemMap.set(item.name, itemMap.get(item.name) + 1);
        }
      });
    });
    itemMap.forEach((value, key) =>
      _pieChartData.push({
        title: key,
        value: value,
        color: COLORS[key],
      })
    );
    setFilteredOrders(_filteredOrders);
    setPieChartData(_pieChartData);
  }, [filter, orders]);

  return (
    <main className={classes.main}>
      <h1>View Orders</h1>
      <div>
        <ViewOrdersActions handleButtonClick={handleButtonClick} />
      </div>
      <Card>
        {" "}
        <div className={classes.summary}>
          <div>
            <h3>Amounts by product</h3>
            <OrderPieChart pieChartData={pieChartData} />
          </div>
          <div>
            <h3>Sales Summary</h3>
            <div className={classes["summary-right"]}>
              <div>
                <h4>Total Orders</h4>
                <div>{totalOrders}</div>
              </div>
              <div>
                <h4>Total Revenue</h4>
                <div>{formatPrice(totalSales)}</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h2>Orders</h2>
      <Card>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Order placed at</th>
              <th>Order ID</th>
              <th>Order Type</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>{ordersList}</tbody>
        </table>
      </Card>
    </main>
  );
};

export default ViewOrders;
