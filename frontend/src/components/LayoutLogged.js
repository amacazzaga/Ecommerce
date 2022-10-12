import React from 'react'
import Footer from './Footer'
import NavbarLogged from './NavbarLogged'

const LayoutLogged = ({children}) => {
  return (
    <div className="container-xxl ">
    <header>
      <navbar className="container-xl">
        <NavbarLogged />
      </navbar>
    </header>
    <main className="container-xl">{children}</main>
    <footer className="container-xxl" >
      <Footer/>
    </footer>
  </div>
  )
}

export default LayoutLogged