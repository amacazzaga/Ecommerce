import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import CardImage from "./CardImage";
import FormSubmitImage from "./FormSubmitImage";

const EditImage = () => {
  const { id } = useParams();
  const [imageProductArray, setImageProductArray] = useState([]);
  //////
  const getProduct = async () => {
    const resp = await axios.get(`http://localhost:4000/product/${id}`);
    console.log(resp);
    setImageProductArray(resp.data.imageName);
  };
  ///
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <LayoutLoggedAdm>
      <div className="container-xl justify-content-center ">
        <CardImage imageProductArray={imageProductArray} />
        <FormSubmitImage
          imageProductArray={imageProductArray}
          getProduct={getProduct} //this renders image once is patched succes
        />
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditImage;
