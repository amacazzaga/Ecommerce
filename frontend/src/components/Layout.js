import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";
const Layout = ({ children }) => (
  <div className=" d-flex flex-column min-vh-100">
    {/* HEADER */}
    <header className="">
      <nav>
        <Navbar />
      </nav>
    </header>

    {/* MAIN se expande y empuja el footer al final */}
    <main className="d-flex flex-fill">{children}</main>

    {/* FOOTER a todo el ancho del viewport */}
    <footer className="w-100 mt-auto">
      <div className="">
        <Footer />
      </div>
    </footer>
  </div>
);

export default Layout;
