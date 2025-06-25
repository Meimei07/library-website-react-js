const Table = ({ visitors }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-md">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {visitors.map((visitor) => {
            return (
              <tr key={visitor.id}>
                <td>{visitor.id}</td>
                <td>{visitor.name}</td>
                <td>{visitor.phone}</td>
                <td>Edit</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
