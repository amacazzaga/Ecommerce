import React from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const ShoppingCartLogOut = () => {
  const fromLocaleStorage = localStorage.getItem("product");
  const parsed = JSON.parse(fromLocaleStorage);

  const getProductsOnCart = async () => {
    await axios
      .get(`http://localhost:4000/product/many?ids=${parsed.join(",")}`)
      .then((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    getProductsOnCart();
  }, []);

  return (
    <Layout>
      <div>{}</div>
    </Layout>
  );
};

export default ShoppingCartLogOut;
