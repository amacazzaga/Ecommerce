import React from "react";

const ProductsTableHead = () => {
  return (
    <table class="table container">
      <thead>
        <tr>
          <th className="col-2">Name</th>
          <th className="col-2">Price</th>
          <th className="col-2">Description</th>
          <th className="col-2">Category</th>
          <th className="col-2">Image</th>
          <th className="col-1">Edit</th>
          <th className="col-1">Delete</th>
        </tr>
      </thead>
    </table>
  );
};

export default ProductsTableHead;
