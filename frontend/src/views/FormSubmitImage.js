import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const FormSubmitImage = ({ imageProductArray, getProduct }) => {
  const [file, setFile] = useState();
  const [cookie] = useCookies();
  const { id } = useParams();
  const token = cookie.token;
  ////////////// patch to mongodb
  const patchImageProduct = async () => {
    const resp = await axios
      .patch(
        `http://localhost:4000/product/image/${id}`,
        {
          imageNameArray: imageProductArray,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((resp) => {
        console.log(resp);
        getProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //////////////// to s3
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    const resp = await axios
      .post("http://localhost:4000/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((resp) => {
        console.log(resp.data.input.Key);
        imageProductArray.push(resp.data.input.Key);
        patchImageProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////

  return (
    <div className="container-xl m-4">
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          className="m-1"
          type="file"
          accept="image/*"
        ></input>
        <button className="btn btn-primary m-1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSubmitImage;
