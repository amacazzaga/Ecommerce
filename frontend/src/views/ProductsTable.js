import React from "react";

const ProductsTable = ({ name, price, description, image, category, id }) => {
  return (
    <table class="table container">
      <tbody>
        <tr>
          <td className="col-2">{name}</td>
          <td className="col-2">{price}</td>
          <td className="col-2">{description}</td>
          <td className="col-2">{category}</td>
          <td className="col-2">{image}</td>
          <td className="col-1">
            <button type="button" class="btn btn-success">
              edit
            </button>
          </td>
          <td className="col-1">
            <button type="button" class="btn btn-danger">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsTable;
