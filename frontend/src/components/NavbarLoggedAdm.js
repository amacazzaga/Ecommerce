import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const NavbarLoggedAdm = () => {
 
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light navbardowncoloradmboard">
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLoggedAdm;
