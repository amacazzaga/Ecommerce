import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4000/product/${id}`).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <LayoutLoggedAdm>
      <div> {id} </div>
    </LayoutLoggedAdm>
  );
};

export default EditProduct;
