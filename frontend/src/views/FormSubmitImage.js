import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const FormSubmitImage = ({ imageArray }) => {
  const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
  const [file, setFile] = useState();
  const [imageName, setImageName] = useState(imageArray);
  const [cookie] = useCookies();
  const { id } = useParams();
  const token = cookie.token;
  //////////////
  const patchImageProduct = async () => {
    const resp = await axios
      .patch(
        `http://localhost:4000/product/${id}`,
        {
          imageName: imageName,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////////////////
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
        setImageName(imageName.push(resp.data.input.Key));
        patchImageProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmitImage;
