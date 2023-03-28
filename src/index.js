// Router
import { BrowserRouter as Router } from "react-router-dom";
// App
import App from "./App";
// React
import ReactDOM from "react-dom/client";
// Scss
import "./assets/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
