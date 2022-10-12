import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const HomeLoggedOut = () => {
  return (
    <Layout>
      <h1>deslogueado</h1>
      <Link to="/login">login</Link>
    </Layout>
  );
};

export default HomeLoggedOut;
