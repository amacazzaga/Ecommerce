const UsersTable = ({ email, name, lastName, age, id, rol }) => {
  return (
    <table class="table container">
      <tbody>
        <tr>
          <td className="col-3">{email}</td>
          <td className="col-3">{name}</td>
          <td className="col-3">{lastName}</td>
          <td className="col-1">{rol}</td>
          <td className="col-1">
            <button class="btn btn-success" type="button">
              edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
