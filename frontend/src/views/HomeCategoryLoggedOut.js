import React from "react";
import Layout from "../components/Layout";
import CategoryProducts from "./CategoryProducts";

const HomeCategoryLoggedOut = () => {
  return (
    <Layout>
      <div className="container d-flex flex-wrap ">
        <CategoryProducts />
      </div>
    </Layout>
  );
};

export default HomeCategoryLoggedOut;