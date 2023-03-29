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
import WishList from "./pages/WishList";
// Utils
import { CartProvider } from "./Context/cartContext";
import { HeartProvider } from "./Context/heartContext";

function App() {
  return (
    <div className="App">
      <HeartProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/newin" element={<NewIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/wish-list" element={<WishList />} />
          </Routes>
          <Footer />
        </CartProvider>
      </HeartProvider>
    </div>
  );
}

export default App;
