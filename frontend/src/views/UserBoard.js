import React from "react";
import LayoutLogged from "../components/LayoutLogged";
import axios from "axios";

const UserBoard = ({ userId }) => {
  return (
    <LayoutLogged>
      <h1>{userId}</h1>
    </LayoutLogged>
  );
};

export default UserBoard;
