import React from "react";
import axios from "axios";
import { useState } from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";

const EditImage = () => {
  const [file, setFile] = useState();

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    await axios.post("http://localhost:4000/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <LayoutLoggedAdm>
      <form onSubmit={submit}>
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
