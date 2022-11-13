import { Route, Routes, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/order" />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
