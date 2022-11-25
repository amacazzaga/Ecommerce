import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import UserPurchaseTableHead from "./UserPurchaseTableHead";

const UserPurchase = () => {
  const [cookie] = useCookies();
  const [user,setUser]=useState()
  const [sales, setSales] = useState();
  const token = cookie.token;
  const { id } = useParams();

  const getUser = async () => {
    const resp = await axios
      .get(`http://localhost:4000/user/${id}`, {
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
      .get(`http://localhost:4000/sales/${id}`, {
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
    </LayoutLoggedAdm>
  );
};

export default UserPurchase;
