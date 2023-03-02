// Router
import { Route, Routes } from "react-router-dom";
// Components
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// Pages
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
