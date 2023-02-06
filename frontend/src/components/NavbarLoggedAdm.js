import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const NavbarLoggedAdm = () => {
  const [cookie, setCookie] = useCookies();
  return (
    <div>
      <nav class="navbar navbarupcoloradmboard">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light navbardowncoloradmboard">
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
              <Link to="/myaccount">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Products
                  </a>
                </li>
              </Link>
              <Link to="/myaccount/users">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Users
                  </a>
                </li>
              </Link>
            </ul>
            <div class="d-flex">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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

export default NavbarLoggedAdm;
