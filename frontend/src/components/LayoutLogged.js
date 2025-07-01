import React from 'react'
import Footer from './Footer'
import NavbarLogged from './NavbarLogged'

const LayoutLogged = ({children}) => {
  return (
    <div className=" d-flex flex-column min-vh-100">
    <header>
      <navbar >
        <NavbarLogged />
      </navbar>
    </header>
    <main className="container-xl flex-fill">{children}</main>
    <footer className="w-100 mt-auto">
      <div className="">
        <Footer />
      </div>
    </footer>
  </div>
  )
}

export default LayoutLogged