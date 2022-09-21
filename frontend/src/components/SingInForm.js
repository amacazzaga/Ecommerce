import React from "react";

const SingInForm = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control"></input>
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input type="text" class="form-control"></input>
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input type="text" class="form-control"></input>
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"   
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
