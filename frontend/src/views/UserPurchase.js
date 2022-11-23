import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import { useParams } from "react-router-dom";

const UserPurchase = () => {
    const {id} =useParams()
  return (
    <LayoutLoggedAdm>
      <div>{id}</div>
    </LayoutLoggedAdm>
  );
};

export default UserPurchase;
