import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getProduct = async () => {
    const resp = await axios.get(`http://localhost:4000/product/${id}`);
    setProduct(resp.data);
  };
  useEffect(() => {
    console.log(product)
    getProduct();
  }, []);

  return (
    <LayoutLoggedAdm>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Edit Product
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <form>
                {/*name*/}
                <div class="mb-3 row">
                  <div class="col-sm-12">
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={product.name}
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
                      placeholder={product.price}
                    ></input>
                  </div>
                </div>
                {/*category*/}
                <select class="form-select" aria-label="Default select example">
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
                    placeholder={product.description}
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
                      placeholder={product.amount}
                    ></input>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary m-2">
                  Save !
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditProduct;
