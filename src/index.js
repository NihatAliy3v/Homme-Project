// Router
import { BrowserRouter as Router } from "react-router-dom";
// App
import App from "./App";
// React
import ReactDOM from "react-dom/client";
// Scss
import "./assets/scss/index.scss";

// import { store } from "./app/store";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <Router>
    <App />
  </Router>
  // </Provider>
);
