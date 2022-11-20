import { useNavigate } from "react-router-dom";

import classes from "./ViewOrdersTable.module.css";

const sortByOrderPlacedAt = (a, b) => b.createdAt - a.createdAt;
const formatPrice = (price) => `$${price.toFixed(2)}`;

const ViewOrdersTable = ({ orders, filter }) => {
  const navigate = useNavigate();
  const onDetailButtonClick = (order) => {
    navigate(`/order-confirmation/${order.id}`);
  };

  const ordersList = orders
    .filter(filter)
    .sort(sortByOrderPlacedAt)
    .map((order) => (
      <tr key={order.id} className={classes["list-item"]}>
        <td> {new Date(order.createdAt.seconds * 1000).toLocaleString()}</td>
        <td>{order.id}</td>
        <td>{order.orderType}</td>
        <td>{formatPrice(order.totalAmount)}</td>
        <td>
          <button
            className={classes.button}
            onClick={() => onDetailButtonClick(order)}
          >
            Order Details
          </button>
        </td>
      </tr>
    ));
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Order placed at</th>
          <th>Order ID</th>
          <th>Order Type</th>
          <th>Total Amount</th>
          <th>View Order Details</th>
        </tr>
      </thead>
      <tbody>{ordersList}</tbody>
    </table>
  );
};

export default ViewOrdersTable;
