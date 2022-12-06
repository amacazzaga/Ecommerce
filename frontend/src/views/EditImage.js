import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import CardImage from "./CardImage";
import FormSubmitImage from "./FormSubmitImage";

const EditImage = () => {
  const [cookie] = useCookies();
  const { id } = useParams();
  const token = cookie.token;
  const [imageArray, setImageArray] = useState();
  //
  const getProduct = async () => {
    const resp = await axios.get(`http://localhost:4000/product/${id}`);
    console.log(resp);
    setImageArray(resp.data.imageName);
  };
  ///
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <LayoutLoggedAdm>
      <div className="container-xl"></div>
      <CardImage />
      <FormSubmitImage getProduct={getProduct} imageArray={imageArray} />
    </LayoutLoggedAdm>
  );
};

export default EditImage;
