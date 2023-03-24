// Router
import { Route, Routes } from "react-router-dom";
// Components
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
// Pages
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import NewIn from "./pages/NewIn";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
