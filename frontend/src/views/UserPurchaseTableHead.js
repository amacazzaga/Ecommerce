import React from "react";

const UserPurchaseTableHead = () => {
    return (
        <table class="table container">
          <thead>
            <tr>
              <th className="col-3">User</th>
              <th className="col-3">Sale Id</th>
              <th className="col-3">Sale Detail</th>
              <th className="col-2">Final Price</th>
              <th className="col-2">Date</th>             
            </tr>
          </thead>
        </table>
      );
};

export default UserPurchaseTableHead;
