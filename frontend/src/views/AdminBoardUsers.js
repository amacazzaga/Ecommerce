import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";

const AdminBoardUsers = () => {
  const [cookie] = useCookies();
  const token = cookie.token;
  const getUsers = async () => {
    const resp = await axios.get(`http://localhost:4000/user`, {
      headers: { Authorization: token },
    });
    console.log(resp.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return <LayoutLoggedAdm>user</LayoutLoggedAdm>;
};

export default AdminBoardUsers;
