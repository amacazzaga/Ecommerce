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
    const sales = await axios
      .get(`http://54.207.134.161:4000/sales/myshopping/${userId}`, {
        headers: { Authorization: token },
      })
      .then(async (resp) => {
        const items = resp.data;
        const details = items.map((m) => m.details);
        console.log("details",details)
        const arrayOfIds = items.reduce((acc, el) => {
          return acc.concat(
            ...el.details.map((m) => {
              return m.idProduct;
            })
          );
        }, []);
        const products = await axios
          .get(`http://54.207.134.161:4000/product/many?ids=${arrayOfIds.join(",")}`)
          .then((response) => {
            console.log("products",response.data);
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
