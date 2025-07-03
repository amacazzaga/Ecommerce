import React from "react";
import Footer from "./Footer";

import NavbarLoggedAdm from "./NavbarLoggedAdm";

const LayoutLoggedAdm = ({children, noFlex = false}) => {
  return (
    <div className=" d-flex flex-column min-vh-100">
    <header>
      <navbar >
        <NavbarLoggedAdm />
      </navbar>
    </header>
     <main className={`flex-fill ${noFlex ? '' : 'd-flex'}`}>
    {children}
  </main>
    <footer className="w-100 mt-auto">
      <div className="">
        <Footer />
      </div>
    </footer>
  </div>
  )
}

export default LayoutLoggedAdm;
