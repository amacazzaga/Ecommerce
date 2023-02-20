import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";

const NavbarLogged = () => {
  const [cookie, setCookie] = useCookies();
  const [inputValue,setInputValue]=useState()
  return (
    <div>
      <nav class="navbar navbarupcolor">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Product Name"
              aria-label="Search"
              onChange={(e)=>setInputValue(e.target.value)}
            ></input>
            <Link to={`/search/${inputValue}`}>
            <button class="btn btn-primary border-dark bgcolor fw-bold" type="submit">
              Search
            </button>
            </Link>
          </form>
        </div>
      </nav>
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
              <Link to="/myaccount">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    My Shopping
                  </a>
                </li>
              </Link>
              <Link to={"/myaccount"}>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    My Profile
                  </a>
                </li>
              </Link>
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
                      <Link to={"/category/3"}>
                      <li>
                        <a class="dropdown-item" href="#">
                          AC/DC
                        </a>
                      </li>
                      </Link>
                      <Link to={"/category/2"}>
                      <li>
                        <a class="dropdown-item" href="#">
                          Pink Floyd
                        </a>
                      </li>
                      </Link>
                      <Link to={"/category/1"}>
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
              <div class="dropdown">
                <button
                  class="btn account-btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </button>
                <ul
                  class="dropdown-menu "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li
                    onClick={() => {
                      setCookie("token", "");
                      localStorage.clear();
                    }}
                  >
                    <a class="dropdown-item" href="/">
                      LogOut
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLogged;
