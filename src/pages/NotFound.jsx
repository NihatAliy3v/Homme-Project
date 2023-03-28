import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="not-found">
      <h1 class="error">404</h1>
      <div class="page">Ooops!!! Page not found</div>
      <Link to="/" class="back-home">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
