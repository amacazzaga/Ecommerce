import React from 'react'

const UserPurchaseTable = ({userEmail,amount,idProduct,key,finalPrice}) => {
    return (
        <table class="table container">
          <thead>
            <tr>
              <th className="col-3">{userEmail}</th>
              <th className="col-3">{idProduct}</th>
              <th className="col-3">{amount}</th>
              <th className="col-2">{finalPrice}</th>
              <th className="col-2">Date</th>             
            </tr>
          </thead>
        </table>
      );
}

export default UserPurchaseTable