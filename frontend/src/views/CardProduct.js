import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";
import ModalLogOrSing from "./ModalLogOrSing";
const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
const productArrayToStorage = JSON.parse(localStorage.getItem("product")) || [];
//productArraytostorage, get the item selected previous or init itself on empty array
const CardProduct = ({ name, imageNameArray, id, price }) => {
  const [cookie] = useCookies();
  const token = cookie.token;
  //
  const buyProduct = async () => {
    try {
      const decoded = jwt_decode(token);
      const idUser = decoded.id;
      const resp = await axios.post(
        `http://localhost:4000/sales`,
        {
          idUser: idUser,
          details: [{ idProduct: id, amount: 1, unitPrice: price }],
        },
        {
          headers: { Authorization: token },
        }
      );
      console.log(resp);
      window.alert("compra exitosa!!!")
    } catch (err) {
      console.log(err);
    }
  };
  //
  return (
    <div>
      <ModalLogOrSing />
      <div>
        <div class="card m-2">
          <Link to={`/${id}`}>
            <img
              src={cloudFrontBaseUrl + imageNameArray[0]}
              class="card-img-top"
              alt="..."
            />
          </Link>
          <div class="card-body">
            <Link to={`/${id}`}>
              <h5 class="card-title">{name}</h5>
            </Link>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="d-flex justify-content-start ps-3 fw-bolder">
            {"$" + price}
          </div>
          <div className="container d-flex justify-content-between">
            {token ? (
              <button
                type="button"
                class="btn btn-primary  m-1 fw-bolder"
                onClick={buyProduct}
              >
                Buy It!
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-primary m-1 fw-bolder"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Buy It!
              </button>
            )}
            <button
              class="nav-link border border-white m-1 bg-white"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Add To Shopping Cart"
              onClick={() => {
                if (productArrayToStorage.includes(id)) return;
                productArrayToStorage.push({id,amount:1,price});
                localStorage.setItem(
                  "product",
                  JSON.stringify(productArrayToStorage)
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
