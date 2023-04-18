import React from 'react'
import axios from "axios";
import CardProduct from "./CardProduct";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CategoryProducts = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const getProducts = () => {
        axios.get(`http://ec2-54-157-162-101.compute-1.amazonaws.com:4000/product/categories?category=${category}`).then((response) => {
          console.log(response.data); 
          setProducts(response.data);        
        });
      };
      //
      useEffect(() => {
        getProducts();
      }, [category]);
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
}

export default CategoryProducts