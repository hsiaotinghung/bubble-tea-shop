import Layout from "../layouts/Layout";
import OrderMenu from "../components/OrderMenu";
import OrderSummary from "../components/OrderSummary";

const Order = () => {
  return (
    <Layout>
      <OrderSummary />
      <OrderMenu />
    </Layout>
  );
};

export default Order;
