import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
const fromLocaleStorage = localStorage.getItem("product");
const parsed = JSON.parse(fromLocaleStorage);

const ShoppingCartLogOut = () => {
  const [arrayProduct, setArrayProducts] = useState(parsed);

  return (
    <Layout>
      <div>
        {arrayProduct.forEach((id) =>
          axios.get(`http://localhost:4000/product/${id}`).then((response) => {
            console.log(response);
          })
        )}
      </div>
    </Layout>
  );
};

export default ShoppingCartLogOut;
