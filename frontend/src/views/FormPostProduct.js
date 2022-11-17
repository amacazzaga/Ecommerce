import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const FormPostProduct = ({reloadProducts}) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [data, setData] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [cookie] = useCookies();
  const [message, setMessage] = useState();
  const token = cookie.token;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:4000/product",
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
      reloadProducts()
    } catch (error) {
      console.log(error.response.data);
      setMessage("El Producto No Se Ha Podido Cargar!");
  
    }
  };
  const handleImage = async () => {
    if(!data) return;
    console.log("data",data)
    try {
      const resp = await axios.post(
        `https://api.imgur.com/3/image/`,
        {
          data,
        },
        {
          headers: { Authorization: "Client-ID 093daa7306521c2" },
        }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  ///////////
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  ///////////////
  useEffect(() => {
  // console.log("data", data)
  handleImage()
  }, [data]);
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
                {/*image*/}
                <div class="mb-3">
                  <input
                    class="form-control mt-3"
                    type="file"
                    id="formFile"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      getBase64(file).then((data) => {
                        setData(data);
                        console.log(data);
                      });
                    }}
                  ></input>
                  <div class="container mb-3">
                    <img class="mt-3" alt="" />
                  </div>
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
            <h5 className="m-4">{message}</h5>
          </div>
          {/*end of the form*/}
        </div>
      </div>
    </div>
  );
};

export default FormPostProduct;
