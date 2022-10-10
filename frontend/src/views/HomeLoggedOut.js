import React from "react";
import { Link } from "react-router-dom";

const HomeLoggedOut = () => {
  return (
    <div>
      deslogueado
      <Link to="/login">login</Link>
    </div>
  );
};

export default HomeLoggedOut;
