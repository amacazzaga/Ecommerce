import React from "react";
import Layout from "../components/Layout";
import SearchProductLoggedOut from "./SearchProductLoggedOut";

const HomeSearchProductLogOut = () => {
  return (
    <Layout>
      <div className="container d-flex flex-wrap ">
        <SearchProductLoggedOut />
      </div>
    </Layout>
  );
};

export default HomeSearchProductLogOut;
