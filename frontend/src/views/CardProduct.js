import React from "react";
const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";

const CardProduct = ({ name, imageNameArray }) => {
  return (
    <div>
      <div class="card">
        <img
          src={cloudFrontBaseUrl + imageNameArray[0]}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
