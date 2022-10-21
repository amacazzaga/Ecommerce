import React from "react";

const TableHead = () => {
  return (
    <table class="table container">
      <thead>
        <tr>
          <th className="col-3">First</th>
          <th className="col-3">Last</th>
          <th className="col-3">Handle</th>
          <th className="col-2">Edit</th>
          <th className="col-1">Delete</th>
        </tr>
      </thead>
    </table>
  );
};

export default TableHead;
