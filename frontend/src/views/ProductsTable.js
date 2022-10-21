import React from "react";

const ProductsTable = ({ name, price, description }) => {
  return (
    <table class="table container">
    <tbody>
      <tr>
        <td className="col-3">{name}</td>
        <td className="col-3">{price}</td>
        <td className="col-3">{description}</td>
        <td className="col-2">edit</td>
        <td className="col-1">delete</td>
        
      </tr>
    </tbody>
  </table>
  );
};

export default ProductsTable;
