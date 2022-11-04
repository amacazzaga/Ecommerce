import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const EditUser = () => {
  const [user, setUser] = useState({});
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

  return (
    <LayoutLoggedAdm>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Edit User
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <form>
                {/*name*/}
                <div class="mb-3 row">
                  <div class="col-sm-12">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={user.name}
                    ></input>
                  </div>
                </div>
                {/*lastname*/}
                <div class="mb-3 row">
                  <div class="col-sm-12">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={user.lastName}
                    ></input>
                  </div>
                </div>
                {/*email*/}
                <div class="mb-3 row">
                  <div class="col-sm-12">
                    <label class="form-label">Email</label>
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={user.email}
                    ></input>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary m-2">
                  Save !
                </button>
                <button type="button" class="btn btn-danger">
                  Delete User!
                </button>
              </form>
              <h5 className="m-4">error</h5>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditUser;
