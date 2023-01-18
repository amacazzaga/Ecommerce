import React from "react";
import Home from "../views/Home";
import LayoutLogged from "../components/LayoutLogged";

const HomeLoggedIn = () => {
  return (
    <LayoutLogged>
      <div className="container d-flex flex-wrap">
        <Home />
      </div>
    </LayoutLogged>
  );
};

export default HomeLoggedIn;
