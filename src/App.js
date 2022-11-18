import { Route, Routes, Navigate } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import Modal from "./components/Modal";
import CartProvider from "./context/CartProvider";
import ModalProvider from "./context/ModalProvider";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate replace to="/order" />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/order-confirmation/:orderId"
              element={<OrderConfirmation />}
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

        <Modal>
          <Cart></Cart>
        </Modal>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
