import React from "react";

const UsersTableHead = () => {
  return (
    <table class="table container">
      <thead>
        <tr>
          <th className="col-2">Email</th>
          <th className="col-2">Name</th>
          <th className="col-2">LastName</th>
          <th className="col-2">Age</th>
          <th className="col-2">Rol</th>
          <th className="col-1">Edit</th>
          <th className="col-1">Delete</th>
        </tr>
      </thead>
    </table>
  );
};

export default UsersTableHead;