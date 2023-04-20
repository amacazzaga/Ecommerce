import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import UserPurchaseTableHead from "./UserPurchaseTableHead";
import UserPurchaseTable from "./UserPurchaseTable";

const UserPurchase = () => {
  const [cookie] = useCookies();
  const [user, setUser] = useState({});
  const [sales, setSales] = useState([]);
  const token = cookie.token;
  const { id } = useParams();

  const getUser = async () => {
    const resp = await axios
      .get(`https://ec2-54-157-162-101.compute-1.amazonaws.com:4000/user/${id}`, {
        headers: { Authorization: token },
      })
      .then((resp) => {
        setUser(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  const getSales = async () => {
    const resp = await axios
      .get(`https://ec2-54-157-162-101.compute-1.amazonaws.com:4000/sales/${id}`, {
        headers: { Authorization: token },
      })
      .then((resp) => {
        setSales(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
    getSales();
  }, []);

  return (
    <LayoutLoggedAdm>
      <UserPurchaseTableHead />
      {sales.map((m) => (
        <UserPurchaseTable userEmail={user.email}
        key={m._id}
        amount ={m.amount}  
        idSale={m._id}
        finalPrice ={m.finalPrice}
        date={m.date}
        />
      ))}
    </LayoutLoggedAdm>
  );
};

export default UserPurchase;
