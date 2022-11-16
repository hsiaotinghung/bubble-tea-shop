import { Route, Routes, Navigate } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/order" />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
