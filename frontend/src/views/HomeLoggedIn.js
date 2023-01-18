import React from 'react'
import Home from "../views/Home";
import LayoutLogged from '../components/LayoutLogged'

 const HomeLoggedIn = () => {
  return (
    <LayoutLogged>
    <Home/>
    </LayoutLogged>
  )
}
 

export default HomeLoggedIn