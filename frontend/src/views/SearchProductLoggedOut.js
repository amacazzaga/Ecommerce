import React from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchProductLoggedOut = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  const getProducts = () => {
    axios
      .get(`http://localhost:4000/product/search?name=${name}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getProducts();
  }, [name]);
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

export default SearchProductLoggedOut;
