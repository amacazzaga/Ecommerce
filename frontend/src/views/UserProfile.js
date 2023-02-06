import React from "react";
import axios from "axios";
import LayoutLogged from "../components/LayoutLogged";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
//const decoded = jwt_decode(token.id);

const UserProfile = () => {
  const [cookie] = useCookies();
  const token = cookie.token;
  /*const getUser = async () => {
    const resp = await axios
      .get(`http://localhost:4000/user/myprofile?useris=${userId}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  useEffect(() => {
    getUser();
  }, []);*/

  return (
    <LayoutLogged>
      <div>userprofile</div>
    </LayoutLogged>
  );
};

export default UserProfile;
