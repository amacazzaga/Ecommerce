import React from "react";

const ProductsTable = ({ name, price, description }) => {
  return (
    <table class="table">
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{description}</td>
      </tr>
    </tbody>
  </table>
  );
};

export default ProductsTable;
