import React from "react";
import LayoutLogged from "../components/LayoutLogged";
import CategoryProducts from "./CategoryProducts";

const HomeCategoryLoggedIn = () => {
  return (
    <LayoutLogged>
      <div className="container d-flex flex-wrap ">
        <CategoryProducts />
      </div>
    </LayoutLogged>
  );
};

export default HomeCategoryLoggedIn;