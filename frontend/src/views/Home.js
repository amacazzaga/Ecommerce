import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios.get(`http://localhost:4000/product/categories?category=3`).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return products.map((m) => (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <CardProduct
        name={m.name}
        imageNameArray={m.imageNameArray}
        id={m._id}
        price={m.price}
      />
    </div>
  ));
};

export default Home;
