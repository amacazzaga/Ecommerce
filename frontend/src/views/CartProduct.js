import React from "react";
import { useEffect } from "react";
const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
//
const CartProduct = ({
  name,
  imageNameArray,
  price,
  description,
  id,
  reloadProducts,
}) => {
  //
  const deleteItem = () => {
    const fromLocaleStorage = localStorage.getItem("product");
    const parsed = JSON.parse(fromLocaleStorage);
    const newItems = parsed.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem("product", JSON.stringify(newItems));
    reloadProducts();
  };
  //
  const amountInLocaleStorage = () => {
    const fromLocaleStorage = localStorage.getItem("product");
    const newAmounts = JSON.parse(fromLocaleStorage);
    const foundItem = newAmounts.find((item) => {
      return item.id === id;
    });
    return foundItem.amount;
  };
  //
  useEffect(() => {
    reloadProducts();
  }, []);
  //
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
        <div className="container d-flex justify-content-between align-items-center ">
          <div className=" ps-3 fw-bolder"><div>{"$" + price}</div></div>
          <input
            className="fw-bold form-control w-50"
            type="number"
            min="1"
            onChange={(e) => {
              const fromLocaleStorage = localStorage.getItem("product");
              const newAmounts = JSON.parse(fromLocaleStorage);
              const foundItem = newAmounts.find((item) => {
                return item.id === id;
              });
              const newItems = (foundItem.amount = Number(e.target.value));
              localStorage.setItem("product", JSON.stringify(newAmounts));
              reloadProducts();
            }}
            value={amountInLocaleStorage()}
            placeholder={amountInLocaleStorage()}
          ></input>
        </div>
        <div>
          <button
            className="btn btn-danger ms-1rem m-1 fw-bolder "
            onClick={deleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
