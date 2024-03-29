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
  const [message, setMessage] = useState();
  const { id } = useParams();
  const [cookie] = useCookies();
  const token = cookie.token;

  const getUser = async () => {
    const resp = await axios
      .get(`https://ec2-54-157-162-101.compute-1.amazonaws.com:4000/user/${id}`, {
        headers: { Authorization: token },
      })
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(
        `https://ec2-54-157-162-101.compute-1.amazonaws.com:4000/user/${id}`,
        {
          name: name,
          lastName: lastName,
          email: email,
        },
        { headers: { Authorization: token } }
      );
      setMessage(`El Usuario : ${user.name} , Se Ha Actualizado`);
      console.log(resp);
    } catch (error) {
      setMessage(`El Usuario : ${user.name} , No Se Ha Podido Actualizar`);
      console.log(error);
    }
  };
  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.delete(`https://ec2-54-157-162-101.compute-1.amazonaws.com:4000/user/${id}`, {
        headers: { Authorization: token },
      });
      console.log(resp);
      setMessage(
        `El Usuario : ${user.name} , Se Ha Borrado De La Base De Datos Correctamente`
      );
    } catch (error) {
      setMessage(`El Usuario : ${user.name} , No Se Ha Podido Eliminar`);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getUser();
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
              <form onSubmit={handleSubmit}>
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
                <button
                  onClick={deleteUser}
                  type="button"
                  class="btn btn-danger m-3"
                >
                  Delete User!
                </button>
              </form>
              <h5 className="m-4">{message}</h5>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditUser;
