import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import UsersTableHead from "./UsersTableHead";
import UsersTable from "./UsersTable";

const AdminBoardUsers = () => {
  const [cookie] = useCookies();
  const [users, setUsers] = useState([]);
  const token = cookie.token;
  const getUsers = async () => {
    const resp = await axios.get(`http://localhost:4000/user`, {
      headers: { Authorization: token },
    });
    setUsers(resp.data);
    console.log(resp.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <LayoutLoggedAdm>
      <UsersTableHead />
      {users.map((u) => (
        <UsersTable email={u.email} />
      ))}
    </LayoutLoggedAdm>
  );
};

export default AdminBoardUsers;
