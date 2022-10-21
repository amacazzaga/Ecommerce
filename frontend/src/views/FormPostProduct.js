import React from "react";

const FormPostProduct = () => {
  return (
    <div className="form border border-5 rounded-3 mb-5 mt-5">
      <table class="table container">
        <thead>
          <tr>
            <th className="col-2">Name</th>
            <th className="col-2">Price</th>
            <th className="col-2">Description</th>
            <th className="col-2">Category</th>
            <th className="col-2">Image</th>
            <th className="col-1"></th>
            <th className="col-1"></th>
          </tr>
        </thead>
      </table>
      <div className="container">
        <input className="col-2 m-1"></input>
        <input className="col-2 m-1"></input>
        <input className="col-2 m-1"></input>
        <input className="col-2 m-1"></input>
        <input className="col-2 m-1" ></input>
        <button className="btn btn-primary btn-sm mb-2 col-1 m-1">Add</button>
      </div>
    </div>
  );
};

export default FormPostProduct;
