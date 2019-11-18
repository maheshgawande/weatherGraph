import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="card error-block">
      <p>Error 404! Page not found.</p>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Error404;
