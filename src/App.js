import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
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
    </div>
  );
}

export default App;
