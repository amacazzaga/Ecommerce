const UsersTable = ({email}) => {
  return (
    <table class="table container">
      <tbody>
        <tr>
          <td className="col-2">{email}</td>
          <td className="col-2">{}</td>
          <td className="col-2">{}</td>
          <td className="col-2">{}</td>
          <td className="col-2">{}</td>
          <td className="col-1">
            <button class="btn btn-success" type="button">
              edit
            </button>
          </td>
          <td className="col-1">
            <button type="button" class="btn btn-danger">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
