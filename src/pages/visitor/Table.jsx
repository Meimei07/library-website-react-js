import { Link } from "react-router-dom";

const Table = ({ visitors, onEdit, onDelete }) => {
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
                <td>
                  <Link
                    to="form"
                    onClick={() => onEdit(visitor.id)}
                    className="text-blue-500 mr-1 cursor-pointer hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => onDelete(visitor.id)}
                    className="text-red-500 cursor-pointer hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
