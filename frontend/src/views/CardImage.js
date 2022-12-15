import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const CardImage = ({ imageProductArray, getProduct }) => {
  const [page, setPage] = useState(0);
  const [removed, setRemoved] = useState();
  const { id } = useParams();
  const [cookie] = useCookies();
  const token = cookie.token;
  const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
  ///
  const patchImageProduct = async () => {
    const resp = await axios
      .patch(
        `http://localhost:4000/product/${id}`,
        {
          imageName: removed,
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
  //
  const deleteImage = () => {
    const copy = [].concat(imageProductArray);
    copy.splice([page], 1);
    setRemoved(copy);
  };
  useEffect(() => {
    patchImageProduct();
    getProduct();
  }, [removed]);
  //
  return (
    <div class="card align-items-center border border-5 m-1  ">
      <div class="mt-3 m-2">
        <button class="btn btn-danger" onClick={deleteImage}>
          Delete current image
        </button>
      </div>
      <img
        src={cloudFrontBaseUrl + imageProductArray[page]}
        className="img-fluid m-3"
        width="400"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{imageProductArray[page]}</h5>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination ">
          <li class="page-item">
            <a href="#" class="page-link" onClick={() => setPage(0)}>
              1
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link" onClick={() => setPage(1)}>
              2
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link" onClick={() => setPage(2)}>
              3
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link" onClick={() => setPage(3)}>
              4
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link" onClick={() => setPage(4)}>
              5
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CardImage;
