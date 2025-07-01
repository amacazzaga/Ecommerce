import React from "react";
import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const SingUpForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rol] = useState(["noadmin"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:4000/user", {
        name: name,
        lastName: lastName,
        age: age,
        email: email,
        password: password,
        rol: rol,
      });
      console.log(resp.data);
      window.location.href = "/login";
      window.alert(
        `User was created : ${email}, please login to start shopping`
      );
    } catch (err) {
      setError(err.response.data.errors[0]);
    }
  };
  return (
    <Layout>
      <div className="m-5">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <div class="form-text"></div>
          </div>
          <div class="mb-3">
            <label class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <div class="form-text"></div>
          </div>

          <div class="mb-3">
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
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div class="mb-3">
            <label class="form-label">Im 18 Years Or Older</label>
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value={age}
                aria-label="..."
                onClick={() => {
                  age ? setAge(false) : setAge(true);
                }}
              ></input>
            </div>
            <div class="form-text"></div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign Up
          </button>
        </form>
        <h5 className="mt-3">{error}</h5>
      </div>
    </Layout>
  );
};

export default SingUpForm;
