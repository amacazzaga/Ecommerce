import React from 'react'
import LayoutLogged from '../components/LayoutLogged'

const UserProfile = ({userId}) => {
  return (
    <LayoutLogged>
    <div>{userId}</div>
    </LayoutLogged>
  )
}

export default UserProfile