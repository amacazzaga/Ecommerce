import React from 'react'
import LayoutLogged from '../components/LayoutLogged'

import SearchProduct from './SearchProduct'

const HomeSearchProductLogIn = () => {
  return (
    <LayoutLogged>
         <div className="container d-flex flex-wrap ">
        <SearchProduct/>
      </div>
    </LayoutLogged>
  )
}

export default HomeSearchProductLogIn