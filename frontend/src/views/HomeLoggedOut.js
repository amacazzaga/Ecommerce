import React from "react";
import Layout from "../components/Layout";
import Home from "../views/Home";

const HomeLoggedOut = () => {
  return (
    <Layout>
      <div className="container d-flex flex-wrap ">
        <Home />
      </div>
    </Layout>
  );
};

export default HomeLoggedOut;
