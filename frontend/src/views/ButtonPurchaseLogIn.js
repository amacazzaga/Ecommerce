import React from "react";

const ButtonPurchaseLogIn = ({ totalPrice ,buyProducts}) => {
  return (
    <button onClick={buyProducts} className="btn btn-success m-2 fw-bolder  ">
      Make Purchase for {`$${totalPrice}`}
    </button>
  );
};

export default ButtonPurchaseLogIn;
