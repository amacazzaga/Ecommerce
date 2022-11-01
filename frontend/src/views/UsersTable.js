const UsersTable = ({email,name,lastName,age,id}) => {
  return (
    <table class="table container">
      <tbody>
        <tr>
          <td className="col-3">{email}</td>
          <td className="col-3">{name}</td>
          <td className="col-3">{lastName}</td>
          <td className="col-1">{age}</td>
         
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
