import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const EditUser = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const [cookie] = useCookies();
  const token = cookie.token;

  const getUsers = async () => {
    const resp = await axios.get(`http://localhost:4000/user/${id}`, {
      headers: { Authorization: token },
    });
    setUser(resp.data);
    console.log(resp.data);
  };

  useEffect(() => {
    getUsers();
  }, [user]);
  return <LayoutLoggedAdm></LayoutLoggedAdm>;
};

export default EditUser;
