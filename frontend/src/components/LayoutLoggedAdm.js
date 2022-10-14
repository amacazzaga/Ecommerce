import React from 'react'
import Footer from './Footer'
import NavbarLoggedAdm from './NavbarLoggedAdm'

const LayoutLoggedAdm = ({children}) => {
  return (
    <div className="container-xxl ">
    <header>
      <navbar className="container-xl">
        <NavbarLoggedAdm />
      </navbar>
    </header>
    <main className="container-xl">{children}</main>
    <footer className="container-xxl" >
      <Footer/>
    </footer>
  </div>
  )
}

export default LayoutLoggedAdm