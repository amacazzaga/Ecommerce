import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const InspectProduct = () => {
  const { id } = useParams();
  //
  const getProduct = async () => {
    const resp = await axios
      .get(`http://localhost:4000/product/${id}`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  useEffect(() => {
    getProduct();
  }, []);
  //
  return (
    <Layout>
      <div>InspectProduct</div>
    </Layout>
  );
};

export default InspectProduct;
