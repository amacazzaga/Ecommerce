import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";

const EditImage = () => {
  const [cookie] = useCookies();
  const { id } = useParams();
  const token = cookie.token;
  const [file, setFile] = useState();
  //
  const getProduct = async () => {
    const resp = await axios.get(`http://localhost:4000/product/${id}`);
    console.log(resp)
  };
  ///
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
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  useEffect(() => {
    
    getProduct();
  }, []);

  return (
    <LayoutLoggedAdm>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept="image/*"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </LayoutLoggedAdm>
  );
};

export default EditImage;
