import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";

const EditImage = () => {
  const [cookie] = useCookies();
  const [file, setFile] = useState();
  const token = cookie.token;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    await axios.post("http://localhost:4000/images", formData, {
      headers: { "Content-Type": "multipart/form-data", Authorization: token },
    });
  };

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
