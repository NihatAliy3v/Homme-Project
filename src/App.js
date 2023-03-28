// Router
import { Route, Routes } from "react-router-dom";
// Components
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
// Pages
import Home from "./pages/Home";
import NewIn from "./pages/NewIn";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
// Utils
import { CartProvider } from "./Context/cartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newin" element={<NewIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
