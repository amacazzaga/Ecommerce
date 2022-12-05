import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";

const EditImage = () => {
  const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
  const [cookie] = useCookies();
  const [file, setFile] = useState();
  const { id } = useParams();
  const token = cookie.token;
  const [imageName, setImageName] = useState();
  //
  const getProduct = async () => {
    const resp = await axios.get(`http://localhost:4000/product/${id}`);
    console.log(resp);
    setImageName(resp.data.imageName);
  };
  ///
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
  //
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <LayoutLoggedAdm>
      <div>
        <img src={cloudFrontBaseUrl + imageName} alt=""></img>
        <form onSubmit={onSubmit}>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditImage;
