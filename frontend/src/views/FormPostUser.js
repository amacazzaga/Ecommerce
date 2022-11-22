import React from "react";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

const FormPostUser = ({reloadUsers}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rol] = useState(["admin"]);
  const [cookie] = useCookies();
  const token = cookie.token;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:4000/user",
        {
          name: name,
          lastName: lastName,
          email: email,
          age: age,
          password: password,
          rol: rol,
        },
        { headers: { Authorization: token } }
      );
      console.log(resp);
      reloadUsers()
      setError(
        `El Siguiente User Se Ha Cargado Correctamente : ${resp.data.name}`
      );
    } catch (error) {
      console.log(error.response.data);
      setError("El Usero No Se Ha Podido Cargar!");
    }
  };

  return (
    <div class="accordion-item m-2">
      {/*accordion*/}
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Add a User Admin
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div class="mb-2">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <div class="form-text"></div>
              </div>
              <div class="mb-2">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                <div class="form-text"></div>
              </div>
              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <div class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-2">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button type="submit" class="btn btn-primary">
                Add a New Admin
              </button>
            </form>
            <h5 className="mt-3">{error}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPostUser;
