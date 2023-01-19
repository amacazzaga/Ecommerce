import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios.get(`http://localhost:4000/product`).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return products.map((m) => (
    <div className="col-3">
      <CardProduct name={m.name} imageNameArray={m.imageNameArray} />
    </div>
  ));
};

export default Home;
