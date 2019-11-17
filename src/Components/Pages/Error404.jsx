import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="card">
      <p style={{ fontSize: "2.2rem", lineHeight: 1.5 }}>
        Looks like you landed on wrong page!
      </p>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Error404;
