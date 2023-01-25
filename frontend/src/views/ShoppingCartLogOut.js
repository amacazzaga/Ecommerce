import React from 'react'
import { useState } from 'react';
import Layout from '../components/Layout'
const fromLocaleStorage = localStorage.getItem("product")
const parsed = JSON.parse(fromLocaleStorage)

const ShoppingCartLogOut = () => {
  const [arrayProduct,setArrayProducts]= useState(parsed)
  
  return (
    <Layout>
    <div>{arrayProduct[1]}</div>
    </Layout>
  )
}

export default ShoppingCartLogOut