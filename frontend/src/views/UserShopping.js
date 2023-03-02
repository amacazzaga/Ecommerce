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
  //
  const getUserPurchase = async () => {
    const resp = await axios
      .get(`http://localhost:4000/sales/myshopping/${userId}`, {
        headers: { Authorization: token },
      })
      .then((resp) => {
        const items = resp.data;
        const itemsDetails = items.map(async (m) => {
          const details = m.details;
          const amountsAndPrices = details.map((a) => {
            const amount = a.amount;
            const price = a.unitPrice;
            return { amount, price };
          });
          console.log(amountsAndPrices)
          const arrayOfIds = m.details.map((p) => {
            return p.idProduct;
          });

          await axios
            .get(
              `http://localhost:4000/product/many?ids=${arrayOfIds.join(",")}`
            )
            .then((response) => {
            //  console.log(response.data);
            });
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
