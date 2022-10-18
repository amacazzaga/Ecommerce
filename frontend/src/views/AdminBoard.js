import React, { useEffect } from 'react'
import axios from 'axios'
import LayoutLoggedAdm from '../components/LayoutLoggedAdm'

const AdminBoard = () => {
  useEffect(() => {
   const products = axios.get("http://localhost:4000/product")
   .then((response)=>{console.log(response.data)})
  
   
  }, [])
  

  return (
    <LayoutLoggedAdm>
 <h1>AdminBoard</h1>
    </LayoutLoggedAdm>
  )
}

export default AdminBoard