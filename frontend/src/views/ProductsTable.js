import React from "react";

const ProductsTable = ({ name, price, description }) => {
  return (
    <table class="table ">
      <tbody>
        <tr>
          <td className="container">{name}</td>
          <td className="container">{price}</td>
          <td className="container">{description}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsTable;
