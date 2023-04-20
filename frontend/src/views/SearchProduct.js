import React from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchProduct= () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  const getProducts = () => {
    axios
      .get(`https://ec2-54-157-162-101.compute-1.amazonaws.com:4000/product/search?name=${name}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getProducts();
  }, [name]);
  return (products.length>0? products.map((m) => (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <CardProduct
        name={m.name}
        imageNameArray={m.imageNameArray}
        id={m._id}
        price={m.price}
      />
    </div>)
  ):<div className="container xl min-vh-100">
    <h1>Sorry, We Havent Found Products</h1>
  </div>);
};

export default SearchProduct;
