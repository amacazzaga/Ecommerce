import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import CardImage from "./CardImage";
import FormSubmitImage from "./FormSubmitImage";

const EditImage = () => {
  const [productName, setProductName] = useState();
  const { id } = useParams();
  const [imageProductArray, setImageProductArray] = useState([]);
  //////
  const getProduct = async () => {
    const resp = await axios.get(`http://54.207.134.161:4000/product/${id}`);
    console.log(resp);
    setProductName(resp.data.name);
    setImageProductArray(resp.data.imageNameArray);
  };
  ///
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <LayoutLoggedAdm>
      <div className="container-xl justify-content-center ">
        <div className="container-xl">
          <h1> {productName}</h1>
        </div>
        <CardImage
          imageProductArray={imageProductArray}
          getProduct={getProduct}
        />
        <FormSubmitImage
          imageProductArray={imageProductArray}
          getProduct={getProduct} //this renders image once is patched succes
        />
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditImage;
