import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
const ProductsTable = ({
  name,
  price,
  description,
  category,
  id,
  reloadProducts,
}) => {
  const [cookie] = useCookies();
  const token = cookie.token;
  const deleteProduct = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.delete(`http://ec2-54-157-162-101.compute-1.amazonaws.com:4000/product/${id}`, {
        headers: { Authorization: token },
      });
      console.log(resp);
      reloadProducts();
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <table class="table container">
      <tbody>
        <tr>
          <td className="col-2">{name}</td>
          <td className="col-2">{price}</td>
          <td className="col-2">{description}</td>
          <td className="col-2">{category}</td>
          <td className="col-2">
            <Link to={`/myaccount/editimage/${id}`}>
            <button class="btn btn-primary">add</button>
            </Link>
          </td>
          <td className="col-1">
            <Link to={`/myaccount/editproduct/${id}`}>
              <button class="btn btn-success" type="button">
                edit
              </button>
            </Link>
          </td>
          <td className="col-1">
            <button
              onClick={deleteProduct}
              type="button"
              class="btn btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsTable;
