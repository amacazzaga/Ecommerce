import React from "react";

const ProductsTable = ({ name, price, description,image,category,id }) => {
  return (
    <table class="table container">
    <tbody>
      <tr>
        <td className="col-2">{name}</td>
        <td className="col-2">{price}</td>
        <td className="col-2">{description}</td>
        <td className="col-2">{category}</td>
        <td className="col-2">{image}</td>
        <td className="col-1"><div>edit</div></td>
        <td className="col-1"><div>delete</div></td>
        
      </tr>
    </tbody>
  </table>
  );
};

export default ProductsTable;
