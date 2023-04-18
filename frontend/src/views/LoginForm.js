import React from "react";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Layout from "../components/Layout";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookie, setCookie] = useCookies();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://ec2-54-157-162-101.compute-1.amazonaws.com:4000/user/login", {
        email: email,
        password: password,
      });
      console.log(resp);
      setCookie("token", resp.data.token); //send en header auth//
      window.location.href = "/"
    } catch (error) {
      //if catch err, is no resp!
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit} className="min-vh-100">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
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
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit" class="btn btn-primary">
        Login
      </button>
      <h5 className="mt-3">{error}</h5>
    </form>
    </Layout>
  );
};

export default LoginForm;
