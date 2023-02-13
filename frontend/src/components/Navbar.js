import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
 /* const [notification, setNotification] = useState(
    localStorage.getItem("product")
  );
  window.addEventListener("storage", () => {
    setNotification(localStorage.getItem("product"));
  });*/
  useEffect(() => {}, []);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light navbardowncolor">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            E-Commerce
          </a>
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
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <Link to="/shoppingcart">
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
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <div class="container btn-group d-flex justify-content-center">
                    <button
                      class="btn btn-secondary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </button>
                    <ul class="dropdown-menu">
                      <Link to={"/ACDC/3"}>
                      <li>
                        <a class="dropdown-item" href="#">
                          AC/DC
                        </a>
                      </li>
                      </Link>
                      <Link to={"/PinkFloyd/2"}>
                      <li>
                        <a class="dropdown-item" href="#">
                          Pink Floyd
                        </a>
                      </li>
                      </Link>
                      <Link to={"/Queen/1"}>
                      <li>
                        <a class="dropdown-item" href="#">
                          Queen
                        </a>
                      </li>
                      </Link>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <div class="container-fluid">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn-search" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
