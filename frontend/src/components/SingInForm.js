import React from "react";
import { useState } from "react";
import axios from "axios";

const SingInForm = () => {
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <div>
      <form>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)}></input>
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input type="text" class="form-control" onChange={(e)=>setLastName(e.target.value)}></input>
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input type="text" class="form-control" onChange={(e)=>setAge(e.target.value)}></input>
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
          onChange={(e)=>setEmail(e.target.value)} 
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
            onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SingInForm;
