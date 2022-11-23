import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const EditUser = () => {
  const [user, setUser] = useState({});
  const [name, setEditName] = useState();
  const [lastName, setEditLastName] = useState();
  const [email, setEditEmail] = useState();
  const [error, setError]= useState()
  const { id } = useParams();
  const [cookie] = useCookies();
  const token = cookie.token;

  const getUsers = async () => {
    const resp = await axios.get(`http://localhost:4000/user/${id}`, {
      headers: { Authorization: token },
    });
    setUser(resp.data);
    //console.log(resp.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(
        `http://localhost:4000/user/${id}`,
        {
          name: name,
          lastName: lastName,
          email: email,
        },
        { headers: { Authorization: token } }
      );
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  };
  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.delete(`http://localhost:4000/user/${id}`, {
        headers: { Authorization: token },
      });
      console.log(resp);
      setError(`El Usuario : ${user.name} , Se Ha Borrado De La Base De Datos Correctamente`)
    } catch (error) {
      setError(`El Usuario : ${user.name} , No Se Ha Podido Eliminar`)
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
              <form onSubmit={handleSubmit} >
                {/*name*/}
                <div class="mb-4 row">
                  <div class="col-sm-12">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={user.name}
                      onChange={(e) => setEditName(e.target.value)}
                    ></input>
                  </div>
                </div>
                {/*lastname*/}
                <div class="mb-4 row">
                  <div class="col-sm-12">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={user.lastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                    ></input>
                  </div>
                </div>
                {/*email*/}
                <div class="mb-4 row">
                  <div class="col-sm-12">
                    <label class="form-label">Email</label>
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={user.email}
                      onChange={(e) => setEditEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary m-1">
                  Save !
                </button>
                <button onClick={deleteUser} type="button" class="btn btn-danger m-3">
                  Delete User!
                </button>
              </form>
              <h5 className="m-4">{error}</h5>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditUser;
