import React from "react";
const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";

const CartProduct = ({ name, imageNameArray, price ,description}) => {
  return (
    <div className="container">
      <div class="card  border border-2 m-3">
        <img
          src={cloudFrontBaseUrl + imageNameArray[0]}
          class="img-fluid"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div className="d-flex justify-content-start ps-3 fw-bolder">
          {"$" + price}
        </div>
        <div className="container d-flex justify-content-between">
         
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
