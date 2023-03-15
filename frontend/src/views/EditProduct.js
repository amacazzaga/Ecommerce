import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const [editName, setEditName] = useState();
  const [editPrice, setEditPrice] = useState();
  const [editCategory, setEditCategory] = useState();
  const [editDescription, setEditDescription] = useState();
  const [editAmount, setEditAmount] = useState();
  const [cookie] = useCookies();
  const [error, setError] = useState();
  const token = cookie.token;
  const { id } = useParams();
  const getProduct = async () => {
    const resp = await axios.get(`http://54.207.134.161:4000/product/${id}`).then((resp)=>{
      console.log(resp.data)
      setProduct(resp.data);
      console.log(product)      
    });   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(
        `http://54.207.134.161:4000/product/${id}`,
        {
          name: editName,
          price: editPrice,
          category: editCategory,
          description: editDescription,
          amount: editAmount,//ends up in stock table mongodb!!
        },
        { headers: { Authorization: token } }
      );
      console.log(resp)
      console.log(id);
      setError(
        `El Siguiente Producto Se Ha Editado Correctamente : ${resp.data.name}`
      );
    } catch (error) {
      console.log(error.response.data);
      setError("El Producto No Se Ha Podido Editar!");
    }
  };
  useEffect(() => {
    getProduct();
    console.log(product);
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
              <form onSubmit={handleSubmit}>
                {/*name*/}
                <div class="mb-3 row">
                  <div class="col-sm-12">
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      placeholder={product.name}
                      onChange={(e) => setEditName(e.target.value)}
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
                      placeholder={product.price}
                      onChange={(e) => setEditPrice(e.target.value)}
                    ></input>
                  </div>
                </div>
                {/*category*/}
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setEditCategory(e.target.value)}
                >
                  <option>Category</option>
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
                    onChange={(e) => setEditDescription(e.target.value)}
                  ></textarea>
                  {/*image*/}
                </div>
                {/*amount*/}
                <div class="mb-3 row">
                  <div class="col-sm-12">
                    <input
                      type="number" min="0"
                      readonly
                      class="form-control"
                      placeholder="Entry : New Stock"
                      onChange={(e) => setEditAmount(e.target.value)}
                    ></input>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary m-2">
                  Save !
                </button>
              </form>
              <h5 className="m-4">{error}</h5>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoggedAdm>
  );
};

export default EditProduct;
