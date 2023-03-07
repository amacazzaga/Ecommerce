import React from 'react'

const UserPurchaseItem = ({key,name,imageNameArray,id,price,description,amount}) => {
  return (
    <div>
    <div>{name}</div>
    <div>{price}</div>
    </div>
  )
}

export default UserPurchaseItem