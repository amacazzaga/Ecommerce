import React from "react";

const ProductsTable = ({ name, price, description }) => {
  return (
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{name}</td>
        <td>{price}</td>
        <td>{description}</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  );
};

export default ProductsTable;
