import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import LayoutLogged from "../components/LayoutLogged";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const UserShopping = () => {
  const [purchase, setPurchase] = useState([]);
  const [cookie] = useCookies();
  const token = cookie.token;
  const decoded = jwt_decode(token);
  const userId = decoded.id;
  ////
  const getUserPurchase = async () => {
    const resp = await axios
      .get(`http://localhost:4000/sales/myshopping/${userId}`, {
        headers: { Authorization: token },
      })
      .then(async (resp) => {
        const items = resp.data;
        const arrayOfIds = items.reduce((acc, el) => {
          return acc.concat(
            ...el.details.map((m) => {
              return m.idProduct;
            })
          );
        }, []);
        console.log("arrayofids", arrayOfIds);
        console.log(arrayOfIds);
        await axios
          .get(`http://localhost:4000/product/many?ids=${arrayOfIds.join(",")}`)
          .then((response) => {
            console.log("response", response.data);
            setPurchase(response.data);
          });
      });
  };
  useEffect(() => {
    getUserPurchase();
  }, []);
  //
  return (
    <LayoutLogged>
      <div className="min-vh-100">UserShopping</div>
    </LayoutLogged>
  );
};

export default UserShopping;
