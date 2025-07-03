import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import UsersTableHead from "./UsersTableHead";
import UsersTable from "./UsersTable";
import FormPostUser from "./FormPostUser";

const AdminBoardUsers = () => {
  const [cookie] = useCookies();
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(0);
  const token = cookie.token;
  const getUsers = async () => {
    const resp = await axios.get(
      `http://localhost:4000/user?page=${pagination}`,
      {
        headers: { Authorization: token },
      }
    );
    if (resp.data.length == 0) return;
    setUsers(resp.data);
    console.log(resp.data);
  };
  useEffect(() => {
    getUsers();
  }, [pagination]);
  return (
    <LayoutLoggedAdm noFlex>
      <FormPostUser reloadUsers={getUsers} />
      <UsersTableHead />
      {users.map((u) => (
        <UsersTable
          email={u.email}
          name={u.name}
          lastName={u.lastName}
          rol={u.rol[0]}
          id={u._id}
        />
      ))}
      <div className="container-xxl mt-2">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button
                class="page-link"
                onClick={() =>
                  setPagination(
                    pagination < 0 ? pagination === 0 : pagination - 1
                  )
                }
              >
                Previous
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(0)}>
                1
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(1)}>
                2
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(2)}>
                3
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(3)}>
                4
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(4)}>
                5
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link"
                onClick={() => setPagination((pagination) => pagination + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </LayoutLoggedAdm>
  );
};

export default AdminBoardUsers;
