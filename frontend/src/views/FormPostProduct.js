import React from "react";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

const FormPostProduct = ({ reloadProducts }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [cookie] = useCookies();
  const [message, setMessage] = useState();
  const token = cookie.token;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://ec2-54-157-162-101.compute-1.amazonaws.com:4000/product",
        {
          name: name,
          price: price,
          category: category,
          description: description,
          amount: amount,
        },
        { headers: { Authorization: token } }
      );
      console.log(resp);
      setMessage(
        `El Siguiente Producto Se Ha Cargado Correctamente : ${resp.data.name}`
      );
      reloadProducts();
    } catch (error) {
      console.log(error.response.data);
      setMessage("El Producto No Se Ha Podido Cargar!");
    }
  };

  ////////////
  return (
    <div class="accordion-item m-2">
      {/*accordion*/}
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Add a Product
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {/*here goes the form*/}
          <div className="container">
            <form onSubmit={handleSubmit} id="productFile">
              {/*name*/}
              <div class="mb-3 row">
                <div class="col-sm-12">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
              </div>
              {/*price*/}
              <div class="mb-3 row">
                <div class="col-sm-12">
                  <input
                    type="number" min="0"
                    readonly
                    class="form-control"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>
              </div>
              {/*category*/}
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  console.log(e.target.value);
                  setCategory(e.target.value);
                }}
              >
                <option selected>Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {/*description*/}
              <div class="mb-3">
                <textarea
                  class="form-control mt-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>      
              {/*amount*/}
              <div class="mb-3 row">
                <div class="col-sm-12">
                  <input
                    type="number" min="0"
                    readonly
                    class="form-control"
                    placeholder="Entry : Stock"// This is amount, but stock for user
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>
              </div>
              <button type="submit" class="btn btn-primary" form="productFile">
                Add Product!
              </button>
            </form>
            <h5 className="m-4">{message}</h5>
          </div>
          {/*end of the form*/}
        </div>
      </div>
    </div>
    
  );
};

export default FormPostProduct;
