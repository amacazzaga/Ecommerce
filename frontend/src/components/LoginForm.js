import React from "react";
import axios from "axios";
import {useEffect, useState,useContext } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../context/UserContext";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")
  const [cookie, setCookie] = useCookies();
  const {userIsAdmin,setUserIsAdmin}=useContext(UserContext)
 
  useEffect(() => {
   localStorage.setItem("admin",JSON.stringify(userIsAdmin))
  }, [userIsAdmin]);
  //handle submit form//
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:4000/user/login", {
        email: email,
        password: password,
      });
      console.log(resp)
      setCookie("token", resp.data.token); //send en header auth//
      setUserIsAdmin(resp.data.isUserAdmin)
    } catch (error) { //if catch err, is no resp!
      console.log(error)
      setError(error.response.data);
    }
  };
  if(userIsAdmin===null)
  {return (
    <form onSubmit={handleSubmit}>
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
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
        ></input>
        <label class="form-check-label" for="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
      <h5 className="mt-3">{error}</h5>
    </form>
  );}
  if(userIsAdmin===true){
    return (<h1>admin</h1>)
  }
  if(!userIsAdmin){
    return (<h1>not admin</h1>)
  }
};

export default LoginForm;