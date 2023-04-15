import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-xxl ">
      <header>
        <nav className="container-xxl">
          <Navbar />
        </nav>
      </header>
      <main className="container-xl ">{children}</main>
      <footer className="container-xxl">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
