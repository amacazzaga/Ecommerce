import React from "react";

const ButtonPurchaseLogIn = ({ totalPrice }) => {
  return (
    <button className="btn btn-success m-2 fw-bolder  ">
      Make Purchase for {`$${totalPrice}`}
    </button>
  );
};

export default ButtonPurchaseLogIn;
