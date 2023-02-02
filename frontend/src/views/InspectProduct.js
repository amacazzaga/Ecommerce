import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";

const InspectProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  //
  const getProduct = async () => {
    const resp = await axios
      .get(`http://localhost:4000/product/${id}`)
      .then((resp) => {
        setProduct(resp.data);
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
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide bg-grey"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <div className="container d-flex col-6">
                <img
                  src={
                    product ? cloudFrontBaseUrl + product.imageNameArray[0] : ""
                  }
                  class="d-block w-100 m-3"
                  alt="..."
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="container d-flex col-6">
                <img
                  src={
                    product ? cloudFrontBaseUrl + product.imageNameArray[1] : ""
                  }
                  class="d-block w-100 m-3"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button "
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default InspectProduct;
