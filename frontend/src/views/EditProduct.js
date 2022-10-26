import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getProduct = async () => {
    const resp = await axios.get(`http://localhost:4000/product/${id}`);
    setProduct(resp.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <LayoutLoggedAdm>
      <div>{product.name}</div>
    </LayoutLoggedAdm>
  );
};

export default EditProduct;
