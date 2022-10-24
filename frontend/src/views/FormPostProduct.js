import React from "react";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

const FormPostProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:4000/product", {
        name: name,
        price: price,
        category: category,
        description: description,
        amount: amount,
      });
      console.log(resp);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  return (
    <div class="accordion-item m-2">
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
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {/*here goes the form*/}
          <div className="container">
            <form onSubmit={handleSubmit}>
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
                    type="number"
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
                {/*image*/}
                <div class="mb-3">
                  <input
                    class="form-control mt-3"
                    type="file"
                    id="formFile"
                  ></input>
                </div>
              </div>
              {/*amount*/}
              <div class="mb-3 row">
                <div class="col-sm-12">
                  <input
                    type="number"
                    readonly
                    class="form-control"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Add Product!
              </button>
            </form>
          </div>
          {/*end of the form*/}
        </div>
      </div>
    </div>
  );
};

export default FormPostProduct;
