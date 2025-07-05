import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import ShoppingCart from "../views/ShoppingCart";

const Navbar = () => {
  const [inputValue,setInputValue]=useState()
  const [totalPrice, setTotalPrice] = useState(0);

const getTotalPrices = () => {
  const parsed = JSON.parse(localStorage.getItem("product") || "[]");
  if (parsed.length === 0) {
    setTotalPrice(0);         
    return;
  }
  const total = parsed
    .map(p => p.price * p.amount)
    .reduce((acc, v) => acc + v, 0);
  setTotalPrice(total);
};

      useEffect(() => {
        getTotalPrices();
      }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light navbardowncolor">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/signup">
                  Sign Up!
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
     <li className="nav-item">
              <a
                href="#"
                className="nav-link d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#cartModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            </li>
            </ul>
            <div class="d-flex">
              <div class="container-fluid">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Product Name"
                    aria-label="Search"
                    onChange={(e)=>setInputValue(e.target.value)}
                  />
                  <Link to={`/search/${inputValue}`}>
                  <button class="btn btn-primary border-dark bgcolor fw-bold" type="submit">
                    Search
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
              {/* MODAL DEL CARRITO */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalLabel">
                Tu carrito
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
            <ShoppingCart/>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                ${totalPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
