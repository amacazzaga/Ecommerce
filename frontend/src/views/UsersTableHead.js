import React from "react";

const UsersTableHead = () => {
  return (
    <table class="table container">
      <thead>
        <tr>
          <th className="col-3">Email</th>
          <th className="col-3">Name</th>
          <th className="col-3">LastName</th>
          <th className="col-1">Rol</th>
          <th className="col-1">Sales</th>
          <th className="col-1">Edit</th>
          
        </tr>
      </thead>
    </table>
  );
};

export default UsersTableHead;