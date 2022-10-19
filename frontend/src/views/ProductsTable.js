import React from "react";

const ProductsTable = ({ name, price, description }) => {
  return (
   
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{description}</td>
    </tr>
  </tbody>
</table>
  );
};

export default ProductsTable;
