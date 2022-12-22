import React from 'react'

const UserPurchaseTable = ({userEmail,idProduct,idSale,finalPrice,date}) => {
    return (
        <table class="table container">
          <thead>
            <tr>
              <th className="col-3">{userEmail}</th>
              <th className="col-3">{idSale}</th>
              <th className="col-3"><button>detail</button></th>
              <th className="col-2">{finalPrice}</th>
              <th className="col-2">{date}</th>             
            </tr>
          </thead>
        </table>
      );
}

export default UserPurchaseTable