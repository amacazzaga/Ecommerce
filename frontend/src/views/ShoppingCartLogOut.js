import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CartProduct from "./CartProduct";

const ShoppingCartLogOut = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const fromLocaleStorage = localStorage.getItem("product");
  const parsed = JSON.parse(fromLocaleStorage);
  /////
  const getProductsOnCart = async () => {
    await axios
      .get(`http://localhost:4000/product/many?ids=${parsed.join(",")}`)
      .then((response) => {
        console.log(response);
        setCartProducts(response.data);
      });
  };
  useEffect(() => {
    getProductsOnCart();
  }, []);

  return (
    <Layout>
      {cartProducts.map((m) => (
        <div className="col-xl-6 col-lg-4 col-md-6">
          <CartProduct
            name={m.name}
            imageNameArray={m.imageNameArray}
            id={m._id}
            price={m.price}
            description={m.description}
          />
        </div>
      ))}
    </Layout>
  );
};

export default ShoppingCartLogOut;
