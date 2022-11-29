import React from 'react'
import LayoutLogged from '../components/LayoutLogged'
import axios from "axios"
import {useCookies} from"react-cookie"
import { useEffect } from 'react'

const UserBoard = () => {
  const [cookie]=useCookies()
  const token = cookie.token
  const getPurchase=async()=>{
    await axios.get()
  }
  return (
    <LayoutLogged>
    <h1>{token}</h1>
    </LayoutLogged>
  )
}

export default UserBoard