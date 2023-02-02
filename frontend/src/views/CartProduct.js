import React from "react";
import { useEffect } from "react";
const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";

const CartProduct = ({
  name,
  imageNameArray,
  price,
  description,
  id,
  reloadProducts,
}) => {
  const fromLocaleStorage = localStorage.getItem("product");
  const parsed = JSON.parse(fromLocaleStorage);
  //
  const deleteItem = () => {
    const index = parsed.indexOf(id);
    parsed.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(parsed));
    reloadProducts();
  };
  useEffect(() => {
    reloadProducts();
  }, [fromLocaleStorage]);

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
        <div className="container d-flex justify-content-between ">
        <div className="d-flex  ps-3 fw-bolder">
          {"$" + price}
        </div>
        <div>Amount Here</div>
        </div>
        <div>
          <button className="btn btn-danger ms-3 m-1 fw-bolder " onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
