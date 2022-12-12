import React from "react";
import { useState } from "react";

const CardImage = ({ imageProductArray }) => {
  const [page, setPage] = useState(0);
  const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
  return (
    <div class="card align-items-center border border-5 m-1  ">
      <div class="mt-3 m-2">
        <button class="btn btn-danger">Delete current image</button>
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
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" onClick={() => setPage(0)}>
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onClick={() => setPage(1)}>
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onClick={() => setPage(2)}>
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onClick={() => setPage(3)}>
              4
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onClick={() => setPage(4)}>
              5
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CardImage;
