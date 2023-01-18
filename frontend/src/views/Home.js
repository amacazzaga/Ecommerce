import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get(`http://localhost:4000/product`)
      .then((response) => {
        console.log(response.data)
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <div>Home</div>;
};

export default Home;
