import React from "react";

const ButtonPurchase = ({ totalPrice }) => {
  return (
    <button className="btn btn-success m-2 fw-bolder  " data-bs-toggle="modal"
    data-bs-target="#exampleModal">
      Make Purchase for { `$${totalPrice}`}
    </button>
  );
};

export default ButtonPurchase;
